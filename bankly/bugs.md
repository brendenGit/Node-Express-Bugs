# Bugs
## Config
- DB Connection Not Correctly Configured
  Updated by adding .env file and passing in proper config obj
  for DB connection

## App.js
- Small Duplication of code:
  `module.exports = app;`
  removed duplicate line

## Auth
- On submission of incorrect username/password to `/login` auth route server crashes.
  Was a small issue in the auth route code where `await` was not being used during our call to
  `User.authenticate(username, password)`


