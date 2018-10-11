'use strcit'

function router(app){
    app.use("/api/empresas", require('./api/empresas'));
    app.use("/api/servers", require('./api/servers'));
    app.use("/api/users", require('./api/users'));
}
module.exports = router;