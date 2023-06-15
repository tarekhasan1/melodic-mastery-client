import axios from "axios";
import { useEffect, useState } from "react";

const useClasses = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/classes`
                );
                // console.log(response.data);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    return [data, loading];
};

export default useClasses;
