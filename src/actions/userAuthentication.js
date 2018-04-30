import {Google,Facebook} from 'expo';

export const userAuthenticationUsingGoogle = (callback)=> async dispatch=> {
        try {
            const result = await Google.logInAsync({
              androidClientId: 'androidClientIdForGoogle',
              scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
              console.log(result);
              dispatch({type:'authenticate_user',payload:result.accessToken});
              callback();
            } else {
              console.log('Failed');
            }
          } catch(e) {
            console.log(e);
          }
}

export const userAuthenticationUsingFacebook = (callback)=> async dispatch=> {
  try{
    const result = await Facebook.logInWithReadPermissionsAsync('FacebookId',{
      permissions:['public_profile','email']
    });
    if(result.type === 'success') {
      dispatch({type:'authenticate_user',payload:result.token});
      callback()
    }
    else {
      console.log('Failed');
    }

  } catch(e){
    console.log(e);
  }
}
