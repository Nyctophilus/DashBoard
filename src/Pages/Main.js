import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../components/UI/Layout/Layout";

const Main = () => {
  return (
    <Layout>
      <SideBar isMain />
      <main className="container">
        <Header />

        <Outlet />
      </main>
    </Layout>
  );
};

export default Main;
