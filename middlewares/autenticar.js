module.exports = {
    autenticar: function(req, res, next){
        console.log("Autenticando usuario");
        const {idusuario, nombreusuario, Sucursal} = req.cookies;
        console.log("--> AUTH", !!idusuario, !!nombreusuario, !!Sucursal);
    if (!idusuario && !nombreusuario && !Sucursal){
            console.log("==> Usuariuo no autenticado");
            return res.redirect('/ingresar');
        }
        if (idusuario === "" && nombreusuario === "" && Sucursal === ""){
            console.log("==> Usuariuo no autenticado");
            return res.redirect('/ingresar');
        }

        return next();
    }
}