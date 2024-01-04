# Bugs
## Config
- DB Connection Not Correctly Configured
- Updated by adding .env file and passing in proper config obj
  for DB connection

## App.js
- Small Duplication of code:
  `module.exports = app;`
- removed duplicate line

## Auth `POST` to `auth/login`
- On submission of incorrect username/password to `/login` auth route server crashes.
- Was a small issue in the auth route code where `await` was not being used during our call to
  `User.authenticate(username, password)`

## GET Specific User Information
- `GET` request to `/users/:username` returns empty object and 200 OK status code if user is not found.
  It should return a 404 error.
- Issue was in the `user.js` model. Missing keyword `throw` in `throw new ExpressError`. Updated that and
  route is now working properly

## requireAdmin() issue with allowing user to edit their own data
- Currently causing issues allowing a user to edit their own information. This is happening because 
  `requireAdmin` is being called in the route stopping all users who are not admins.
- Removed `requireAdmin` from route middleware but perform check in route

## Auth middleware `authUser(req, res, next)`
- Never verifying token.
- Added line for `jwt.verify(token, SECRET_KEY)` to ensure tokens are being verified.

## Patch routes not checking against update schema
- There is no JSONSchema or conditionals to ensure users/admins
- Added `JSONSchema`, `updateUserSchema.json`, for updating a user. Updated unit test to look for a 
  400 status code, bad request.