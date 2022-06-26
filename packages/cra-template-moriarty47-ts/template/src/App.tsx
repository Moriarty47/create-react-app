import React from 'react';
import logo from './logo.svg';
import styles from './App.m.scss';

const App = () => {
  const mode = process.env.NODE_ENV;
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>This is {mode} mode.</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Moriarty CRA Template</p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
