import {z} from "zod"

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    cellPhone:z.string().nullish(),
    createdAt: z.date(),
})

const userSchemaRequest = userSchema.omit({
    createdAt: true,
    id: true,
})

const userSchemaResponse = userSchema.omit({
    password: true,
})

const userSchemaUpdateRequest = userSchemaRequest.partial()

export{userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdateRequest}