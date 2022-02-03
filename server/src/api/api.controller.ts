import { Controller, Get, Post, Request, Put, Delete, Param, Body, UseGuards, NotFoundException, BadRequestException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Prisma, User } from "@prisma/client";
import { NotFoundError } from "rxjs";
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
    @UseGuards(AuthGuard('jwt'))
    @Post('transactions')
    async createTransaction(@Body() data: Prisma.TransactionCreateInput) {
        return await this.api.addTransaction(data)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('transactions/:username')
    async getTransactions(@Param('username') username: string) {
            return this.api.getTransactions({
                username: username
            })  
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('users/:username')
    async updateUser(@Param('username') username: string, @Body() data: Prisma.UserUpdateInput) {
            return await this.api.updateUser(
                {
                    username: username
                },
                data)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('transactions/:id')
    async updateTransaction(@Param('id') id: number, @Body() data: Prisma.TransactionUpdateInput) {
            delete data.timestamp
            return this.api.editTransaction(id, data)
    }

    // @UseGuards(AuthGuard('jwt'))
    @Delete("transactions/:id")
    async deleteTransactions(@Param('id') id: number) {
        return await this.api.deleteTransaction(id)
    }
}
