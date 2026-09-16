import { Link, Route, Routes } from "react-router";

const documentNumber = Math.floor(Math.random() * 10000);

const Screen = ({ name }) => { 
  return (
    <div>
      <h2>{name}</h2>
      <p>문서 번호: {documentNumber}</p>
      <a href='/about'>about으로 이동 (a태그)</a>
      <br />
      <Link to='/about'>about으로 이동 (Link컴포넌트)</Link>
      <br />
      <a href='/'>home으로 이동 (a태그)</a>
      <br />
      <Link to='/'>home으로 이동 (Link컴포넌트)</Link>
    </div>
  );
};


const Practice2 = () => { 
  return (
    <Routes>
      <Route
        path='/'
        element={<Screen name='Home' />}
      />
      <Route
        path='/about'
        element={<Screen name='About' />}
      />
    </Routes>
  );
};

export default Practice2;