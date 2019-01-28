
const renderArticles = function(articles) {
    for (let i = 0; i< articles.length; i++) {
      const headline = articles[i].headline.main;
      const url = articles[i].web_url;
  
      $(`.display`).append(`<h2><a href="${url}">${headline}</a></h2>`)
    }
  }
  
  
  const runSearch = function (e) {
    e.preventDefault();
  
    const query = $(`#searchTerm`).val();
    const apiKey = "9sbo3aeVqZOQxostdGGvwQ2oeANuoS5X";
    const yearStart = $(`#startYear`).val();
    const yearEnd = $(`#endYear`).val();
  
  let startYearParam = "";
  if (yearStart !== "") {
    startYearParam = `&begin_date=${yearStart}0101`;
  }
  
  let endYearParam = "";
  if (yearEnd !== "") {
    endYearParam = `&end_date=${yearEnd}1231`;
  }
  
  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}${startYearParam}${endYearParam}&api-key=${apiKey}`;
  
  
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function (res) {
      const articles = res.response.docs;
      renderArticles(articles);
    });
  
  
  
  };
  
  
  $(`#submit`).on("click", runSearch);
  