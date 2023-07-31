import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { TUserUpdadeRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { hash } from "bcryptjs";

const updadeUserService = async(data:TUserUpdadeRequest, userId:number): Promise<TUserResponse> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const oldData =await userRepo.findOneBy({id:userId});

    if(!oldData){
        throw new AppError("User not found", 404)
    };

    if (data.password){
        const hashedPassword = await hash(data.password, 10)
        data.password = hashedPassword
    } else {
        data.password = oldData.password
    }

    const newData = userRepo.create({
        ...oldData,
        ...data
    });

    userRepo.save(newData);

    return userSchemaResponse.parse(newData);
}

export default updadeUserService;