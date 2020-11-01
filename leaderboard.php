<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/lbstyle.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEAT THE GAME</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style> 
    .navbar
  {
    position:absolute;
    top:0px;
    width:100%;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(2,44,126,1) 0%, rgba(192,199,200,1) 0%, rgba(0,3,171,1) 0%, rgba(0,3,2,1) 100%);
  }
  .nav-link
  {
      color: white;
  } </style>
</head>
<body>

<div class="container">
  <div class="center">
    <div class="row ">
      <div class=" list">
        <div class="item pl-5 pr-5 " >
          <h6 style = "font-weight:600">Leaderboard</h6>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="players" id = "toppers"></div>
    </div>
  </div>
</div>
      <script src = "lbindex.js"></script>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"></script>
</body>
</html>