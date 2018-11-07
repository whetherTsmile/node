var connection = require('./conn')

connection.connect();

connection.query('select * from test', function (error, results) {
    if (error) throw error;
    console.log(results);

})

connection.end();