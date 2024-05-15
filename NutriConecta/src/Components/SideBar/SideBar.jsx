import "./SideBar.css"

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ChatIcon from '@mui/icons-material/Chat';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SideBar = () => {
  return (
    <div className="sidebar">
        <header className="profile">
            <img src="" alt="" />
            <p>Olá!</p>
            <h3>Minino Ivo</h3>
        </header>
        <section className="Menu">
            <h3>Menu</h3>
            
            <a>
                <HomeIcon color="disabled" />
                Home
            </a>
            <a>
                <DashboardIcon color="success" />
                Dashboard
            </a>
            <a>
                <ArticleIcon color="success" />
                Divulgações
            </a>
            <a>
                <InfoIcon color="success" />
                Sobre
            </a>
            <a>
                <AddToPhotosIcon color="success" />
                Novo
            </a>
            <a>
                <ChatIcon color="success" />
                Conversas
            </a>
            <a>
                <AssignmentIcon color="success" />
                Tutorial
            </a>
        </section>
        <div className="logout">
            <button>
                <ExitToAppIcon color="success" />
                Sair
            </button>
        </div>
    </div>
  )
}

export default SideBar