import prisma from "../src/config/db.js";

async function main() {
  const company = await prisma.companies.create({
    data: { name: "Freios Supremos" },
  });
  const unit1 = await prisma.units.create({
    data: {
      name: "Unidade 1",
      companyId: company.id,
    },
  });
  const unit2 = await prisma.units.create({
    data: {
      name: "Unidade 2",
      companyId: company.id,
    },
  });
  await prisma.users.createMany({
    data: [
      {
        name: "Emerson",
        password:
          "$2b$10$dlDETryrvw4qQZ9P1KOywu45kez6qhj7j2PuGSeyrBl8W3flbi0B.",
        isAdmin: true,
        companyId: company.id,
      },
      {
        name: "Roberta",
        password:
          "$2b$10$dlDETryrvw4qQZ9P1KOywu45kez6qhj7j2PuGSeyrBl8W3flbi0B.",
        isAdmin: true,
        companyId: company.id,
      },
    ],
  });
  await prisma.assets.createMany({
    data: [
      {
        name: "Máquina 1",
        image: "https://svgsilh.com/svg/312334.svg",
        description: "Descrição máquina 1",
        model: "Modelo da máquina 1",
        owner: "Proprietário da máquina 1",
        status: "Running",
        healthLevel: 1,
        unitId: unit1.id,
      },
      {
        name: "Máquina 2",
        image: "https://svgsilh.com/svg/312334.svg",
        description: "Descrição máquina 2",
        model: "Modelo da máquina 2",
        owner: "Proprietário da máquina 2",
        status: "Alerting",
        healthLevel: 0.6,
        unitId: unit2.id,
      },
      {
        name: "Máquina 3",
        image: "https://svgsilh.com/svg/312334.svg",
        description: "Descrição máquina 3",
        model: "Modelo da máquina 3",
        owner: "Proprietário da máquina 3",
        status: "Stopped",
        healthLevel: 0,
        unitId: unit1.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
