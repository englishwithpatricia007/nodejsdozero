import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const db = new DatabaseMemory()


//Request Body
// POST http://localhost:3333/videos
server.post('/videos', (request, reply) => {
    const { title, description, url } = request.body	
    
    db.create({ title, description, url })
    return reply.status(201).send()        
})

server.get('/videos', () => {
    const videos = db.list()
    return videos
})

// Router Parameter
// PUT http://localhost:3333/videos/1
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, url } = request.body
    const video = db.update(videoId, {
        title,
        description,
        url                 
    })

    return reply.status(204).send()    
})

server.delete('/videos/:id', (request, reply) => {  
    const { id } = request.params
    return `Video ${id} deleted!`
})

server.listen({
    port: 3333,         
})