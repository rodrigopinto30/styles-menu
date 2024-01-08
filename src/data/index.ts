import { Articulo } from "../type";

export const data : Articulo[] = [
    {
      "id": 1,
      "articulo": "Ventilador de pie",
      "seccion": "Electrónica",
      "precio": 49.99,
      "envioGratis": true,
      "descuento": 10
    },
    {
      "id": 2,
      "articulo": "Televisor LED de 40 pulgadas",
      "seccion": "Electrónica",
      "precio": 299.95,
      "envioGratis": false,
      "descuento": 0
    },
    {
      "id": 3,
      "articulo": "Pelota de fútbol Adidas",
      "seccion": "Deportes",
      "precio": 29.99,
      "envioGratis": true,
      "descuento": 15
    },
    {
      "id": 4,
      "articulo": "Aspiradora robot",
      "seccion": "Electrodomésticos",
      "precio": 199.99,
      "envioGratis": true,
      "descuento": 0
    },
    {
      "id": 5,
      "articulo": "Laptop HP",
      "seccion": "Electrónica",
      "precio": 699.99,
      "envioGratis": false,
      "descuento": 0
    },
    {
      "id": 6,
      "articulo": "Silla de oficina ergonómica",
      "seccion": "Muebles",
      "precio": 149.99,
      "envioGratis": true,
      "descuento": 25
    },
    {
      "id": 7,
      "articulo": "Zapatillas deportivas Nike",
      "seccion": "Deportes",
      "precio": 79.95,
      "envioGratis": false,
      "descuento": 0
    },
    {
      "id": 8,
      "articulo": "Set de utensilios de cocina",
      "seccion": "Hogar",
      "precio": 59.99,
      "envioGratis": true,
      "descuento": 0
    },
    {
      "id": 9,
      "articulo": "Bicicleta de montaña",
      "seccion": "Deportes",
      "precio": 349.99,
      "envioGratis": false,
      "descuento": 0
    },
    {
      "id": 10,
      "articulo": "Juego de mesa Monopoly",
      "seccion": "Juguetes",
      "precio": 39.99,
      "envioGratis": true,
      "descuento": 0
    }
];

export const fetchArticulo = (search: string): Promise<Articulo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = data.filter(item =>
        item.articulo.toLowerCase().includes(search.toLowerCase())
      );
      resolve(filteredData);
    }, 1000); 
  });
};

export const tabs :string[] = [
  "HOME",
  "PRODUCTS",
  "ABOUT US"
];