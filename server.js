import { createServer } from 'node:http'

const server = createServer(() => {  
    console.log('Server is running...')

})
server.listen(3333, () => {
    console.log('Server is listening on port 3333')
})