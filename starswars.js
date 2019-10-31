var starPromise = d3.json("https://swapi.co/api/films/?format=json")
var printTitles = function(starsData)
{                                                                    
d3.select(".titles")
    .append("ol")
    .selectAll("li")
    .data(starsData)
    .enter()
    .append("li")
    .text(function(d) { return d.title})
    .on("click", function(d) 
        {
            console.log(d)
            printData(d) 
        });
    
}


var printData = function(film)
{
    
    
    
    
    
    
    
    console.log(film);
    var chars = film.characters;
    console.log(film.characters);
    
     var charPromise = chars.map(function(chars)
    {
                 console.log(chars);
                 return d3.json(chars);
    })
               
    Promise.all(charPromise).then(function(starvalue)
    {
    console.log(starvalue[0].name);
    console.log(starvalue[5].name);
     console.log("starvalue",starvalue);
     d3.select("ul li:nth-child(5)")
        .append("ul")
        .attr("id","bob")
        .selectAll("li")
        .data(starvalue)
        .enter()
        .append("li")
        .text(function(d) { return d.name})
        .on("click", function(d)
            {
                console.log(d)
                printData(d)
            });
      
        drawStarWars(starvalue);
    })

    
var drawStarWars = function(starvalue)
    
    {
    
d3.select(".data *").remove("ul");
    
d3.select(".data")
    .append("div")
    .attr("class", "info");
    
d3.select(".info")
    .append("ul")
    .attr("class", "accumulatedknowledge");
    
d3.select(".accumulatedknowledge")
    .append("li")
    .attr("id","crawl")
    .text(film.opening_crawl);
    
d3.select(".accumulatedknowledge")
    .append("li")
    .attr("id","rd")
    .text("Release Date: " + film.release_date);
    
d3.select(".accumulatedknowledge")
    .append("li")
    .attr("id","dir")
    .text("Director: " + film.director);
    
d3.select(".accumulatedknowledge")
    .append("li")
    .attr("id","prod")
    .text("Producer(s): " + film.producer);
    
d3.select(".accumulatedknowledge")
    .append("li")
    .attr("id","people")
    .text("Characters", film.characters)
    .on("click", function(d) 
        {
            console.log(d)
            printData(d) 
        });   
        
d3.select("#people")
    .append("ul")
    .attr("id","peoplelist")
    .selectAll("li")
    .data(starvalue)
    .enter()
    .append("li")
    .text(function(d) { return d.name})
        
        
        
        
        
        
        
        
    }
    

   





}


starPromise.then(
function(starData)
    
    
{
printTitles(starData.results);

console.log (starData);
},
);


