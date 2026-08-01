/* eslint-disable no-undef */
import AppError from "../utils/errorUtils.js";
import jwt from 'jsonwebtoken'

const isLoggedin = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new AppError("Unauthenticated, Please Login Again.", 401))
    }

    const userDetails = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = userDetails;
    next();
}

const authorizedRole = (...roles) => async (req, res, next) => {
    const currentUserRole = req.user.role;

    if(!roles.includes(currentUserRole)){
        return next(new AppError("You are not authorized Access this route.", 403))
    }

    next(); 
}

export {
    isLoggedin,
    authorizedRole,
    
}