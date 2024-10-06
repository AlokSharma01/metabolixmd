import cookies from 'js-cookie';

export const setToken = (token, expiry) => {
    cookies.set('token', JSON.stringify({ value: token, expiry }), {
      expires: 7
    });
};

export const getToken = () => {
  const cookie = cookies.get('token');
  if (!cookie) {
    return null;
  }
  return (cookie);
};

export const removeToken = () => cookies.remove('token');

export const setUser = (user, expiry) => {
  cookies.set('user', JSON.stringify(user), {
    expires: 7
  });
};

export const getUser = () => {
  const cookie = cookies.get('user');
  if (!cookie) {
    return null;
  }
  try{
    return JSON.parse(cookie);
  }
  catch(e){
    console.log(e)
  }
};

export const removeUser = () => cookies.remove('user');
// fcm token cookie
export const getFcmToken = () => {
  const cookie = cookies.get('fcmtoken');
  if (!cookie) {
    return null;
  }
  return (cookie);
};

export const setFcmToken = token => {
  cookies.set('fcmtoken', token,{
    expires: 7
  });
};

export const removeFcmToken = () => cookies.remove('fcmtoken');

//  help support chatroom
export const getSupportRoomId = () => {
  const cookie = cookies.get('supportRoomId');
  if (!cookie) {
    return null;
  }
  return (cookie);
};

export const setSupportRoomId = token => {
  cookies.set('supportRoomId', token);
};

export const removeSupportRoomId = () => cookies.remove('supportRoomId');