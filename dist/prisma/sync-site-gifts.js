"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../src/generated/prisma/client");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL não configurada no .env");
}
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prisma = new client_1.PrismaClient({ adapter });
const gifts = [
    { title: "Viagem dos sonhos", description: "Uma ajuda para transformar planos em uma experiência única e muito especial.", type: client_1.GiftType.MONEY, suggestedAmount: 200, sortOrder: 1 },
    { title: "Presente livre", description: "Escolha o valor que desejar. Toda contribuição será recebida com carinho e gratidão.", type: client_1.GiftType.MONEY, suggestedAmount: null, sortOrder: 2 },
    { title: "Maquiagem", description: "Itens de maquiagem para criar produções especiais e realçar ainda mais a beleza.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 3 },
    { title: "Produtos de cabelo", description: "Produtos para cuidar, hidratar e finalizar os cabelos no dia a dia.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 4 },
    { title: "Acessórios", description: "Acessórios delicados e modernos para complementar diferentes looks.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 5 },
    { title: "Produtos de pele", description: "Produtos para cuidados com a pele e uma rotina de beleza completa.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 6 },
    { title: "Bota", description: "Uma opção versátil e estilosa para compor looks em diferentes ocasiões.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 7 },
    { title: "Tênis", description: "Um modelo confortável e moderno para usar no dia a dia.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 8 },
    { title: "Pijama", description: "Um pijama confortável e bonito para momentos de descanso.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 9 },
    { title: "Perfumes", description: "Fragrâncias delicadas e marcantes para diferentes momentos.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 10 },
    { title: "Joias", description: "Peças delicadas e especiais para guardar como lembrança.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 11 },
    { title: "Bolsas", description: "Bolsas modernas e versáteis para combinar com diferentes estilos.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 12 },
    { title: "Rasteirinha", description: "Uma opção leve, confortável e elegante para os dias mais quentes.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 13 },
    { title: "Moletom", description: "Uma peça confortável e estilosa para os dias mais frios.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 14 },
    { title: "Saia", description: "Uma peça moderna e versátil para criar diferentes combinações.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 15 },
    { title: "Shorts", description: "Uma opção confortável e prática para looks casuais.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 16 },
    { title: "Calça", description: "Uma peça versátil para usar em diferentes ocasiões.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 17 },
    { title: "Blusinha", description: "Blusinhas modernas e delicadas para completar o guarda-roupa.", type: client_1.GiftType.PHYSICAL, suggestedAmount: null, sortOrder: 18 },
];
async function main() {
    for (const gift of gifts) {
        const existing = await prisma.gift.findFirst({
            where: { title: gift.title },
            select: { id: true },
        });
        if (existing) {
            await prisma.gift.update({
                where: { id: existing.id },
                data: {
                    ...gift,
                    active: true,
                    externalUrl: null,
                },
            });
        }
        else {
            await prisma.gift.create({
                data: {
                    ...gift,
                    active: true,
                    externalUrl: null,
                },
            });
        }
    }
    console.log("Lista de presentes sincronizada com o convite público.");
}
main()
    .catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=sync-site-gifts.js.map