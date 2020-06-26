import React from 'react';
import {NavLink} from 'react-router-dom';


import './AdminNavigation.css';



function AdminNavigation(){

    return (
        <div className="admin-navigation">
             <NavLink to="/Administration/Fines" activeClassName="active">Pokuty</NavLink>
             <NavLink to="/Administration/Banners" activeClassName="active">Bannery</NavLink>
             <NavLink to="/Administration/Customers" activeClassName="active">Zakaznici</NavLink>
             <NavLink to="/Administration/News" activeClassName="active">Zpravy</NavLink>
             <NavLink to="/Administration/Sales" activeClassName="active">Slevy</NavLink>
             <NavLink to="/Administration/BillingEntities" activeClassName="active">Fakturacni Subjekty</NavLink>
             <NavLink to="/Administration/InvoicesAndDocuments" activeClassName="active">Fakturacni a doklady</NavLink>
             <NavLink to="/Administration/EShop" activeClassName="active">Eshop</NavLink>
             <NavLink to="/Administration/Settings" activeClassName="active">Nastaveni</NavLink>
             <NavLink to="/Administration/Logs" activeClassName="active">Logy</NavLink>
        </div>
    );
    
}

export default AdminNavigation;