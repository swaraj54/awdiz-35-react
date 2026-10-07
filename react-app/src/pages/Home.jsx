import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Home() {
  const state = useSelector((state) => state.auth.user);
  console.log(state, "state");
  return (
    <div>
      <h1>Hello! {state?.name}, Email - {state?.email}, Welcome to our app!</h1>
    </div>
  );
}

export default Home;
