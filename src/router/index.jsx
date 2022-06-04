import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDrawer, AppBarClient } from "../layouts";
import { AboutView, AdminView, ContactView, HomeView } from "../pages";
import * as ROUTES from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppBarClient />}>
          <Route path={ROUTES.HOME} element={<HomeView />} />
          <Route path={ROUTES.ABOUT} element={<AboutView />} />
          <Route path={ROUTES.CONTACT} element={<ContactView />} />
        </Route>
        <Route element={<AdminDrawer />}>
          <Route path={ROUTES.ADMIN} element={<AdminView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
