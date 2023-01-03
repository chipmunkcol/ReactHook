import React from 'react';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';


function App() {
  
// 1. 오래걸리는 로직 함수를 만든다 ex. 반복문 10000번
// 2. 쉬운 로직 함수를 만든다
// 3. 랜더링이 어떤식으로 되는지 확인한다
// 4. 오래걸리는 로직 함수에 useMemo & useCallback을 걸어준다
// 5. 하위컴포넌트 렌더링에도 영향을 줘본다.


  return (
    <>
      <div>hello, react hook!</div>

      <UseMemo />

      <UseCallback />
    </>
  );
}

export default App;
