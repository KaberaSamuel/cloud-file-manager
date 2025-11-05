import { createContext, useContext, useEffect, useState } from "react";
import { apiUrl, extractData } from "../../service";
import Loader from "./Loader";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [dataTree, setDataTree] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showWaitingMessage, setShowWaitingMessage] = useState(false);

  useEffect(() => {
    (async function () {
      // show waiting message when server is waking up
      setTimeout(() => {
        if (isLoading) {
          setShowWaitingMessage(true);
        }
      }, 6000);

      const userResponse = await fetch(`${apiUrl}/folders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const usersResponse = await fetch(`${apiUrl}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userDataTree = await extractData(userResponse);
      const allUsers = await usersResponse.json();

      // updating UI
      setDataTree(userDataTree);
      setAllUsers(allUsers);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loader showWaitingMessage={showWaitingMessage} />;
  }

  return (
    <AuthContext.Provider value={{ dataTree, allUsers, setDataTree }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
