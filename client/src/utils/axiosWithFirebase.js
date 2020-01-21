import axios from 'axios';
import firebase from 'firebase';

const axiosWithFirebase = () => {
    
    firebase.auth().onAuthStateChanged(user => { 
    console.log("TCL: axiosWithFirebase -> user", user)
    if(user) {
        firebase.auth().currentUser.getIdToken(true)
            .then(idToken => {
                return axios.create({
                    baseURL: 'http://localhost:5000/api',
                    headers: {
                        Authorization: idToken,
                    }
                });
            })
            .catch(err => {
                console.log('Not authorized');
            })

        }
    })

}

export default axiosWithFirebase;