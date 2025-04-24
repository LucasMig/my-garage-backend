import { VehiclesService } from '@/vehicles/vehicles.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService, VehiclesService],
  exports: [UsersService],
})
export class UsersModule {}
