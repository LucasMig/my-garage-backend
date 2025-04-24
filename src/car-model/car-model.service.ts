import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarModelService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const models = this.prisma.carModel.findMany();

    return (await models).reduce(
      (acc, model) => {
        const { id, make, model: carModel, year } = model;

        const existingMake = acc.find((m) => m.make === make);
        if (existingMake) {
          existingMake.models.push({ id, model: carModel, year });
        } else {
          acc.push({
            make,
            models: [{ id, model: carModel, year }],
          });
        }
        return acc;
      },
      [] as {
        make: string;
        models: { id: number; model: string; year: string }[];
      }[],
    );
  }
}
