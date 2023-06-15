import carsData from "@/data/carsData";
import CarList from "@/components/template/CarList";

const suv = () => {

    const suvCars = carsData.filter(car => car.category === "suv");

    return (
        <CarList data={suvCars} /> 
    );
};

export default suv;