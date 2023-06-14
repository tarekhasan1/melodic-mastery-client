import axios from "axios";
import { useEffect, useState } from "react";

const useClasses = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/classes`
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
