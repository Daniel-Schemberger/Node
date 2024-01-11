
import {fastify} from 'fastify'

//import { Database } from './database.js'

import { DatabasePostgres } from './db_postgres.js'

const server = fastify()

//const database = new Database()
const database = new DatabasePostgres()

server.post('/itens',  async (request, reply)=>{
    const {title , teste} = request.body 

    await database.create({
        title,
        info: teste,
    })

    return reply.status(201).send()
})                          

server.get('/itens', async (request, reply)=>{
    const search = request.query.search

    const itens = await database.list(search)


    return itens
})

server.put('/itens/:id', async (request, reply)=>{
    const itensId = request.params.id
    const {title , teste} = request.body

    const itens = await database.update(itensId, {
        title,
        info: teste,
    })

    return reply.status(204)
})


server.delete('/itens/:id', async (request, reply)=>{
    const itensId = request.params.id

    await database.delete(itensId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.port ?? 3332
})

