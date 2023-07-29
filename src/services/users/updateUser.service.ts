import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { TUserUpdadeRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updadeUserService = async(data:TUserUpdadeRequest, userId:number): Promise<TUserResponse> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const oldData =await userRepo.findOneBy({id:userId});

    if(!oldData){
        throw new AppError("User not found", 404)
    };

    const newData = userRepo.create({
        ...oldData,
        ...data
    });

    userRepo.save(newData);

    return userSchemaResponse.parse(newData);
}

export default updadeUserService;