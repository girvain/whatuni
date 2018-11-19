<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>jobs</title>
  <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
    crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <!-- Top Navigation Menu -->
  <div class="topnav">
    <a href="#" id="bar-button">
      <i class="fa fa-bars fa-lg"></i>
    </a>
    <!-- <img src="images/logo.png" alt=""> -->
    <ul id="nav-items">
      <li><a href="index.html">Home</a></li>
      <li><a href="unis.html">Uni's</a></li>
      <li><a href="stats.html">Stats</a></li>
      <li><a href="jobs.php" class="active">Jobs</a></li>
    </ul>
  </div>

  <nav>
    <ul>
      <img src="images/logo.png" alt="" id="nav-logo">
      <li><a href="index.html">Home</a></li>
      <li><a href="unis.html">Uni's</a></li>
      <li><a href="stats.html">Stats</a></li>
      <li><a href="jobs.php">Jobs</a></li>
    </ul>
  </nav>

  <div class="main-container">
    <h1>Jobs</h1>

    <div id="stats-area">
      <h2>Top 10 Most Popular Searches</h2>
      <div id="search-log-chart-section">
        <div id="search-log-chart"></div>
      </div>
    </div>

    <div class="jobs-input-area center-text">
      <div id="job-name-input">
        <h3>Enter Job Name</h3>
        <input id="job-search-input" type="text" name="job-search-input">
        <button id="job-search-button">search</button>
      </div>
      <div id="job-search-display-area"></div>

      <div id="soc-number-input">
        <h2>Find out More?</h2>
        <p>Enter a soc code and age from a job search above to find out the average weekly salary for your exact age</p>
        <h3>Soc Number Input</h3>
        <input id="soc-input" type="text" name="soc-input" size="14">
        <h3>Age Input</h3>
        <input id="age-input" type="text" name="age-input">
        <button id="soc-number-button">search</button>
      </div>
      <div id="soc-number-display-area"></div>
    </div>
  </div>
  <footer class="center-text">
    <img src="images/logo.png" alt="">

    <a href="mailto:gross204@caledonian.ac.uk" target="_top">gross204@caledonian.ac.uk</a>
    <p>07587032343</p>
    <div class="social-media-icon-container center-text">
      <i class="fab fa-twitter-square fa-lg"></i>
      <i class="fab fa-facebook-square fa-lg"></i>
      <i class="fab fa-google-plus-square fa-lg"></i>
      <i class="fab fa-pinterest-square fa-lg"></i>
    </div>
    <p id="copyright">&copy gross productions</p>
  </footer>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
  <script src="scripts/job_search.js"></script>
  <script src="scripts/navbar.js"></script>
</body>

</html>