'use strict'

var db = require('../dbconnection');

module.exports={
    
    getUsers: function(req, res){
        db.query('SELECT u.*, e.nombre as nombre_empresa FROM user u INNER JOIN empresa e ON u.id_empresa = e.id',function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
    },

    getUser: function(req, res){
        var id = req.params.id;

        db.query('SELECT u.*, e.nombre as nombre_empresa FROM user u INNER JOIN empresa e ON u.id_empresa = e.id WHERE u.id = ?',[id],function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
    },

    deleteUser: function(req, res){
        var id = req.params.id;

        db.query('delete from user where id = ?',[id],function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","error":err,"response":results}))
            }else{
                if(results.affectedRows>0){
                    res.send(JSON.stringify({"status":"200","response":"delete"}))
                }else{
                    res.send(JSON.stringify({"status":"400","response":"not found"}))
                }
                
            }
            
         });
    },

    postUser: function(req, res){
        var user = req.body;

        db.query('insert into user values(?,?,?,?,?)',[user.id ,user.nombre, user.apellido, user.tipo, user.id_empresa],
        function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}));
            }else{
                user.id = results.insertId;
                res.send(JSON.stringify({"status":"200","response":user}));
            }
            
         });
    },

    putUser: function(req, res){
        var user = req.body;

        db.query('update user set nombre = ?, apellido = ?, tipo = ?, id_empresa = ? where id = ?',
        [user.nombre, user.apellido, user.tipo, user.id_empresa, user.id],
        function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}));
            }else{
                res.send(JSON.stringify({"status":"200","response":server}));
            }
            
         });
    }
}