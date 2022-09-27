
var data = [
    { case: "foo", count: 1 },
    { case: "foo", count: 5 },
    { case: "bar", count: 10 }
  ]
  
  //foo: 2, maxCount: 5
  //bar: 1, maxCount: 10
  
  let groupByUseCase = {}
  data.forEach(function(item) {
    if (!groupByUseCase[item.case]) {
      //groupByUseCase[item.case] = { maxCount: item.count };
      
      //groupByUseCase[item.case] = {}

      groupByUseCase[item.case] = 0
      
      //groupByUseCase[item.case][item.case] = 0
    }
    //if (item.count > groupByUseCase[item.case].maxCount) {
    //  groupByUseCase[item.case].maxCount = item.count;
    //}
    //groupByUseCase[item.case][item.case]++;
    groupByUseCase[item.case]++
  });
  console.log("group by use case: ", groupByUseCase);






