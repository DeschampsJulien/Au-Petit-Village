import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FigurinesService {

  figurines = [
    { id:1,
      imageUrl: "assets/figurines/figurine-assurancetourix.jpg",
      name: "Assurancetourix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.",
      size: "Taille de la figurine 7 cm", 
      price: 15.5
    },
    { id:2,
      imageUrl: "assets/figurines/figurine-asterix.jpg",
      name: "Astérix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 6 cm",
      price: 20
    },
    { id:3,
      imageUrl: "assets/figurines/figurine-falbala.jpg",
      name: "Falbala", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 7 cm",
      price: 18
    },
    { id:4,
      imageUrl: "assets/figurines/figurine-jules-cesar.jpg",
      name: "Jules-César", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 7 cm",
      price: 15.8
    },
    { id:5,
      imageUrl: "assets/figurines/figurine-obelix.jpg",
      name: "Obélix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 8 cm",
      price: 17
    },
    { id:6,
      imageUrl: "assets/figurines/figurine-ordrafabetix.jpg",
      name: "Ordrafabétix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.",
      size: "Taille de la figurine 6 cm",
      price: 15
    },
    { id:7,
      imageUrl: "assets/figurines/figurine-panoramix.jpg",
      name: "Panoramix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 7 cm",
      price: 16
    },
    { id:8,
      imageUrl: "assets/figurines/figurine-idefix.jpg",
      name: "Idéfix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 4 cm",
      price: 12
    },
    { id:9,
      imageUrl: "assets/figurines/figurine-abraracourcix.jpg",
      name: "Abraracourcix", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 6 cm",
      price: 17
    },
    { id:10,
      imageUrl: "assets/figurines/figurine-bonemine.jpg",
      name: "Bonemine", 
      infos: "Figurine en terre cuite peinte à la main de fabrication Gauloise.", 
      size: "Taille de la figurine 5 cm",
      price: 16
    },
  ]

  getFigurines(){
    return this.figurines;
  }

  constructor() { }
}
