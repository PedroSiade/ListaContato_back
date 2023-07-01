// @ts-ignore

import route from "../routes";
import {Request, Response} from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



class ContactsController {

    async store(req: Request, res: Response) {
        const {email, nome, telefone} = req.body;
            const cadastro = await prisma.cadastro.create({
                data: {
                    email,
                    nome,
                    telefone
                },
            })
            console.log(cadastro);
            return res.json(cadastro);
    }

    async index(req: Request, res: Response) {
        const cadastros = await prisma.cadastro.findMany();
        return res.json(cadastros);
    }

    async show(req: Request, res: Response) {
        let {email} = req.params;
        const teste = prisma.cadastro.findUnique({
            where: {
                email:  email
            },
        })
        return res.json(teste);
        }

    async destroy(req: Request, res: Response) {
        const {id} = req.params;
        const numeroId= +id
        const deleteCadastro = await prisma.cadastro.delete({
            where: {
                id: numeroId
            },

        })
        return res.json("deletado");
    }

    async update(req: Request, res: Response) {
        const {id} = req.params
        const numberId= parseInt(id)
        const{nome, email, telefone} = req.body
        const newCadastro = await prisma.cadastro.update({
            where: {
                id: numberId
            },
            data: {
                nome: nome,
                email:email,
                telefone: telefone
            },
        })
        return res.json(newCadastro);
    }
}


export default new ContactsController();