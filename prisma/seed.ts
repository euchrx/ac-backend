import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';

import {
  GiftType,
  PrismaClient,
} from '../src/generated/prisma/client';

async function main(): Promise<void> {
  const connectionString = process.env.DATABASE_URL;
  const adminName =
    process.env.ADMIN_NAME?.trim() || 'Família Ana Clara';
  const adminEmail =
    process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!connectionString) {
    throw new Error('DATABASE_URL não foi configurada.');
  }

  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL não foi configurado.');
  }

  if (!adminPassword || adminPassword.length < 6) {
    throw new Error(
      'ADMIN_PASSWORD deve ter pelo menos 6 caracteres.',
    );
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  const prisma = new PrismaClient({
    adapter,
  });

  try {
    const passwordHash = await bcrypt.hash(
      adminPassword,
      12,
    );

    await prisma.admin.upsert({
      where: {
        email: adminEmail,
      },
      update: {
        name: adminName,
        passwordHash,
        active: true,
      },
      create: {
        name: adminName,
        email: adminEmail,
        passwordHash,
      },
    });

    const gifts = [
      {
        title: 'Viagem dos sonhos',
        description:
          'Uma ajuda para transformar planos em uma experiência única e muito especial.',
        type: GiftType.MONEY,
        suggestedAmount: 200,
        externalUrl: null,
        sortOrder: 1,
      },
      {
        title: 'Presente livre',
        description:
          'Escolha o valor que desejar. Toda contribuição será recebida com carinho e gratidão.',
        type: GiftType.MONEY,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 2,
      },
      {
        title: 'Maquiagem',
        description:
          'Itens de maquiagem para criar produções especiais e realçar ainda mais a beleza.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 3,
      },
      {
        title: 'Produtos de cabelo',
        description:
          'Produtos para cuidar, hidratar e finalizar os cabelos no dia a dia.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 4,
      },
      {
        title: 'Acessórios',
        description:
          'Acessórios delicados e modernos para complementar diferentes looks.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 5,
      },
      {
        title: 'Produtos de pele',
        description:
          'Produtos para cuidados com a pele e uma rotina de beleza completa.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 6,
      },
      {
        title: 'Bota',
        description:
          'Uma opção versátil e estilosa para compor looks em diferentes ocasiões.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 7,
      },
      {
        title: 'Tênis',
        description:
          'Um modelo confortável e moderno para usar no dia a dia.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 8,
      },
      {
        title: 'Pijama',
        description:
          'Um pijama confortável e bonito para momentos de descanso.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 9,
      },
      {
        title: 'Perfumes',
        description:
          'Fragrâncias delicadas e marcantes para diferentes momentos.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 10,
      },
      {
        title: 'Joias',
        description:
          'Peças delicadas e especiais para guardar como lembrança.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 11,
      },
      {
        title: 'Bolsas',
        description:
          'Bolsas modernas e versáteis para combinar com diferentes estilos.',
        type: GiftType.PHYSICAL,
        suggestedAmount: null,
        externalUrl: null,
        sortOrder: 12,
      },
    ];

    for (const gift of gifts) {
      const existingGift = await prisma.gift.findFirst({
        where: {
          title: gift.title,
        },
        select: {
          id: true,
        },
      });

      if (existingGift) {
        await prisma.gift.update({
          where: {
            id: existingGift.id,
          },
          data: {
            ...gift,
            active: true,
          },
        });
      } else {
        await prisma.gift.create({
          data: {
            ...gift,
            active: true,
          },
        });
      }
    }

    console.log(
      'Administrador e presentes criados ou atualizados.',
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
