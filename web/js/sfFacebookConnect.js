sfFacebookConnect = function(app_id, signin_url)
{
  this.app_id = app_id;
  this.signin_url = signin_url;
  this.callback = '';
  this.forward = '';

  this.init();
};
sfFacebookConnect.prototype.init = function()
{
  FB.init({appId: this.app_id, status: true, cookie: true, xfbml: true});
}
sfFacebookConnect.prototype.getSigninUrl = function()
{
  t_signin_url = this.signin_url;
  if(this.forward != undefined && this.forward != '')
  {
    t_signin_url += '?forward=' + this.forward;
  }

  return t_signin_url;
}
sfFacebookConnect.prototype.gotoLoginPage = function()
{
  document.location.href= this.getSigninUrl();
};
sfFacebookConnect.prototype.requireSession = function(forward, callback, permissions)
{
  this.forward = forward;
  if (callback == undefined || callback == '')
  {
	var current_obj = this;
	callback = function() { current_obj.gotoLoginPage() };
  }
  this.init();

  options = null;
  if (permissions != '')
  {
    options = {scope: permissions};
  }

  FB.login(function(response) {
     if (response.authResponse) {
       callback();
     } else {
       console.log('User cancelled login or did not fully authorize.');
     }
   }, options);

};

/*
 * Show the feed form. This would be typically called in response to the
 * onclick handler of a "Publish" button, or in the onload event after
 * the user submits a form with info that should be published.
 *
 */
sfFacebookConnect.prototype.publishFeedStory = function(form_bundle_id, template_data)
{
  // Load the feed form
  FB.ensureInit(
    function()
    {
      FB.Connect.showFeedDialog(form_bundle_id, template_data);
      //FB.Connect.showFeedDialog(form_bundle_id, template_data, null, null, FB.FeedStorySize.shortStory, FB.RequireConnect.promptConnect);

      // hide the "Loading feed story ..." div
      //ge('feed_loading').style.visibility = "hidden";
    }
  );
};

sfFacebookConnect.prototype.streamPublish = function (message, attachment, action_links)
{
   FB.Connect.streamPublish(message, attachment, action_links);
}
