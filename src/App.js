import { Fragment } from 'react';
import { Layout } from "antd";
import { ROUTES } from "./constant/routesConstant";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Number1 from './pages/number1/Number1';
import Number3 from './pages/number3/Number3';

function App() {
  return (
    <Fragment>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.NUMBER1} element={<Number1 />} exact />
            <Route path={ROUTES.NUMBER3} element={<Number3 />} exact />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Fragment>
  );
}

export default App;
