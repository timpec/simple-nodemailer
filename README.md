# simple-nodemailer
Simple nodemailer service

## How to use
1. Add needed email addresses to a .env file
   * SENDER_USER should be the address that send the email.
   * SENDER_PASS should be the password of the sender address.
   * RECEIVER_USER should be used if sending to same email address often.

2. Install node modules with npm
```
npm i
```

3. Run the application
```
node server.js
```

4. Send a post request to localhost:3000/email