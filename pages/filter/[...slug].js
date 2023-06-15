import CarList from "@/components/template/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const FliteredCars = () => {

    const router = useRouter();
    const [min, max] = router.query.slug || [];
    
    const filterData = carsData.filter(item => item.price > min && item.price > max);

    if(!filterData.length) return <h3>Not Found</h3>

    return (
        <CarList data={filterData} />
    );
};

export default FliteredCars;