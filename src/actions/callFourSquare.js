//import FourSquare from '../Foursquare';
import axios from 'axios';


export const callFourSquare = (latitude,longitude,whatToSearch,callback)=> async dispatch=> {
    axios.get('https://api.foursquare.com/v2/venues/explore',{
        params:{
            client_id: 'ClientId',
            client_secret: 'ClientSecret',
            ll:'22.5726,88.3639',
            query:whatToSearch,
            v:'20180323',
            limit:10
        }
    }).then(response=> {
            console.log(response.data.response.groups[0]);
            dispatch({type:'four-square-response',payload:response.data.response.groups[0].items});
            callback();
    },reject=>console.log('request failed'));
}