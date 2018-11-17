<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>jobs</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="stylesheet" type="text/css" media="screen" href="" /> -->
</head>

<body>
  <h1>This is a page</h1>
  <div id="stats-area">
    <h2>Top 10 Most Popular Searches</h2>
    <div id="search-log-chart-section">
      <div id="search-log-chart"></div>
    </div>
  </div>

  <div id="job-name-input">
    <h3>Enter Job Name</h3>
    <input id="job-search-input" type="text" name="job-search-input">
    <button id="job-search-button">search</button>
  </div>
  <div id="job-search-display-area"></div>
  <div id="soc-number-input">
    <h3>Soc Number Input</h3>
    <input id="soc-input" type="text" name="soc-input">
    <h3>Age Input</h3>
    <input id="age-input" type="text" name="age-input">
    <button id="soc-number-button">search</button>
  </div>
  <div id="soc-number-display-area">

  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
  <script src="scripts/job_search.js"></script>

</body>

</html>