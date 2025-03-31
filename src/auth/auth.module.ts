import { AuthController } from '@/auth/auth.controller';
import { AuthService } from '@/auth/auth.service';
import { PrismaService } from '@/database/prisma.service';
import { UsersService } from '@/users/users.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [AuthService, UsersService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
