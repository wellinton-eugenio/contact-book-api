import { Router } from "express";
import  ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import  ensureDataIsValid  from "../middlewares/ensureDataIsValid.middleware";
import { createUserController, retrieveUserController, updateUserController, deleteUserController } from "../controllers/users.controllers";
import ensureAccoutOwnerMiddleware from "../middlewares/ensureAccounOwner.middleware";
import { userSchemaRequest, userSchemaUpdateRequest } from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post("",ensureDataIsValid(userSchemaRequest), createUserController);
userRoutes.get("/:id",ensureAuthMiddleware, ensureAccoutOwnerMiddleware, retrieveUserController);
userRoutes.patch("/:id",ensureAuthMiddleware, ensureAccoutOwnerMiddleware, ensureDataIsValid(userSchemaUpdateRequest), updateUserController);
userRoutes.delete("/:id",ensureAuthMiddleware, ensureAccoutOwnerMiddleware, deleteUserController);

export { userRoutes };