
const verifyAdmin = (request, response, next) => {
    if (request.user.Tipo_Usuario !== 'Administrador') {
        return response.status(403).json({ Error: "Acceso denegado. No eres administrador." });
    }

    next();
};

module.exports = { verifyAdmin };