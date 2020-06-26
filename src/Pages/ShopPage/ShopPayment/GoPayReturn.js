import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import { API_HOST } from '../../../constants';

// TODO - To be globally declared
const apiInstance = axios.create({
    baseURL: `${API_HOST}/api`
});

function GoPayReturn( page ) {

    const history = useHistory();
    const payment_id = new URLSearchParams( page.location.search ).get( "id" );

    const getPaymentStatus = () => {
        apiInstance.get( `/finapi/payment-status/${ payment_id }` )
            .then( resp => {
                if ( resp.status === 200 && resp.data.success === true ) {
                    history.push( '/e-shop/payment/success' );
                } else {
                    history.push( '/e-shop/payment/error' );
                }
            })
            .catch( err => {
                history.push( '/e-shop/payment/error' );
                console.error( err );
            })
    };

    // TODO - To be obtained from active session
    useEffect( () => {
        apiInstance.post( '/auth/login', {
            email: "p.mikulenka@altairgroup.eu",
            password: "1234"
        })
            .then( resp => {
                if ( resp.status === 200 && resp.data.success === true ) {
                    apiInstance.defaults.headers.common['Authorization'] = resp.data.token;
                    getPaymentStatus();
                }
            })
            .catch( err => {
                console.error( err );
            })
    });

    return (
        <></>
    );
}

export default GoPayReturn;