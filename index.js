// code your solution here
// index.js

function superbowlWin(record) {
    // Use find to locate the first object where result is "W"
    const winRecord = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  // Example record data for the Denver Broncos
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "2012", result: "L" },
    { year: "2011", result: "W" },
    { year: "2010", result: "L" }
  ];
  
  // Test the superbowlWin function
  console.log(superbowlWin(record)); // Output: "2015"
  