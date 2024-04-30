// uses the Axios library to make an HTTP GET request to an API. 

// # basic structure of api calls....https request feat axios

import axios from "axios";
const params ={  // params is js object
    headers:{ // header is  property of this object
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY, // yaha direct key bhi dal skte the but js easlly exposed
        //bearer k badspace hai rem
    
    },
}

export const fetchDataFromApi = async (url) =>{ 
    try{
        const {data} = await axios.get(process.env.REACT_APP_DEV_URL  + url ,params);
        // destructuring response in data("reponse" as var name hence)
        // so # data fetched
        return data;
    }
    catch(error){
        console.log(error)
        return error;
    }
}
// created axiosinstance

export const makePaymentRequest = axios.create({
    baseURL : process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization : "bearer " + process.env.REACT_APP_STRIPE_APP_KEY
    }
})

