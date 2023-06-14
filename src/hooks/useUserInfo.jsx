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
                    const response = await axios.get(`http://localhost:5000/${path}?email={user?.email}`);
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
                        "http://localhost:5000/users"
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
