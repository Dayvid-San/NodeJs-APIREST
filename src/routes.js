import { Router } from 'express'

const router = Router()


router.post('/users', (res,req)=>{
    return res.status(201).send()
})

export { router }