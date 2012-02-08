<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"  xml:lang="en" lang="en" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>

<?php include_http_metas() ?>
<?php include_metas() ?>

<?php include_title() ?>

<link rel="shortcut icon" href="/favicon.ico" />

</head>
<body>
<script src="http://connect.facebook.net/en_US/all.js#xfbml=1" type="text/javascript"></script>

<?php echo $sf_data->getRaw('sf_content') ?>



<?php echo javascript_tag("
  var sf_fb = new sfFacebookConnect(".sfConfig::get('app_facebook_api_id').");
") ?>


</body>
</html>
