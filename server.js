/*import { createServer } from 'node:http'

const server = createServer((request, response) => {  
    //console.log('Server is running...')
    response.write("Sayonara!")
    return response.end()
})
server.listen(3333, () => {
    console.log('Server is listening on port 3333')
})*/
import { fastify } from 'fastify'
const server = fastify()

server.get('/', (request, reply) => {
    return 'Hello World!'
})

server.get('/users', (request, reply) => {
    return [{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]
})

server.get('/users/:id', (request, reply) => {
    const { id } = request.params
    return { id, name: 'John Doe', age: 30 }
})

server.listen({
    port: 3333,
})