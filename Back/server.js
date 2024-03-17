const express = require('express');
const cors = require('cors'); 
const {PrismaClient} = require('@prisma/client');

const server = express();
const prisma =  new PrismaClient();

server.use(express.json(console.log('Servidor Rodando !')));
server.use(cors());


server.get('/usuarios', async (request, response) => {
    const usuarios = await prisma.usuario.findMany({include: { 
        links : true } });
    response.send(usuarios);
}); 


server.post('/usuarios', async (request, response) => {

    try {
        const usuario = await prisma.usuario.findUnique({
        where: { email: request.body.email },
    });

    if (usuario) {
        response.status(409).send({
            error: "Conflito",
            message: "Já existe um usuário com este email",
        });
    }
    const resposta = await prisma.usuario.create({
        data: request.body,
    });
    response.send(resposta);
    }  catch (error) {
        response.status(500).send(error);
    }
});

server.put('/usuarios/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const usuario = await prisma.usuario.update({
            where: { id: parseInt(id) },
            data: request.body,
        });
        response.send(usuario);
    } catch (error) {
        response.status(500).send(error);
    }
});

server.delete('/usuarios/:id', async (request, response) => {
    const { id } = request.params;
    try {
        await prisma.usuario.delete({
            where: { id: parseInt(id) },
        });
        response.send({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        response.status(500).send(error);
    }
});


server.listen(4444);