import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ChatIcon from '@mui/icons-material/Chat';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './SideBar.css';

const SideBar = () => {

  return (
    <div className="sidebar">
      <header className="profile">
        <div>
          <img src="" alt="" />
          <p>Olá!</p>
          <h3>Minino Ivo</h3>
        </div>
      </header>
      <section className="Menu">
        <h3>Menu</h3>
        <Link to="/Dashboard">
          <DashboardIcon style={{ color: 'black' }} />
          Dashboard
        </Link>
        <Link to="/">
            <span style={{ color: 'black' }}>
                <HomeIcon />
            </span>
          Home
        </Link>
        <Link to="/Disclosures">
          <ArticleIcon style={{ color: 'success' }} />
          Divulgações
        </Link>
        <Link to="/NewPost">
          <AddToPhotosIcon style={{ color: 'success' }} />
          Novo
        </Link>
        <Link to="/messages">
          <ChatIcon style={{ color: 'success' }} />
          Conversas
        </Link>
        <Link to="/About">
          <InfoIcon style={{ color: 'success' }} />
          Sobre
        </Link>
        <Link to="/tutorial">
          <AssignmentIcon style={{ color: 'success' }} />
          Tutorial
        </Link>
      </section>
      <div className="logout">
        <button>
          <ExitToAppIcon style={{ color: 'success' }} />
          Sair
        </button>
      </div>
    </div>
  );
};

export default SideBar;
