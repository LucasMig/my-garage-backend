import { PrismaService } from '@/database/prisma.service';
import { Module } from '@nestjs/common';
import { CarModelController } from './car-model.controller';
import { CarModelService } from './car-model.service';

@Module({
  providers: [CarModelService, PrismaService],
  controllers: [CarModelController],
})
export class CarModelModule {}
