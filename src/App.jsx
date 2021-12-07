import { Fragment } from "react";

import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import NumberStep from "./components/NumberStep";
import Navbar from "./frames/Navbar";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
    
    </Fragment>
  );
};

export default App;
