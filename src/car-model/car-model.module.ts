import { PrismaModule } from '@/database/prisma.module';
import { Module } from '@nestjs/common';
import { CarModelController } from './car-model.controller';
import { CarModelService } from './car-model.service';

@Module({
  imports: [PrismaModule],
  providers: [CarModelService],
  controllers: [CarModelController],
  exports: [CarModelService],
})
export class CarModelModule {}
