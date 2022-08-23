import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../components/UI/Layout/Layout";

const Main = () => {
  return (
    <Layout>
      <SideBar isMain />
      <main className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </Layout>
  );
};

export default Main;
