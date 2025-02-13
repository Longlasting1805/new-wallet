// import { createContext } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [surrentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);



}