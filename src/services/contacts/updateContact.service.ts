import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";
import { TContactResponse, TContactUpdate } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (data: TContactUpdate, contactId: number): Promise<TContactResponse> =>{
    const contactRepo = AppDataSource.getRepository(Contact)
    console.log("entrouupdate")
    console.log(typeof contactId)
    console.log(contactId)
    const oldContact = await contactRepo.findOne({where:{id: contactId}})

    if(!oldContact){
        throw new AppError("Contact Not found", 404)
    }

    const newContacData = contactRepo.create({
        ...oldContact,
        ...data
    })

    await contactRepo.save(newContacData)

    return contactSchema.parse(newContacData)
}

export default updateContactService