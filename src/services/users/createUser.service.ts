import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schemas";



const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const { email, name, password, cellphone } = data
    const userRepo = AppDataSource.getRepository(User)
    const findUser = await userRepo.findOne({
        where: {
            email
        }
    })

    if (findUser) {
        throw new AppError("user already exists", 409)
    }

    data.password = await hash(data.password, 10)

    const user = userRepo.create(data)

    await userRepo.save(user)

    return userSchemaResponse.parse(user)
}


export default createUserService