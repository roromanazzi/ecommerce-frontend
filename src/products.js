export const data = [
  {
    id: 12,
    name: "seawolf",
    season: "AW 2023",
    designer: "pepito perez",
    products: [
      {
        id: 1,
        title: "Remera Pedro",
        description: `Material: 100% algodón suave y duradero. 
        Estilo: Camiseta de manga corta con cuello redondo y corte clásico.
        Diseño: Pepito perez.
        Cuidado: Lavar a máquina en agua fría con colores similares. Secar en secadora a baja temperatura o dejar secar al aire libre para una vida útil más larga.
        `,
        price: 2300,
        sizes: [
          { id: 1, name: "small", value: 1, symbol: "S" },
          { id: 2, name: "medium", value: 2, symbol: "M" },
          { id: 3, name: "large", value: 3, symbol: "L" },
        ],
        colors: [
          { id: 1, name: "Black", color: "#000" },
          { id: 2, name: "White", color: "#FFFFFF" },
        ],
      },
    ],
  },
];
