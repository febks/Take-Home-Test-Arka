import { Fragment } from 'react';
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constant/routesConstant";
import Number1 from './pages/number1/Number1';

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path={ROUTES.NUMBER1} element={<Number1 />} exact />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
