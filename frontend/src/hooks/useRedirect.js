import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useRedirect = (redirectTo) => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(redirectTo);
            console.log("user")
        }
    }, [user, navigate, redirectTo])
}

export default useRedirect;