import { Router, Request, Response } from 'express'
import { UserController } from './controller/UserController'
import { AppDataSource } from './data-source'
import { User } from './entity/User'

const routes = Router()

routes.get('/home', async (request: Request, response: Response) => {
    const allUsers = await AppDataSource.getRepository(User).find()
    console.log(allUsers)
    return response.json({ message: 'Hello Turma!' })
})
export default routes