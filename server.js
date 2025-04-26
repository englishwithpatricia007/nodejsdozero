import { createServer } from 'node:http'

const server = createServer((request, response) => {  
    //console.log('Server is running...')
    response.write("Sayonara!")
    return response.end()
})
server.listen(3333, () => {
    console.log('Server is listening on port 3333')
})