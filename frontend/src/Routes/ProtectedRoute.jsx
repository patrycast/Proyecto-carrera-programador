
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children, redirectTo, requiredRole }) => {

  const { user } = useSelector((state) => state.user);

  const location = useLocation();
  
  if (!user) {
    return (
      <Navigate
        to={redirectTo}
        state={{ from: location.pathname }}
        replace
      />
    );
  }


  //roles
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }


  return children;
};

export default ProtectedRoute;









      // import { Navigate } from "react-router-dom";
      // import { useSelector } from "react-redux";
      
      
      // const ProtectedRoute= ({ children, redirectTo}) => {
      //     const { user } = useSelector(( state ) => state.user)
      
      //     if( !user ){
      //         return <Navigate to={ redirectTo } state={{redirectedFromCompleteOrder: true} } />
      //     }
      //     return children;
      // }
      
      // export default ProtectedRoute;