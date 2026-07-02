export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export class UsersListDto {
  users: UserResponseDto[]; // 👈 Clean TypeScript array notation
}

export class CreateUserDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export class UpdateUserDTO {
  name: string;
  email: string;
  phone: string;
}

export class UpdateUserPasswordDTO {
  id: string;
  password: string;
}
