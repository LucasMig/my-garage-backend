import { Controller, Get } from '@nestjs/common';
import { CarModelService } from './car-model.service';

@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Get()
  async getAllCarModels() {
    return await this.carModelService.getAll();
  }
}
