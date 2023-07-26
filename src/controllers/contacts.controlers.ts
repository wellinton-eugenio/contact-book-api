import { Response, Request } from "express";
import { createUserService } from "../services/users/createUser.service";


const createContactController = async (req: Request, res: Response) => {

    //const newUser = await createUserService(req.body)

    return res.status(201).json("create contact")
}

const retrieveAllContactsController = async (req: Request, res: Response) => {


    return res.status(200).json("list contacts")
}

const retrieveContactController = async (req: Request, res: Response) => {


    return res.status(200).json("list contact")
}

const updateContactController = async (req: Request, res: Response) => {


    return res.status(200).json("updateContact")
}

const deleteContactController = async (req: Request, res: Response) => {


    return res.status(204).json("deletecontact")
}
export { createContactController, retrieveContactController, updateContactController, deleteContactController, retrieveAllContactsController }