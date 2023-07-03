function (user, context, callback) {
  context.accessToken.myCustomClaim = configuration.MY_CUSTOM_DATA; 
  // added a comment here
  return callback(null, user, context);
}