import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // for dynamic page title
        document.title = `${title} - Melodic Mastery`;
    }, [title]);
};

export default useTitle;
