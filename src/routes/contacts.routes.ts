import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { deleteContactController, updateContactController, createContactController, listContactsController } from "../controllers/contacts.controlers";
import ensureIsOwnerMiddleware from "../middlewares/ensureIsOwner.midleware";
import { contactSchemaRequest, contactSchemaUpdateRequest } from "../schemas/contacts.schemas";

const contactsRoutes = Router()

contactsRoutes.post("",ensureAuthMiddleware,ensureDataIsValid(contactSchemaRequest), createContactController)
contactsRoutes.get("",ensureAuthMiddleware, listContactsController)
contactsRoutes.patch("/:id",ensureAuthMiddleware, ensureIsOwnerMiddleware,ensureDataIsValid(contactSchemaUpdateRequest), updateContactController )
contactsRoutes.delete("/:id",ensureAuthMiddleware, ensureIsOwnerMiddleware, deleteContactController)

export {contactsRoutes}