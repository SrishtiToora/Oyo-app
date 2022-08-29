class AuthenticationService {
    registerSuccessfulLogin(username,password){
        console.log("session done")
        sessionStorage.setItem("authenticatedUser",username);
    }
}

export default new AuthenticationService()