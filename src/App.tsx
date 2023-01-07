import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import LazyLoad from './LazyLoad';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import ProgressiveImage from 'react-progressive-graceful-image';
import Form from './Form';

const image ="https://image.tmdb.org/t/p/original/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg"
const placeholderSrc = 'https://image.tmdb.org/t/p/w200/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg'

function App() {

  return (
    <div style={{width:'100vw', height:'100vh', margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center'}}>

      {/* <UseMemo /> */}

      {/* <UseCallback /> */}

      {/* {[...Array(100)].map((v,i) => <LazyLoad key={i}/>)} */}

      {/* <InfiniteScroll />  */}

      {/* <ProgressiveImage src={image} placeholder={placeholderSrc}>
      {(src, loading) => (
        <img 
          src={src}
          alt="progressiveImage"
          width="700"
          height="465"
        />
      )}

      </ProgressiveImage> */}

      <Form />

    </div>
  );
}

export default App;
