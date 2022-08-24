import Loader from "../components/Loader/Loader";

const Loading = () => (
  <div
    style={{
      backgroundColor: "var(--bg-clr)",
      height: "100vh",
      display: "grid",
      placeItems: "center",
    }}
  >
    <Loader />
  </div>
);

export default Loading;
