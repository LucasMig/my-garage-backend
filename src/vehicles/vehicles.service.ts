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
  async addToUser(userId: number, carModelId: number, plate: string) {
    const carModel = await this.carModelService.findById(carModelId);
    if (!carModel) {
      throw new Error('Car model not found');
    }

    const existingVehicle = await this.prisma.vehicle.findFirst({
      where: {
        ownerId: userId,
        carModelId,
        plate,
      },
    });
    if (existingVehicle) {
      throw new Error('Vehicle already exists');
    }

    const vehicle = await this.prisma.vehicle.create({
      data: {
        ownerId: userId,
        carModelId,
        plate,
      },
      include: {
        ...carModelInclude,
      },
    });

    return formatVehicle(vehicle);
  }

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
  async removeFromUser(userId: number, vehicleId: number) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: {
        id: vehicleId,
      },
    });

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    if (vehicle.ownerId !== userId) {
      throw new Error('Vehicle does not belong to user');
    }

    await this.prisma.vehicle.update({
      where: {
        id: vehicleId,
      },
      data: {
        ownerId: null,
      },
    });

    return vehicle;
  }
}
