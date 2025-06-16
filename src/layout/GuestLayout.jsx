import Alert from "../components/Alert";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";


const GuestLayout = () => {
    return (
        <>
          <AppHeader />
          <Alert />
          <Outlet />
          {/* footer   */}
          <footer>
            <p>QUESTO E' UN FOOTER</p>
          </footer>
        </>
    )
}

export default GuestLayout;