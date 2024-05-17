import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Logout.module.css";

const Logout = () => {
  // Lógica para realizar o logout, como limpar o token de autenticação, etc.
  const handleLogout = () => {
    // Aqui você pode adicionar a lógica necessária para realizar o logout,
    // como limpar os tokens de autenticação, redirecionar para a página de login, etc.
    // Por enquanto, apenas exibiremos uma mensagem de logout.
    alert("Você foi desconectado!");
  };

  // Renderização da tela de logout
  return (
    <div className={styles.divLogout}>
      <section className={styles.container}>
        <div className={styles.logo}>
          <img src="/image/logo.svg" alt="logo" />
        </div>
        <section className={styles.group}>
          <div className={styles.title}>
            <h1>Selecione a conta para sair</h1>
          </div>
          <section className={styles.information}>
            <div className={styles.profilePhoto}>
              <img src="/image/profile-1.jpg" alt="Foto do perfil" />
            </div>
            <div className={styles.text}>
              <p>
                Conectado como <strong>Jhon Silva</strong>
              </p>
            </div>
            <Link to="/login" className={styles.buttonLink}>
              <div className={styles.button}>
                <button onClick={handleLogout}>Sair</button>
              </div>
            </Link>
          </section>
          <div className={styles.logout}>
            <div className={styles.butao}>
              <Link to="/login" className={styles.buttonLink}>
                <button onClick={handleLogout}>Sair de todas as contas</button>
              </Link>
            </div>
          </div>
        </section>
        <div className={styles.termos}>
          <a href="/index.html" className={styles.link}>
            Termos
          </a>
          <a href="#" className={styles.link}>
            Privacidade
          </a>
          <a href="#" className={styles.link}>
            Documentos
          </a>
          <a href="#" className={styles.link}>
            Gerenciar cookies
          </a>
          <a href="#" className={styles.link}>
            Entre em contato com o suporte DashMetrics
          </a>
          <a href="#" className={styles.link}>
            Não compartilhe minhas informações pessoais
          </a>
        </div>
      </section>
    </div>
  );
};

export default Logout;
