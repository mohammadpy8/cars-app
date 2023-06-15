import CarList from "@/components/template/CarList";
import carsData from "@/data/carsData";

const hatchback = () => {

    const hatchbackCars = carsData.filter(car => car.category === "hatchback");

    return (
        <CarList data={hatchbackCars} /> 
    );
};

export default hatchback;