'use strict'

var db = require('../dbconnection');

module.exports={
    
    getEmpresas: function(req, res){
        db.query('select * from empresa',function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
    },

    getEmpresa: function(req, res){
        var id = req.params.id;

        db.query('select * from empresa where id = ?',[id],function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}))
            }else{
                res.send(JSON.stringify({"status":"200","response":results}))
            }
            
         });
    },

    deleteEmpresa: function(req, res){
        var id = req.params.id;

        db.query('delete from empresa where id = ?',[id],function(err, results, fiel){
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

    postEmpresa: function(req, res){
        var empresa = req.body;

        db.query('insert into empresa values(?,?,?,?)',[0,empresa.nombre, empresa.descripcion, empresa.direccion],
        function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}));
            }else{
                empresa.id = results.insertId;
                res.send(JSON.stringify({"status":"200","response":empresa}));
            }
            
         });
    },

    putEmpresa: function(req, res){
        var empresa = req.body;

        db.query('update empresa set nombre = ?, descripcion = ?, direccion = ? where id = ?',
        [empresa.nombre, empresa.descripcion, empresa.direccion, empresa.id],
        function(err, results, fiel){
            if (err){
                res.send(JSON.stringify({"status":"400","status":err,"response":results}));
            }else{
                res.send(JSON.stringify({"status":"200","response":empresa}));
            }
            
         });
    }
}