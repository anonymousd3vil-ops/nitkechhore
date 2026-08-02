import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({allowedRoles}){
    const {isLoggedin, role} = useSelector((state) => state.auth);

    return isLoggedin && allowedRoles.find((myRole) => myRole === role) ? (<Outlet />) : isLoggedin ? (<Navigate to={'/denied'} />) : (<Navigate to={'/user/login'}/>)

}

export default RequireAuth;