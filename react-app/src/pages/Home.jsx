import toast from "react-hot-toast";

function Home() {
  const isUserLoggedIn = false;
  if (isUserLoggedIn) {
    toast.success("Hello");
    return <h1>Logged in successfull.</h1>;
  }
  const isAdmin = false;
  return (
    <div>
      {isAdmin && <h1>Please login with admin panel.</h1>}
      <h1>Please Login.</h1>
      <button onClick={() => toast.error("Hello")}>Toast</button>
    </div>
  );
}

export default Home;
