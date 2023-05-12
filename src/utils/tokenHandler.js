let Token = window.localStorage.getItem('token');
if (Token) Token = JSON.parse(Token);

export const userFullName = Token.name;
export const userEmail = Token.email;
export const userUType = Token.utype;

export const isAdmin = userUType === 'admin';
export const userFirstName = Token.name.split(' ')[0];
