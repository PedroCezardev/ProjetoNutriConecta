import React from 'react';
import style from "./Home.module.css";
import Content from "../../Components/Content/Content";
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/Navbar/NavBar';

const Home = () => {
  return (
    <>
    <div className={style.container}>
      <NavBar />

      <div className={style.body}>
        <SideBar />

        <Content> 
        <section className="container">
          <div className="slider">

          </div>
          <div className="title">
            <h1>Home</h1>
            <h1>Notificações</h1>
          </div>
          <div className="contant-home">
            <h3>Reginaldo Rossi</h3>
            <p>lkadsldasdjklajfldhfddkljdskdljhfskdjlfhsdjlkhsdjçgn
              jsdahgfksdçkhdfghçhgçshsdçdshdsdlsçkdsçllksdfjnlçsdkj
            </p>
          </div>
        </section>
        </Content>
        
      </div>
    </div>
    </>
  )
}

export default Home