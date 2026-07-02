// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateDescription } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDTO, UserResponseDto, UsersListDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async getUser(id: string): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    } as UserResponseDto;
  }

  async getAllUsers(): Promise<UsersListDto> {
    const dbUsers = await this.usersRepository.find();

    const mappedUsers: UserResponseDto[] = dbUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    }));

    return {
      users: mappedUsers,
    };
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDTO,
  ): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    Object.assign(user, updateUserDto);

    const updatedUser = await this.usersRepository.save(user);

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
    };
  }

  removeUser(id: string): void {
    this.usersRepository.delete({ id });
  }
}
