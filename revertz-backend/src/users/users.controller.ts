import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  UpdateUserDTO,
  UserResponseDto,
  UsersListDto,
} from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      success: true,
      data: user,
    };
  }

  @Get()
  async getAllUsers() {
    const users: UsersListDto = await this.usersService.getAllUsers();
    return {
      success: true,
      data: users,
    };
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    const user: UserResponseDto = await this.usersService.getUser(id);
    return {
      success: true,
      data: user,
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDTO) {
    const updatedUser = this.usersService.updateUser(id, body);
    return {
      success: true,
      data: updatedUser,
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
