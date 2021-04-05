import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import FlowersPage from "./flowers/FlowersPage";
import BasketPage from "./basket/BasketPage";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement={"bottom-right"}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/flowers" component={FlowersPage} />
          <Route path="/basket" component={BasketPage} />
          <Route component={PageNotFound} />
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default App;
