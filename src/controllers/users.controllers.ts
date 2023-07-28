import { Response, Request } from "express";
import createUserService from "../services/users/createUser.service";
import retrieveUserService from "../services/users/retrieveUser.service";
import updadeUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";


const createUserController = async (req: Request, res: Response) => {

    const newUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

const retrieveUserController = async (req: Request, res: Response) => {
    const userId:number = parseInt(req.params.id)

    const dataUser = await retrieveUserService(userId)

    return res.status(200).json(dataUser)
}

const updateUserController = async (req: Request, res: Response) => {
    const data = req.body
    const userId:number = parseInt(req.params.id)

    const updateUser = await updadeUserService(data, userId)

    return res.status(200).json(updateUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    const userId:number = parseInt(req.params.id)

    await deleteUserService(userId)
    
    return res.status(204).send()
}
export { createUserController, retrieveUserController, deleteUserController, updateUserController }