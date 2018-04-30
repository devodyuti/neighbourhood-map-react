const axios = require('axios');

axios.get('https://api.foursquare.com/v2/venues/explore',{
        params:{
            client_id: 'clientId',
            client_secret: 'clientSecret',
            ll:'22.5726,88.3639',
            query:'coffee',
            v:'20180323',
            limit:3
        }
    }).then(response=>console.log(response.data.response.groups[0].items))
    