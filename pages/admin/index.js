import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { apiUrl  } = useAuth();
  
 console.log('first',  apiUrl.apiRootUrl);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // `${apiRootUrl}${apiEndpoint?.ticket?.list}`
    try {
      // Submit the login form data to the server
      const response = await axios.post(`${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.login}`, {
        username: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
  
      if (response.status === 200) {
        const user = await response;
        // export function saveUserSession(user) {
        //     sessionStorage.setItem("user", JSON.stringify(user));
        //   }
          
        //   export function getUserSession() {
        //     const user = sessionStorage.getItem("user");
        //     return user ? JSON.parse(user) : null;
        //   }
          
        //   export function clearUserSession() {
        //     sessionStorage.removeItem("user");
        //   }
        // If login is successful, set session data in session storage
        sessionStorage.setItem("user", JSON.stringify(user));
         sessionStorage.setItem('isLoggedIn', true);
  
        // Redirect to the dashboard page
        router.push('/admin/dashboard');
      } else {
        // If login is unsuccessful, display an error message
        setError('Incorrect username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed');
    }
  };

  return (
    <div className="container    my-5 ">
      <div className="row">
        <div className="col-md-6 offset-md-3 border p-5  rounded-3 shadow-sm  ">
          <div className="text-center">
            {" "}
            <FaUser size={60} className="cus-color-primary" />
          </div>
          <h4 className="text-center mt-4">Welcome :)</h4>

          <h1 className="text-center my-5">Admin Login</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              type="submit"
              className="btn btn-lg  w-100 cus-bg-primary px-4 text-white  fs-5 fw-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
LoginPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
