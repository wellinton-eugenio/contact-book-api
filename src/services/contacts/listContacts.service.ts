import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TContactsResponse } from "../../interfaces/contact.interfaces";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";

const listContactsService = async (userId: number): Promise<TContactsResponse> =>{
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({where:{id: userId},relations:{contacts:true}});

    if (!user) { throw new AppError("user not found", 404)};

    return contactsSchemaResponse.parse(user.contacts);
}

export default listContactsService;