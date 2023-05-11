function (user, context, callback) {
  context.accessToken.myCustomClaim = configuration.MY_CUSTOM_DATA;  
  return callback(null, user, context);
}