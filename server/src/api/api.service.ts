import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Transaction, Prisma } from '@prisma/client'
@Injectable()
export class ApiService {
    constructor(private prisma: PrismaService){}
    async getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: where
        })
    }
    async createUser(data: Prisma.UserCreateInput): Promise<User> {        
        return this.prisma.user.create({
            data: data
        })
    }
    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where: where
        })
    }
    async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<User> {
        return this.prisma.user.update({data, where})
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
        const user = await this.prisma.user.findUnique({ where})
        return this.prisma.transaction.findMany({
            where: {
                user: user
            }
        })
    }
}