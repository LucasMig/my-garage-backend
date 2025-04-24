import { CarModelService } from '@/car-model/car-model.service';
import { PrismaService } from '@/database/prisma.service';
import { carModelInclude, formatVehicle } from '@/vehicles/vehicles.utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiclesService {
  constructor(
    private prisma: PrismaService,
    private carModelService: CarModelService,
  ) {}

  // CREATE
  // READ
  async findByUserId(userId: number) {
    const vehicles = await this.prisma.vehicle.findMany({
      where: {
        ownerId: userId,
      },
      include: {
        ...carModelInclude,
      },
    });

    return vehicles.map(formatVehicle);
  }

  async findByVehicleId(vehicleId: number) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: {
        id: vehicleId,
      },
      include: {
        ...carModelInclude,
      },
    });

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    return formatVehicle(vehicle);
  }

  // UPDATE
  // DELETE
}
