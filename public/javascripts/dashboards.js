var client = new Keen({
  projectId: "56561253e0855757577cb061",
  readKey: "9b2de9766e7563dcf14ef4ebc41227906702cc44f69dbeaf72256a03849e6c0ee27827fd3892d301bb1aa18157a55a80e1ec9171b6255910fa45edbf62c2a9e5b676a2556c10f28c6396ba0668ef2132ba97fd035a3b255a6115798ba25709cf340497749c79450f078ab9f8b8b7c53f"

});

Keen.ready(function(){

  var chartOne = new Keen.Dataviz()
       .el(document.getElementById("grid-1-1"))
       .type("metric")
       .prepare(); // starts spinner

   client
     .query("saved", "pageview-count-month/result")
     .then(function(res){
      // do something with the result
      chartOne
        .data(res)
        .render();
     })
     .catch(function(err){
       // catch and handle errors
      console.log(err);
     });

  //  var chartOne = new Keen.Dataviz()
  //       .el(document.getElementById("grid-1-1"))
  //       .type("metric")
  //       .prepare(); // starts spinner
   //
  //   client
  //     .query("saved", "pageview-count-month/result")
  //     .then(function(res){
  //      // do something with the result
  //      chartOne
  //        .data(res)
  //        .render();
  //     })
  //     .catch(function(err){
  //       // catch and handle errors
  //      console.log(err);
  //     });

    var chartTwo = new Keen.Dataviz()
         .el(document.getElementById("grid-1-2"))
         .type("metric")
         .prepare(); // starts spinner

     client
       .query("saved", "pageview-count-month/result")
       .then(function(res){
        // do something with the result
        chartTwo
          .data(res)
          .render();
       })
       .catch(function(err){
         // catch and handle errors
        console.log(err);
       });

     var chartThree = new Keen.Dataviz()
          .el(document.getElementById("grid-1-3"))
          .type("metric")
          .prepare(); // starts spinner

      client
        .query("saved", "pageview-count-month/result")
        .then(function(res){
         // do something with the result
         chartThree
           .data(res)
           .render();
        })
        .catch(function(err){
          // catch and handle errors
         console.log(err);
        });

    var chartFour = new Keen.Dataviz()
         .el(document.getElementById("grid-2-1"))
         .type("metric")
         .prepare(); // starts spinner

     client
       .query("saved", "pageview-count-month/result")
       .then(function(res){
        // do something with the result
        chartFour
          .data(res)
          .render();
       })
       .catch(function(err){
         // catch and handle errors
        console.log(err);
       });

   var chartFive = new Keen.Dataviz()
        .el(document.getElementById("grid-2-2"))
        .type("metric")
        .prepare(); // starts spinner

    client
      .query("saved", "pageview-count-month/result")
      .then(function(res){
       // do something with the result
       chartFive
         .data(res)
         .render();
      })
      .catch(function(err){
        // catch and handle errors
       console.log(err);
      });

  var chartSix = new Keen.Dataviz()
       .el(document.getElementById("grid-2-3"))
       .type("metric")
       .prepare(); // starts spinner

   client
     .query("saved", "pageview-count-month/result")
     .then(function(res){
      // do something with the result
      chartSix
        .data(res)
        .render();
     })
     .catch(function(err){
       // catch and handle errors
      console.log(err);
     });


  var chartSeven = new Keen.Dataviz()
        .el(document.getElementById("grid-3-1"))
        .type("table")
        .prepare(); // starts spinner

    client
      .query("saved", "signups/result")
      .then(function(res){
       // do something with the result
       chartSeven
         .data(res)
         .render();
      })
      .catch(function(err){
        // catch and handle errors
       console.log(err);
      });

  var chartEight = new Keen.Dataviz()
       .el(document.getElementById("grid-3-2"))
       .type("bar")
       .prepare(); // starts spinner

   client
     .query("saved", "pageview-grouped-by-page/result")
     .then(function(res){
      // do something with the result
      chartEight
        .data(res)
        .render();
     })
     .catch(function(err){
       // catch and handle errors
      console.log(err);
     });

});
