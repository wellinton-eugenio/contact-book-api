import {z} from "zod";

const contactSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email().nullish(),
    cellphone:z.string().nullish(),
    createdAt: z.date(),
});

const contactSchemaRequest = contactSchema.omit({
    createdAt: true,
    id: true,
});

const contactSchemaUpdateRequest = contactSchema.omit({id:true}).partial();

const contactsSchemaResponse = z.array(contactSchema);

export{contactSchema, contactSchemaRequest, contactSchemaUpdateRequest, contactsSchemaResponse};