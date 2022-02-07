import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Transaction, Prisma, prisma } from '@prisma/client'
@Injectable()
export class ApiService {
    constructor(private prisma: PrismaService){}
    async getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
        const res = await this.prisma.user.findUnique({
            where: where
        })
        if (res) return res
        throw new NotFoundException()
    }
    async createUser(data: Prisma.UserCreateInput): Promise<User> {    
        if (!data.username) {
            throw new BadRequestException("Username must be provided.")
        }
        data.username = data.username.replaceAll(' ', '_')
        try {
            return await this.prisma.user.create({
                data: data
            })
        } catch(err) {
            console.error(err)
            throw new UnprocessableEntityException("Username already exists or unknown error.")
        }
    }
    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        try {
            return await this.prisma.user.delete({
                where: where
            })  
        } catch(err) {
            console.error(err)
            throw new NotFoundException()
        }
    }
    async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<User> {
        data.username = (data.username as string).replaceAll(' ', '_')
        try {
            return await this.prisma.user.update({data, where})
        } catch(err) {
            console.error(err)
            throw new NotFoundException()
        }
    }
    async addTransaction(data: Prisma.TransactionCreateInput): Promise<Transaction> {
        return this.prisma.transaction.create({
            data: data
        })
    }
    async removeTransaction(where: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
        return this.prisma.transaction.delete({ 
            where: where
         })
    }

    async getTransactions(where: Prisma.UserWhereUniqueInput) {
        try {
            const user = await this.prisma.user.findUnique({ where})
            const res =  this.prisma.transaction.findMany({
                where: {
                    user: user
                }
            })
            return await res
        } catch(err) {
            console.error(err)
            throw new NotFoundException()
        }
    }

    async editTransaction(id: any, data: Prisma.TransactionUpdateInput) {
        id = parseInt(id)
        try {
            return await this.prisma.transaction.update({
                data: data,
                where: {
                    id: id
                },
            })
        } catch(err) {
            console.error(err)
            throw new NotFoundException()
        }
    }

    async deleteTransaction(where: any) {
        where = parseInt(where)
        try {
            return await this.prisma.transaction.delete({
                where: {
                    id: where
                }
            })
        } catch(err) {
            console.error(err)
            throw new NotFoundException()
        }
    }
}