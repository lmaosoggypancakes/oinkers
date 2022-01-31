import { Controller, Get, Post, Request, Put, Delete, Param, Body } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { ApiService } from "./api.service";

@Controller('api')
export class ApiController {
    constructor(private api: ApiService){}

    @Post('users')
    async createUser(@Body() data: Prisma.UserCreateInput) {
        return await this.api.createUser(data)
    }

    @Get('users/:username')
    async getUser(@Param('username') username: string) {
        return await this.api.getUser({
            username: username
        })
    }

    @Post('transactions')
    async createTransaction(@Body() data: Prisma.TransactionCreateInput) {
        return await this.api.addTransaction(data)
    }

    @Get('transactions/:username')
    async getTransactions(@Param('username') username: string) {
        return this.api.getTransactions({
            username: username
        })
        
    }
}
