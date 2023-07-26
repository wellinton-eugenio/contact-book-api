import { Router } from "express";
//import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
//import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
//import { taskSchemaRequest, taskSchemaUpdate } from "../schemas/tasks.schema";
import { deleteContactController, retrieveContactController, updateContactController, createContactController, retrieveAllContactsController } from "../controllers/contacts.controlers";
//import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";


const contactsRoutes = Router()

contactsRoutes.post("", createContactController)
contactsRoutes.get("", retrieveAllContactsController)
contactsRoutes.get("/:id", retrieveContactController)
contactsRoutes.patch("/:id", updateContactController )
contactsRoutes.delete("/:id", deleteContactController)

export {contactsRoutes}