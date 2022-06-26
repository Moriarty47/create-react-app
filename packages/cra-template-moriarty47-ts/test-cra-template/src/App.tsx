import React from 'react';

const App = () => {
  const mode = process.env.NODE_ENV;

  return (
    <div>
      <p>This is {mode} mode.</p>
      <p>Moriarty CRA Template</p>
    </div>
  );
};

export default App;
