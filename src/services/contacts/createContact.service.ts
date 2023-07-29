import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";
import { TContact, TContactRequest } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const createContactService = async(contactData: TContactRequest, userId: number): Promise<TContact> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    });

    if (!user) {
        throw new AppError("user not found", 404)
    };


    const contact = contactRepo.create({
        ...contactData,
        user    
    });

    await contactRepo.save(contact);

    const newContact = contactSchema.parse(contact);

    return newContact;
};

export default createContactService;