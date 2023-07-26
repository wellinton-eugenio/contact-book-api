import { Response, Request } from "express";
import { createUserService } from "../services/users/createUser.service";


const createUserController = async (req: Request, res: Response) => {

    //const newUser = await createUserService(req.body)

    return res.status(201).json("create user")
}

const retrieveUserController = async (req: Request, res: Response) => {


    return res.status(200).json("list user")
}

const updateUserController = async (req: Request, res: Response) => {


    return res.status(200).json("updateUser")
}

const deleteUserController = async (req: Request, res: Response) => {


    return res.status(204).json("deleteroute")
}
export { createUserController, retrieveUserController, deleteUserController, updateUserController }