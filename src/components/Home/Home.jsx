import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import GanadoresSorteo from "../JsonPlaceHolder/GanadoresSorteo";

const Home = () => {
  return (
    <>
      <h2 className="titulo-seccion" style={{ textAlign: "center" }}>
        Bienvenid@ a VivaVerde. Elegí tus plantas favoritas 🌿
      </h2>
      <ItemListContainer />
      <GanadoresSorteo />
    </>
  );
};

export default Home;
