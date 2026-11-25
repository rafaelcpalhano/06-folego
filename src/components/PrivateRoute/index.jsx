import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Navigate } from "react-router"

export default function PrivateRoute({children}) {
    const {user} = useContext(AuthContext)

    if(user == null) {
        return <Navigate to={"/login"} replace />
    }

  return children;
}
