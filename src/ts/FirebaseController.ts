declare let firebase: any;

export class FBC {
    static instanse: FBC;
    static userRef: any;
    static userData = {
        val: {
            uid: ""
            , name: ""
            , serverTime: ""
            , localTime: 0
            , logId: ""
            , team: <any>{}
        }
    };

    static usersRef: any;
    static usersData = {val: {}};

    static settingsRef: any;
    static settingData = {val: {mapUrl: "./img/dummy-map.svg", teams: <any>{}}};

    static logRef: any;
    static logData = {val: {}};

    static init(notUser: () => void, onUser: () => void) {
        FBC.instanse = new FBC(notUser, onUser);
    }

    constructor(notUser: () => void, onUser: () => void) {
        console.log("FBC");

        firebase.initializeApp({
            apiKey: "AIzaSyAWFEfyVktWifqfz5GEUUfE0Cg5Iv9va7w",
            authDomain: "fir-test-1862b.firebaseapp.com",
            databaseURL: "https://fir-test-1862b.firebaseio.com",
            projectId: "fir-test-1862b",
            storageBucket: "",
            messagingSenderId: "474064243865"
        });

        firebase.auth().signInAnonymously().catch(function (error: any) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // console.log(errorCode, errorMessage)
        });
        firebase.auth().onAuthStateChanged((user: any) => {
            console.log("onAuthStateChanged", user);
            if (user) {
                // var isAnonymous = user.isAnonymous;

                FBC.userRef = firebase.database().ref('/users/' + user.uid);
                FBC.usersRef = firebase.database().ref('/users');
                FBC.settingsRef = firebase.database().ref('/settings');
                FBC.logRef = firebase.database().ref('/log');

                FBC.userRef.once('value')
                    .then((res: any) => {
                        if (res.val()) FBC.userData.val = res.val();
                        FBC.userData.val.uid = user.uid;
                        if (FBC.userData.val.name) {
                            onUser();
                            FBC.updateUserData();
                        } else {
                            notUser();
                        }
                    });
                FBC.usersRef.on("value", (snap: any) => {
                    FBC.usersData.val = snap.val();
                });

                FBC.settingsRef.on("value", (snap: any) => {
                    FBC.settingData.val = snap.val();
                    console.log("loaded", "settings")
                });

                FBC.logRef.on("value", (snap: any) => {
                    FBC.logData.val = snap.val();
                });
            } else {
                // User is signed out.
                // ...
            }
            // ...
        });
    }

    static updateUserData() {
        let logId = FBC.logRef.child("access").push().key;

        FBC.userData.val.serverTime = firebase.database.ServerValue.TIMESTAMP;
        FBC.userData.val.localTime = +new Date;
        FBC.userData.val.logId = logId;
        // FBC.userRef.once('value')
        //     .then((res) => {
        //         let val = res.val();
        //         let nTime=+new Date;
        //         console.log(val.serverTime, val.localTime, nTime)
        //         console.log(val.serverTime - val.localTime, val.serverTime - nTime)
        //         console.log(val.localTime - nTime);
        //     });
        // FBC.userRef.set(FBC.userData.val);
        let v: any = {};
        v[FBC.userRef.path.n.join("/")] = FBC.userData.val;
        v[FBC.logRef.path.n.join("/") + "/" + logId] = {
            serverTime: firebase.database.ServerValue.TIMESTAMP
            , filter: ""
            , type: "login"
            , uid: FBC.userData.val.uid
        };
        firebase.database().ref().update(v);
    }

    static updateUsersData() {
        FBC.usersRef.set(FBC.usersData.val);
    }

    static updateSettingsData() {
        FBC.settingsRef.set(FBC.settingData.val);
    }

    static sendMessage(message: string) {
        if (!message.length) return;
        let logId = FBC.logRef.child("access").push().key;
        let v: any = {};
        v[FBC.logRef.path.n.join("/") + "/" + logId] = {
            serverTime: firebase.database.ServerValue.TIMESTAMP
            , filter: ""
            , type: "chat"
            , uid: FBC.userData.val.uid
            , value: message
        };
        firebase.database().ref().update(v);
    }
}
