import React from 'react';
import LazyLoad from './LazyLoad';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';


function App() {

  return (
    <>
      <div>hello, react hook!</div>

      {/* <UseMemo /> */}

      {/* <UseCallback /> */}

      {[...Array(100)].map((v,i) => <LazyLoad key={i}/>)}

    </>
  );
}

export default App;
