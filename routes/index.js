var express = require('express');
var router = express.Router();
var fs = require('fs');
var names_json = JSON.parse(fs.readFileSync(__dirname + '/../public/db/names.json', 'utf8'));
var addresses_json = JSON.parse(fs.readFileSync(__dirname + '/../public/db/addresses.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '[COMP421 - Group 38] Tofu Sandwich Express' });
});

router.get('/generate/customers', function(req, res, next) {
  res.send(generateInsertCustomers());
});

router.get('/generate/employees', function(req, res, next) {
  res.send(generateInsertCustomers());
});


function generateInsertCustomers() {
  s = "";

  for (i = 0; i < 100; i++) {

    name = names_json[i].name
    email = name.replace(/ /g,'').toLowerCase() + "@gmail.com";
    phone = addresses_json[i].phone;
    address = addresses_json[i].street + ", " + addresses_json[i].city + ", " + addresses_json[i].province;

    sql = "INSERT INTO Customer VALUES (\'" + email + "\', "+ phone +", \'"+ address+"\', \'"+name+"\');";

    console.log(sql);
    s = s + sql + "<br>";
  }

  return s;

}

function generateInsertEmployees() {
  s = "";

  for (i = 100; i < 200; i++) {

    name = names_json[i].name

    randomYear = Math.floor(Math.random() * 21);
    randomMonth = Math.floor(Math.random() * 13);
    if (randomMonth < 10) {
      randomMonth = "0" + randomMonth
    }


    randomDay = Math.floor(Math.random() * 31);
    if (randomDay < 10) {
      randomDay = "0" + randomDay
    }

    birthday = 1970 + randomYear + "-" + randomMonth + "-" + randomDay;

    randomYear = Math.floor(Math.random() * 21);
    randomMonth = Math.floor(Math.random() * 13);
    if (randomMonth < 10) {
      randomMonth = "0" + randomMonth
    }


    randomDay = Math.floor(Math.random() * 31);
    if (randomDay < 10) {
      randomDay = "0" + randomDay
    }

    joindate = 1990 + randomYear + "-" + randomMonth + "-" + randomDay;

    sql = "INSERT INTO Employees VALUES (" + i + ", \'" + birthday + "\', \'"+ name +"\', \'"+ joindate+"\');";

    console.log(sql);
    s = s + sql + "<br>";
  }

  return s;

}



module.exports = router;
