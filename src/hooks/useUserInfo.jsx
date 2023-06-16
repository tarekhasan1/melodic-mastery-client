import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useUserInfo = (isAll) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(isAll == "all" ? [] : {});

    useEffect(() => {
        const getData = async () => {
            if (user) {
                const path = isAll == "all" ? "users" : "single-user";
                try {
                    const response = await axios.get(`${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/${path}?email=${user?.email}`);
                    // console.log(response.data);
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }

            if (!user && isAll == "all") {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_MELODIC_MASTERY_SERVER}/users`
                    );
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
        };
        getData();
    }, [isAll, user]);

    return [data, loading];
};

export default useUserInfo;
