var mysql = require('mysql')

var pool = mysql.createPool({
    host:'localhost',
    database:'haha',
    user:'root',
    password:'root'
})


function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,results){
            callback(err,results);
            connection.release()
        })
    })
}


exports.query = query;