import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import LazyLoad from './LazyLoad';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import ProgressiveImage from 'react-progressive-graceful-image';

const image ="https://image.tmdb.org/t/p/original/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg"
const placeholderSrc = 'https://image.tmdb.org/t/p/w200/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg'

function App() {

  return (
    <>

      {/* <UseMemo /> */}

      {/* <UseCallback /> */}

      {/* {[...Array(100)].map((v,i) => <LazyLoad key={i}/>)} */}

      {/* <InfiniteScroll />  */}

      <ProgressiveImage src={image} placeholder={placeholderSrc}>
      {(src, loading) => (
        <img 
          className={`image${loading ? " loading" : " loaded"}`}
          src={src}
          alt="progressiveImage"
          width="700"
          height="465"
        />
      )}

      </ProgressiveImage>

    </>
  );
}

export default App;
