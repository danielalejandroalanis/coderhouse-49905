import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const MainLayout = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      {children}
    </div>
  );
};

export default MainLayout;
