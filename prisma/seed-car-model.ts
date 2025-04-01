import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const prisma = new PrismaClient();

interface Make {
  id: number;
  brand: string;
}

interface Model {
  id: number;
  fipe_code: string;
  model: string;
  years: string;
}

async function fetchCarMakes(): Promise<Make[]> {
  try {
    console.log('Buscando marcas de carros...');

    const res = await fetch(
      `${process.env.INVERTEXTO_API_URL}/brands/1?token=${process.env.INVERTEXTO_API_KEY}`,
    );

    if (!res.ok) throw new Error(`Erro ao buscar marcas: ${res.statusText}`);

    console.log('Marcas de carros obtidas com sucesso.');

    return res.json() as Promise<Make[]>;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchModelsForMake(makeId: number): Promise<Model[]> {
  try {
    console.log(`Buscando modelos para a marca ${makeId}...`);

    const res = await fetch(
      `${process.env.INVERTEXTO_API_URL}/models/${makeId}?token=${process.env.INVERTEXTO_API_KEY}`,
    );

    if (!res.ok) throw new Error(`Erro ao buscar modelos: ${res.statusText}`);

    console.log(`Modelos para a marca ${makeId} obtidos com sucesso.`);

    return res.json() as Promise<Model[]>;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function seed() {
  console.log('Iniciando o seed de modelos de carros...');

  const makes = await fetchCarMakes();

  for (const make of makes) {
    const models = await fetchModelsForMake(make.id);

    for (const model of models) {
      try {
        await prisma.carModel.upsert({
          where: {
            make_model_year: {
              make: make.brand,
              model: model.model,
              year: model.years,
            },
          },
          update: {},
          create: {
            make: make.brand,
            model: model.model,
            year: model.years,
          },
        });
      } catch (error) {
        console.error(`Erro ao inserir ${make.brand} ${model.model}:`, error);
      }
    }
  }

  console.log('Seed de modelos de carros concluído.');

  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
