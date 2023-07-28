import { z } from "zod"
import { userSchema, userSchemaRequest, userSchemaResponse } from "../schemas/users.schemas"
import { DeepPartial } from "typeorm"


type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TUserUpdadeRequest = DeepPartial<TUserRequest>

export { TUser, TUserRequest, TUserResponse, TUserUpdadeRequest }