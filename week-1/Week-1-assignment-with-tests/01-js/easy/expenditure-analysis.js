/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function categorise(expendituref) {
  var cat = [];
  for (var i = 0; i < expendituref.length; i++) {
      if (!cat.includes(expendituref[i].category)) {
          cat.push(expendituref[i].category);
      }
  }
  return cat;
}


function calculateTotalSpentByCategory(transactions) {
  itemcategory=categorise(transactions)
    var Output=[]
    for (var j=0;j<itemcategory.length;j++)
    {
        var FinalPrice=0;
        for(var k=0;k<transactions.length;k++)
        {
            if (itemcategory[j]==transactions[k].category)
            {
                FinalPrice=FinalPrice+transactions[k].price

            }
        }
        Output[itemcategory[j]]=FinalPrice ;   

    }
    console.log("Output:",Output);
}

module.exports = calculateTotalSpentByCategory;
