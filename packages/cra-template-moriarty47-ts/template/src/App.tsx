import React from 'react';
import logo from './logo.svg';
import styles from './App.m.scss';

const App = () => {
  const mode = process.env.NODE_ENV;
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>This is {mode} mode.</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Moriarty47's CRA Template</p>
        <a
          className={styles.appLink}
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
