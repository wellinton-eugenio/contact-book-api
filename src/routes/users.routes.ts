import { Router } from "express";
//import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
//import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
//import { taskSchemaRequest, taskSchemaUpdate } from "../schemas/tasks.schema";
import { createUserController, retrieveUserController, updateUserController, deleteUserController } from "../controllers/users.controllers";

//import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";


const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("/:id", retrieveUserController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)

export { userRoutes }