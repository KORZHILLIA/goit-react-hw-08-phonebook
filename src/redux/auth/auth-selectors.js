export const getLoggedStatus = ({ auth }) => auth.isLoggedIn;
export const getUserMail = ({ auth }) => auth.user.email;
