import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleAppError } from "./middlewares/handleAppError.midleware"
import { userRoutes } from "./routes/users.routes"
import { loginRoutes } from "./routes/login.routes"
import { contactsRoutes } from "./routes/contacts.routes"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)
app.use(handleAppError)

export default app