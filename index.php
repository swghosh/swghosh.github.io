<?php
date_default_timezone_set('Asia/Kolkata');
// location of the text file that will log all the ip adresses
$file = $_SERVER['DOCUMENT_ROOT'].'/log.txt';

// ip address of the visitor
$ipadress = $_SERVER['REMOTE_ADDR'];

// date of the visit that will be formated this way: 29/May/2011 12:20:03
$date = date('d/F/Y h:i:s');

// name of the page that was visited
$webpage = $_SERVER['REQUEST_URI'];
$script = $_SERVER['SCRIPT_NAME'];
// visitor's browser information
$browser = $_SERVER['HTTP_USER_AGENT'];

// Opening the text file and writing the visitor's data
$fp = fopen($file, 'a');

fwrite($fp, $ipadress.' - ['.$date.'] '.$webpage." : ".$script.' '.$browser."\r\n");

fclose($fp);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<style>

      html, body {
          height: 100%;
          margin: 0;
          overflow: hidden;
          padding: 0;
      }

      #startup {
          width: 100%;
          height: 100%;
          position: float;
          background-color: #eeeeee;
		  background-image:url(image.jpg);

          -moz-user-select: none;
          -webkit-user-select: none;

          display: flex;
          align-items: center;
          justify-content: center;
          display: -webkit-box;
          display: -webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: center;
      }

      .spinner-container {
          -webkit-animation: rotate 2s linear infinite;
                  animation: rotate 2s linear infinite;
          z-index: 2;
      }

      .spinner-container .path {
          stroke-dasharray: 1,150; /* 1%, 101% circumference */
          stroke-dashoffset: 0;
          stroke: rgb(10%,10%,90%); /* rgba(27, 154, 89, 0.7); */
          stroke-linecap: round;
          -webkit-animation: dash 1.5s ease-in-out infinite;
                  animation: dash 1.5s ease-in-out infinite;
      }

      @keyframes rotate {
          100% { transform: rotate(360deg); }
      }
      @-webkit-keyframes rotate{
          100% { -webkit-transform: rotate(360deg); }
      }

      @keyframes dash {
          0% {
              stroke-dasharray: 1,150;  /* 1%, 101% circumference */
              stroke-dashoffset: 0;
          }
          50% {
              stroke-dasharray: 90,150; /* 70%, 101% circumference */
              stroke-dashoffset: -35;   /* 25% circumference */
          }
          100% {
              stroke-dasharray: 90,150; /* 70%, 101% circumference */
              stroke-dashoffset: -124;  /* -99% circumference */
          }
      }
      @-webkit-keyframes dash {
          0% {
              stroke-dasharray: 1,150;  /* 1%, 101% circumference */
              stroke-dashoffset: 0;
          }
          50% {
              stroke-dasharray: 90,150; /* 70%, 101% circumference */
              stroke-dashoffset: -35;   /* 25% circumference */
          }
          100% {
              stroke-dasharray: 90,150; /* 70%, 101% circumference */
              stroke-dashoffset: -124;  /* -99% circumference */
          }
      }
	  .txt{
	  font-family: 'Architects Daughter', 'Helvetica Neue', Helvetica, Arial, serif;
	  font-size:24px;
	  }
  </style>
	<title>www.CodeCrafts.cf | Stay calm and keep coding!</title>
	<link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
	<meta http-equiv="refresh" content="4;url=http://www.swghosh.tk">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"></head>
  <body>
<div id="startup">
    <svg class="spinner-container" width="65px" height="65px" viewBox="0 0 52 52">
      <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px"></circle>
    </svg>
	<p class="txt" align="center"><a href="#">www.CodeCrafts.cf</a></p>
</div>
</body>
</html>