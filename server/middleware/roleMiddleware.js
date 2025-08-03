const autorizedRoles = (...allowedRoles) => {
    return (req,res,next) => {  
        if(!allowedRoles.includes(req.user.role)){ 
            return res.status(200).json({message :"Access denied"});
        }
        next();
    }
}

module.exports = {autorizedRoles};

