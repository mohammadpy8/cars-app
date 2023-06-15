import carsData from "../../data/carsData";
import CarsPage from "@/components/template/CarsPage";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";

const Details = () => {
    return (
        <div>
            <SearchBar />
            <Categories />
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;