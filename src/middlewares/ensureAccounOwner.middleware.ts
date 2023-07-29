import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";

const ensureAccoutOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User);

    const userId:number = parseInt(req.params.id);
    const currentId:number = parseInt(res.locals.userId);

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    };

    if (userId !== currentId) {
        return res.status(403).json({
            message: "You dont`t have permissions"
        });
    };

    return next();
};

export default ensureAccoutOwnerMiddleware;