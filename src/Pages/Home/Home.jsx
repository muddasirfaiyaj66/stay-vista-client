import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";


const Home = () => {
    return (
        <div className="space-y-10">
          <Categories></Categories>
          <Rooms></Rooms>
        </div>
    );
};

export default Home;