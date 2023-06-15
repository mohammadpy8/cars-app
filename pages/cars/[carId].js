import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetails from "@/components/template/CarDetails";

const CarDetail = () => {

    const router = useRouter();
    const { carId } = router.query;

    const carDetails = carsData[carId - 1];

    return (

        <CarDetails {...carDetails} />
        
    );
};

export default CarDetail;