import { Route, Routes } from "react-router";

const Home = () => <h2>여기는 홈이에요</h2>;
const About = () => <h2>여기는 소개에요</h2>;
const Help = () => <h2>여기는 도움말이에요</h2>;

const Practice1 = () => { 
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/help'
        element={<Help />}
      />
    </Routes>
  );
};

export default Practice1;