import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const retrieveUserService = async(userId:number): Promise<TUserResponse> =>{
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({id:userId});

    return userSchemaResponse.parse(user);
}

export default retrieveUserService;