'use strict';

let testJSON = {
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna",	"lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

let Home = (req,res) => {
  res.json(testJSON)
};

module.exports = {
  Home: Home
};
