import { projectAuth } from "./config";

const registerUser = (email, password) => {
    
    return projectAuth.createUserWithEmailAndPassword(email, password)
}

const loginUser = (email, password) => {

    return projectAuth.signInWithEmailAndPassword(email, password);
}

const logoutUser = () => {

    return projectAuth.signOut();
}

const sendPasswordResetEmail = (email) => {

    return projectAuth.sendPasswordResetEmail(email);
}

const subscribeToAuthChanges = (handleAuthChange) => {
    projectAuth.onAuthStateChanged((user)=>{
        handleAuthChange(user)
    })    
}


const authService = {
    registerUser,
    loginUser,
    logoutUser,
    sendPasswordResetEmail,
    subscribeToAuthChanges,
}

export default authService;