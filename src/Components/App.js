import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import FlowersPage from "./flowers/FlowersPage";
import BasketPage from "./basket/BasketPage";
import PaymentPage from "./payment/PaymentPage";
import { ToastProvider } from "react-toast-notifications";
import PaymentSuccess from "./payment/PaymentSuccesspage";
import PartnerPage from "./partner/PartnerPage";

function App() {
  return (
    <div className="container-fluid pt-2 pl-5 pr-5">
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
          <Route path="/payment" component={PaymentPage} />
          <Route path="/paymentSuccess" component={PaymentSuccess} />
          <Route path="/partner" component={PartnerPage} />
          <Route component={PageNotFound} />
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default App;
