import { CarModelModule } from '@/car-model/car-model.module';
import { PrismaModule } from '@/database/prisma.module';
import { VehiclesModule } from '@/vehicles/vehicles.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaModule, VehiclesModule, CarModelModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
