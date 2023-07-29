import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";

const deleteContactService = async(contactId:number): Promise<void> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

    const contact = await contactRepo.findOne({where:{id:contactId}});

    await contactRepo.remove(contact!);
};

export default deleteContactService;