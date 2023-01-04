import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import LazyLoad from './LazyLoad';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';


function App() {

  return (
    <>

      {/* <UseMemo /> */}

      {/* <UseCallback /> */}

      {/* {[...Array(100)].map((v,i) => <LazyLoad key={i}/>)} */}

      <InfiniteScroll /> 

    </>
  );
}

export default App;
