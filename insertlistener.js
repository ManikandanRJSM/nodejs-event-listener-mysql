const mysql = require('mysql');
const DbEvent = require('./dbconnection');
const conObj = new DbEvent();
conObj.on('dbStatus', (event_data) => {
    if(event_data.status !== 'erorr'){
        insertData(event_data.data);
    }
    else{
        console.error(event_data);return false;
    }
});
conObj.connect();

function insertData(connection){
    
    var sql = 'INSERT INTO users (name, email, password, ocuupation) VALUE ("mani", "mani@gmail.com", "12345", "Dodejs Developer")'
    connection.query(sql, (error, result) => {
        if(error){
            throw error;
            return false;
        }
        console.log(result);
    })
}
