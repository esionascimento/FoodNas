export function Login () {
  return {
    type: 'LOGIN',
    payload: true
  }
};

export function Logout () {
  return {
    type: 'LOGOUT',
    payload: false
  }
};
