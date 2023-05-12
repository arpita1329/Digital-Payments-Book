let Token = window.localStorage.getItem('token');
if (Token) Token = Token.replaceAll('"', '');
console.log(Token);

export const userEmail = Token;
export const userName = Token;
export const userUType = Token;
