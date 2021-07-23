import Featured from "../../component/featured/Featured";
import List from "../../component/list/List";
import Navbar from "../../component/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <List/>
      <List/>

    </div>
  );
};

export default Home;
