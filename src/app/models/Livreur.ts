import { Depot } from "./Depot";

export class Livreur {
  code_livreur: number;
  nom_livreur: string;
  num_tel: string;
  frais_livraison: string; 
  depot: Depot | null;

  constructor(data: any) {
    this.code_livreur = data.code_livreur;
    this.nom_livreur = data.nom_livreur;
    this.num_tel = data.num_tel;
    this.frais_livraison = data.frais_livraison;
    this.depot = data.depot ? new Depot(data.depot) : null;
  }
}
