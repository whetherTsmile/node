var connection = require('./conn')
connection.connect;
//插入单条数据
var addSql = 'insert into test values (?,?)';
var addSqlParmars = ['six','thefsix']
connection.query(addSql,addSqlParmars,function(err,results){
    if(err){
        console.log('[insert error] - ' ,err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:',results);        
    console.log('-----------------------------------------------------------------\n\n');  
})
connection.end();

//插入多条数据

// var addSql = 'insert into test values ?';
// var addSqlParmars = [
//     [1,2],
//     [2,3],
//     [3,4]
// ]
// connection.query(addSql,[addSqlParmars],function(err,results){
//     if(err){
//         console.log('[insert error] - ' ,err.message);
//         return;
//     }
//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     console.log('INSERT ID:',results);        
//     console.log('-----------------------------------------------------------------\n\n');  
// })
// connection.end();