'use strict'

var db = require('../dbconnection');

module.exports={
    
    getServers: function(req, res){
         db.query('select * from server',function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
        
    },

    getServer: function(req, res){
        var id = req.params.id;

        db.query('select * from server where id = ?',[id],function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
    },

    deleteServer: function(req, res){
        var id = req.params.id;

        db.query('delete from server where id = ?',[id],function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","error":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
    },

    postServer: function(req, res){

        var server = req.body;

        db.query('insert into server values(?,?,?,?,?)',[0,server.nombre, server.descripcion, server.ip, server.id_empresa],
        function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}));
            }else{
                server.id = results.insertId;
                res.send(JSON.stringify({"status":"200","response":server}));
            }
            
         });
    },

    putServer: function(req, res){
        
        var server = req.body;

        db.query('update server set nombre = ?, descripcion = ?, ip = ?, id_empresa = ? where id = ?',
        [server.nombre, server.descripcion, server.ip, server.id_empresa, server.id],
        function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}));
            }else{
                res.send(JSON.stringify({"status":"200","response":server}));
            }
            
         });
    }
}