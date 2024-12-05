import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {

    const { method, url } = request


    if (method === 'GET' && url === '/users') {
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    // else 
    if (method === 'POST' && url === '/users') {

        users.push({
            id: 1,
            name: 'Raphaaa',
            email: 'raphateste@exemple.com',
        })

        return response.writeHead(201).end('criação de usuário') //status code de criação - 201

    }
    // else 
    // else 

    if (method === 'PATCH' && url === '/users') {
        return response.end("Atualizaão específica no backend")
    }

    if (method === 'PUT' && url === '/users') {
        return response.end('Atualização de um recurso no backend')
    }

    return response.writeHead(404).end('Not Founddd')
})

server.listen(3333)

