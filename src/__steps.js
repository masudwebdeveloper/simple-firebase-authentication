/*
------------------------------
   INITIAL SETUP 
------------------------------
1. visit: console.google.firebase.com
2. create new firebase project
3. visit: doc (go to docs) : build > authentication > web > get started
4. then if you haven't already : click the link install the Firebase JS SDK and initialize Firebase.
5. Register web app > firebase project home > click web > give name and gegister
6. install firebase for your project : npm install firebase
7. DANGEROUS: get firebase config and put it in firebase.init.js 
8. export app from firebase.init.js
---------------------------------
      SETUP THE PROVIDER
---------------------------------
9. create auth using getAuth from firebase by using app firebase.init.js
10. create a google auth provider. do not forget to use new GoogleProvider()
11. go to firebase > Build > Authentication > sign in method
12. Enable google sign in method
13. create a button for google sign in method with click handler
14. inside the event handler , call signInWithPopup with auth , provider
15. after signInWithPopup .then restul and error
--------------------------
      DISPLAY DATA
--------------------------

---------------------------
   ADD A NEW DIFFERENT METHOD
---------------------------
1. enable the sign in method
2. create github, twitter, fb etc. app create
3. get clientId and secret
*/
