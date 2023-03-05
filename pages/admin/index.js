import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; 
import useAuth from '@/lib/hook/useAuth';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { apiRootUrl,    apiEndpoint  } = useAuth();
  
 console.log('first',  apiRootUrl,
 apiEndpoint );
  const handleSubmit = async (event) => {
    event.preventDefault();
    // `${apiRootUrl}${apiEndpoint?.ticket?.list}`
    // try {
    //   // Submit the login form data to the server
    //   const response = await axios.post(`${apiRootUrl}/api/v1/login`, {
    //     username: username,
    //     password: password
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     }
    //   });
  
    //   if (response.status === 200) {
    //     const user = await response;
    //     // export function saveUserSession(user) {
    //     //     sessionStorage.setItem("user", JSON.stringify(user));
    //     //   }
          
    //     //   export function getUserSession() {
    //     //     const user = sessionStorage.getItem("user");
    //     //     return user ? JSON.parse(user) : null;
    //     //   }
          
    //     //   export function clearUserSession() {
    //     //     sessionStorage.removeItem("user");
    //     //   }
    //     // If login is successful, set session data in session storage
    //     sessionStorage.setItem("user", JSON.stringify(user));
    //      sessionStorage.setItem('isLoggedIn', true);
  
    //     // Redirect to the dashboard page
    //     router.push('/dashboard');
    //   } else {
    //     // If login is unsuccessful, display an error message
    //     setError('Incorrect username or password');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   setError('Login failed');
    // }
  };
  
  return (
    <div className="container">
      <h1 className="text-center my-5">Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
export default  LoginPage;
LoginPage.getLayout = function PageLayout(page) {
    return <>{page}</>;
  };