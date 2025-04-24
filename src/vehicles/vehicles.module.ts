import { CarModelModule } from '@/car-model/car-model.module';
import { PrismaModule } from '@/database/prisma.module';
import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [PrismaModule, CarModelModule],
  providers: [VehiclesService],
  exports: [VehiclesService],
})
export class VehiclesModule {}
