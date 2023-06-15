import carsData from "@/data/carsData";
import CarList from "@/components/template/CarList";
    
const sport = () => {

    const sportCars = carsData.filter(car => car.category === "sport");

    return (
        <CarList data={sportCars} /> 
    );
};

export default sport;