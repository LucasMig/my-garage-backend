import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'Email of the user',
    example: 'john.doe@sample.com',
  })
  email: string;

  @IsString()
  @ApiProperty({ description: 'Password of the user', example: 'password123' })
  password: string;
}
