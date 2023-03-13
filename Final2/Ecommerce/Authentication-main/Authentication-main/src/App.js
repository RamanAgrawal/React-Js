import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthContext } from "./Store/LoginContext";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!ctx.isLoggesIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {ctx.isLoggesIn && <UserProfile />}
          {!ctx.isLoggesIn && <Redirect to={"/auth"}></Redirect>}
        </Route>
        <Route path={"*"}>
          <Redirect to={"/"}></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
