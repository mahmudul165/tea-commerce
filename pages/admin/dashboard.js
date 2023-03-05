import Card from "@/components/admin/Card";
import PrivateRoute from "@/components/PrivateRoute";

 

const DashboardPage = () => {
  return (
    <PrivateRoute>
      
  <main className="p-6  space-y-6 my-1">
  <section className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-6 gy-2 p-3" > 
   
      
        <Card
          name="Total Order"
          path="/patient/create-new-patient"
          number="300"
          bgColor="bg-warning "
          // style={{colo:'#dc2626'}}
        />
        <Card
          name="Total Customer"
          path="/all-ticket/create-new-ticket"
          number="73"
          bgColor="bg-dark"
        />
        <Card
          name="Sell"
          path="/therapist/create-new-therapist"
          number="37"
          bgColor="bg-danger"
        />
        <Card
          name="New Products"
          path="/appointment"
          number="455"
          bgColor="bg-secondary"
        />
         <Card
          name="Sell"
          path="/therapist/create-new-therapist"
          number="37"
          bgColor="bg-danger"
        />
        <Card
          name="New Products"
          path="/appointment"
          number="455"
          bgColor="bg-primary"
        />
        <Card
          name="Total Order"
          path="/patient/create-new-patient"
          number="300"
          bgColor="bg-warning "
          // style={{colo:'#dc2626'}}
        />
        <Card
          name="Total Customer"
          path="/all-ticket/create-new-ticket"
          number="73"
          bgColor="bg-dark"
        />
         <Card
          name="Sell"
          path="/therapist/create-new-therapist"
          number="37"
          bgColor="bg-primary"
        />
        <Card
          name="New Products"
          path="/appointment"
          number="455"
          bgColor="bg-secondary"
        />
         <Card
          name="Sell"
          path="/therapist/create-new-therapist"
          number="37"
          bgColor="bg-danger"
        />
         <Card
          name="Total Order"
          path="/patient/create-new-patient"
          number="300"
          bgColor="bg-warning "
          // style={{colo:'#dc2626'}}
        />
       
      </section>
   </main>
   
    </PrivateRoute>
  );
};

export default DashboardPage;
DashboardPage.getLayout = function PageLayout(page) {
    return <>{page}</>;
  };