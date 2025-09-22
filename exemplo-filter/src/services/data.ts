export interface IDados {
  id: string
  banda: string
  album: string
  ano: number
  musicas: number
  
  user: {
    name: string
    disponivel: boolean
  }
  img: any
}
export const dados:IDados[] = [
  {
    id: "disco-1",
    banda: "ACDC",
    album: "Back in Black",
    ano: 1980,
    musicas: 10,
    user: {
      name: "Lázaro",
      disponivel: true
    },
    img: require("../assets/acdc.jpeg"),
  },
  {
    id: "disco-2",
    banda: "The Beatles",
    album: "Abbey Road",
    ano: 1969,
    musicas: 17,
    user: {
      name: "Lázaro",
      disponivel: false
    },
     img: require("../assets/acdc.jpeg"),
  },
  {
    id: "disco-3",
    banda: "Iron Maiden",
    album: "The Number of the Beast",
    ano: 1982,
    musicas: 8,
    user: {
      name: "Marcelo",
      disponivel: true
    },
     img: require("../assets/acdc.jpeg"),
  },
  {
    id: "disco-4",
    banda: "Michael Jackson",
    album: "Thriller",
    ano: 1982,
    musicas: 9,
    
    user: {
      name: "Lázaro",
      disponivel: true
    },
    img: require("../assets/acdc.jpeg"),
  },
  {
    id: "disco-5",
    banda: "Queen",
    album: "A Night at the Opera",
    ano: 1975,
    musicas: 12,
    user: {
      name: "Lázaro",
      disponivel: false
    },
     img: require("../assets/acdc.jpeg"),
  }
];