import { Response, Request } from "express";
import createContactService from "../services/contacts/createContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";



const createContactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId
    const data = req.body

    const newContact = await createContactService(data, userId)

    return res.status(201).json(newContact)
}

const listContactsController = async (req: Request, res: Response) => {
    const userId = res.locals.userId

    const contacts = await listContactsService(userId)
    
    return res.status(200).json(contacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const data = req.body
    const contactId:number = parseInt(req.params.id)

    const updatedContact =  await updateContactService(data, contactId)

    return res.status(200).json(updatedContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId:number = parseInt(req.params.id)

    await deleteContactService(contactId)

    return res.status(204).send()
}
export { createContactController, updateContactController, deleteContactController, listContactsController }