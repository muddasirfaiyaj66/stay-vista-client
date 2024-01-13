import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";


const Home = () => {
    return (
        <div className="space-y-10">
          <Helmet><title>StayVista | Home</title></Helmet>
          <Categories></Categories>
          <Rooms></Rooms>
        </div>
    );
};

export default Home;