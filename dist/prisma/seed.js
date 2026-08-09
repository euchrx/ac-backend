"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const bcrypt = __importStar(require("bcrypt"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../src/generated/prisma/client");
async function main() {
    const connectionString = process.env.DATABASE_URL;
    const adminName = process.env.ADMIN_NAME?.trim() || 'Família Ana Clara';
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!connectionString) {
        throw new Error('DATABASE_URL não foi configurada.');
    }
    if (!adminEmail) {
        throw new Error('ADMIN_EMAIL não foi configurado.');
    }
    if (!adminPassword || adminPassword.length < 6) {
        throw new Error('ADMIN_PASSWORD deve ter pelo menos 6 caracteres.');
    }
    const adapter = new adapter_pg_1.PrismaPg({
        connectionString,
    });
    const prisma = new client_1.PrismaClient({
        adapter,
    });
    try {
        const passwordHash = await bcrypt.hash(adminPassword, 12);
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
                description: 'Uma ajuda para transformar planos em uma experiência única e muito especial.',
                type: client_1.GiftType.MONEY,
                suggestedAmount: 200,
                externalUrl: null,
                sortOrder: 1,
            },
            {
                title: 'Presente livre',
                description: 'Escolha o valor que desejar. Toda contribuição será recebida com carinho e gratidão.',
                type: client_1.GiftType.MONEY,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 2,
            },
            {
                title: 'Maquiagem',
                description: 'Itens de maquiagem para criar produções especiais e realçar ainda mais a beleza.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 3,
            },
            {
                title: 'Produtos de cabelo',
                description: 'Produtos para cuidar, hidratar e finalizar os cabelos no dia a dia.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 4,
            },
            {
                title: 'Acessórios',
                description: 'Acessórios delicados e modernos para complementar diferentes looks.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 5,
            },
            {
                title: 'Produtos de pele',
                description: 'Produtos para cuidados com a pele e uma rotina de beleza completa.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 6,
            },
            {
                title: 'Bota',
                description: 'Uma opção versátil e estilosa para compor looks em diferentes ocasiões.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 7,
            },
            {
                title: 'Tênis',
                description: 'Um modelo confortável e moderno para usar no dia a dia.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 8,
            },
            {
                title: 'Pijama',
                description: 'Um pijama confortável e bonito para momentos de descanso.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 9,
            },
            {
                title: 'Perfumes',
                description: 'Fragrâncias delicadas e marcantes para diferentes momentos.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 10,
            },
            {
                title: 'Joias',
                description: 'Peças delicadas e especiais para guardar como lembrança.',
                type: client_1.GiftType.PHYSICAL,
                suggestedAmount: null,
                externalUrl: null,
                sortOrder: 11,
            },
            {
                title: 'Bolsas',
                description: 'Bolsas modernas e versáteis para combinar com diferentes estilos.',
                type: client_1.GiftType.PHYSICAL,
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
            }
            else {
                await prisma.gift.create({
                    data: {
                        ...gift,
                        active: true,
                    },
                });
            }
        }
        console.log('Administrador e presentes criados ou atualizados.');
    }
    finally {
        await prisma.$disconnect();
    }
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map