// code your solution here

function superbowlWin(record){
    let result = record.find(function(element){
        return (element.result === "W")
    })
    if (result != undefined){
        return result.year;
    } else {
        return result;
    }
}

// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//   ];

// console.log(superbowlWin(record));
