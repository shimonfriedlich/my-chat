// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDozrjcK1SqIzVxh0JAksABVB0Hwwk24uA",
    authDomain: "chat-messages-1c982.firebaseapp.com",
    databaseURL: "https://chat-messages-1c982.firebaseio.com",
    projectId: "chat-messages-1c982",
    storageBucket: "chat-messages-1c982.appspot.com",
    messagingSenderId: "601497769837"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
