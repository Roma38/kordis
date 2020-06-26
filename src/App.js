import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

//Pages
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import Homepage from "./Pages/HomePage/HomePage";
import MyProfilePage from "./Pages/MyProfilePage/MyProfilePage";
import MyTicketsPage from "./Pages/MyTicketsPage/MyTicketsPage";
import MyMessagesPage from "./Pages/MyMessagesPage/MyMessagesPage";
import NewTicketPage from "./Pages/NewTicketPage/NewTicketPage";
import MyHistoryPage from "./Pages/MyHistoryPage/MyHistoryPage";
import CardHistoryPage from "./Pages/CardHistoryPage/CardHistoryPage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import MyValidTickets from "./Pages/MyValidTicketsPage/MyValidTicketsPage";
import ShoppingCart from "./Pages/ShopPage/ShoppingCart/ShoppingCart";
import ShopInvoiceDetails from "./Pages/ShopPage/ShopInvoiceDetails/ShopInvoiceDetails";
import ShopSummary from "./Pages/ShopPage/ShopSummary/ShopSummary";
import ShopTransportPayment from "./Pages/ShopPage/ShopTransportPayment/ShopTransportPayment";
import ShopPayment from "./Pages/ShopPage/ShopPayment/ShopPayment";
import ShopPaymentGoPayReturn from "./Pages/ShopPage/ShopPayment/GoPayReturn";
import ShopPaymentResult from "./Pages/ShopPage/ShopPaymentStatus/ShopPaymentResult";

// admin pages
import AdministrationLogin from "./Pages/Administration/AdministrationLogin/AdministrationLogin";
import Banners from "./Pages/Administration/Banners/Banners";
import Customers from "./Pages/Administration/Customers/Customers";
import Fines from "./Pages/Administration/Fines/Fines";
import BillingEntities from "./Pages/Administration/BillingEntities/BillingEntities";
import EShop from "./Pages/Administration/EShop/EShop";
import InvoicesAndDocuments from "./Pages/Administration/InvoicesAndDocuments/InvoicesAndDocuments";
import News from "./Pages/Administration/News/News";
import Sales from "./Pages/Administration/Sales/Sales";
import Settings from "./Pages/Administration/Settings/Settings";
import Logs from "./Pages/Administration/Logs/Logs";

//Components
import Layout from "./Components/Layout/Layout";
import CookieWarning from "./Components/CookieWarning/CookieWarning";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history} >
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/my-profile" component={MyProfilePage} />
            <Route exact path="/my-history" component={MyHistoryPage} />
            <Route exact path="/card-history" component={CardHistoryPage} />

            <Route exact path="/e-shop" component={ShopPage} />
            <Route path="/e-shop/detail/:id" component={ShopPage} />
            <Route path="/e-shop/cart" component={ShoppingCart} />
            <Route path="/e-shop/invoice-details" component={ShopInvoiceDetails} />
            <Route path="/e-shop/summary" component={ShopSummary} />
            <Route path="/e-shop/transport-payment" component={ShopTransportPayment} />
            <Route exact path="/e-shop/payment" component={ShopPayment} />
            <Route path="/e-shop/payment/gopay-return" component={ShopPaymentGoPayReturn} />
            <Route path="/e-shop/payment/success" component={ShopPaymentResult} />
            <Route path="/e-shop/payment/error" component={ShopPaymentResult} />

            <Route exact path="/my-valid-tickets" component={MyValidTickets} />

            <Route exact path="/dashboard" component={MyTicketsPage} />
            <Route exact path="/dashboard/messages" component={MyMessagesPage} />
            <Route path="/dashboard/messages/:id" component={MyMessagesPage} />            
            {/* admin */}
            <Route exact path="/Administration/AdministrationLogin" component={AdministrationLogin} />
            <Route exact path="/Administration/Fines" component={Fines} />
            <Route exact path="/Administration/Banners" component={Banners} />
            <Route exact path="/Administration/Customers" component={Customers} />
            <Route exact path="/Administration/BillingEntities" component={BillingEntities} />
            <Route exact path="/Administration/EShop" component={EShop} />
            <Route exact path="/Administration/InvoicesAndDocuments" component={InvoicesAndDocuments} />
            <Route exact path="/Administration/News" component={News} />
            <Route exact path="/Administration/Sales" component={Sales} />
            <Route exact path="/Administration/Settings" component={Settings} />
            <Route exact path="/Administration/Logs" component={Logs} />
            <Route exact path="/dashboard/new-ticket" component={NewTicketPage} />
          </Switch>
        </Layout>
        {!sessionStorage.getItem("cookiesWarned") && <CookieWarning />}
      </div>
    </Router>
  );
}

export default App;
