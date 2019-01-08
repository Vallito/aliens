//select table body
var tbody = d3.select("tbody");

//select data
var tableData = data;

//select filter button
var tableFilter = d3.select("#filter-btn")

//Enter data into table
function ufoTable(newData){
tbody.html("");
newData.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
};
//Create date filter
function filteredTable(){
  d3.event.preventDefault();
  var filter = tableData;
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput)  {
    filter = tableData.filter(data => data.datetime === dateInput);
  console.log(dateInput);
  };

  ufoTable(filter);
};
tableFilter.on("click", filteredTable);
