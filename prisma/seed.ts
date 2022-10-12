import prisma from "../src/config/db.js";

async function main() {
  const company = await prisma.companies.create({
    data: { name: "Freios Supremos" },
  });
  const unit1 = await prisma.units.create({
    data: {
      name: "Unit 1",
      companyId: company.id,
    },
  });
  const unit2 = await prisma.units.create({
    data: {
      name: "Unit 2",
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
        name: "Band Saw",
        image:
          "https://s.alicdn.com/@sc04/kf/H82ad298116bf4a8ca00c019f5ecc913aK.jpg_960x960.jpg",
        description: "Band Saw Machine Horizontal",
        model: "BS-1018B",
        owner: "Borui CNC Ltd.",
        status: "Running",
        healthLevel: 100,
        unitId: unit1.id,
      },
      {
        name: "Lathe Machine",
        image:
          "https://s.alicdn.com/@sc04/kf/Hbac2857a42f8455590c8fb06f1653c2fy.jpg_960x960.jpg",
        description: "Manual Chinese Metal Mill Lathe",
        model: "G1340",
        owner: "Borui CNC Ltd.",
        status: "Alerting",
        healthLevel: 50,
        unitId: unit2.id,
      },
      {
        name: "Milling Machine",
        image:
          "https://s.alicdn.com/@sc04/kf/H06262d98c3f0497db6c27f26e4ee4242M.jpg_960x960.jpg",
        description: "Manual Metal Milling Machine",
        model: "X6336cw",
        owner: "Borui CNC Ltd.",
        status: "Stopped",
        healthLevel: 10,
        unitId: unit2.id,
      },
      {
        name: "Gear Cutting",
        image:
          "https://s.alicdn.com/@sc04/kf/H80d7fdd1dde5498bb30ccf9c4f8bc82ah.jpg_960x960.jpg",
        description: "Hydraulic Gear Cutting Semi-automatic",
        model: "Y3180h",
        owner: "Borui CNC Ltd.",
        status: "Running",
        healthLevel: 80,
        unitId: unit2.id,
      },
      {
        name: "Hydraulic Press",
        image:
          "https://s.alicdn.com/@sc04/kf/HTB1v4lwXOYrK1Rjy0Fdq6ACvVXai.jpg_960x960.jpg",
        description: "Mechanical hydraulic press with fixed table",
        model: "Je21",
        owner: "Hightech",
        status: "Alerting",
        healthLevel: 58,
        unitId: unit2.id,
      },
      {
        name: "Shearing Machine",
        image:
          "https://abmaq.com.br/wp/wp-content/uploads/2021/10/metaleira.jpg",
        description: "Shearing machine Semi-automatic",
        model: "Q35br-250",
        owner: "Borui CNC Ltd.",
        status: "Stopped",
        healthLevel: 10,
        unitId: unit1.id,
      },
      {
        name: "Band Saw",
        image:
          "https://img.lojadomecanico.com.br/IMAGENS/21/224/85825/Serra-de-Fita-Horizontal-1CV-Bivolt-ferrari-sfh-121.JPG",
        description: " Cutting Band Saw Horizontal",
        model: "BS-712n",
        owner: "Borui CNC Ltd.",
        status: "Running",
        healthLevel: 90,
        unitId: unit2.id,
      },
      {
        name: "Lathe Machine",
        image:
          "https://s.alicdn.com/@sc04/kf/H38d3c6b2137a4255a12209bf76d6f504W.jpg_960x960.jpg",
        description: "Automatic Chinese Lathe Machine",
        model: "Ck6150",
        owner: "Borui CNC Ltd.",
        status: "Alerting",
        healthLevel: 40,
        unitId: unit1.id,
      },
      {
        name: "Milling Machine",
        image:
          "https://s.alicdn.com/@sc04/kf/HTB1xDeWbhtnkeRjSZSgq6xAuXXal.jpg_960x960.jpg",
        description: "Manual Milling Machine Horizontal",
        model: "Xk7124",
        owner: "Borui CNC Ltd.",
        status: "Stopped",
        healthLevel: 5,
        unitId: unit1.id,
      },
      {
        name: "Hydraulic Press",
        image:
          "https://s.alicdn.com/@sc04/kf/H79a27a7a94284e88ad92b6a0e8657139j.jpg_960x960.jpg",
        description: "Four-Column Hydraulic Press",
        model: "Yq32-200",
        owner: "Borui CNC Ltd.",
        status: "Running",
        healthLevel: 95,
        unitId: unit2.id,
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
