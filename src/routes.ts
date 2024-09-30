import { Router, Request, Response } from 'express'
import { UserController } from './controller/UserController'
import { AppDataSource } from './data-source'
import { User } from './entity/User'
import { Entregador } from './entity/Entregador'

const routes = Router()

routes.get('/entregadores', async (request: Request, response: Response) => {
    const allUsers = await AppDataSource.getRepository(Entregador)

    return response.json("ok")
})

routes.post('/auth', async (request: Request, response: Response) => {
    const user = request.body.user
    const password = request.body.password
    const usertoFind = await AppDataSource.getRepository(User).findBy({
        username: user,
        password: password
    })
})
export default routes