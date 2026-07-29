function Home() {
  const isUserLoggedIn = false;
  if (isUserLoggedIn) {
    return <h1>Logged in successfull.</h1>;
  }
  const isAdmin = false;
  return (
    <div>
      {isAdmin && <h1>Please login with admin panel.</h1>}
      <h1>Please Login.</h1>
    </div>
  );
}

export default Home;
