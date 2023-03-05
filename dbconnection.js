const EventEmitter  = require('events');
const mysql         = require('mysql');

class Connection extends EventEmitter{
    connect(){
        const connection = mysql.createConnection({
            host        : '127.0.1.1',
            user        : 'root',
            password    : '',
            database    : 'nodejs',
        
        });
        
        connection.connect( (error) => {
            if(error){
                
                this.emit('dbStatus', {status : 'error', data : error})
            }else{
                this.emit('dbStatus', {status : 'sucess', data : connection});
            }
            
        });
    }
}
module.exports = Connection;
