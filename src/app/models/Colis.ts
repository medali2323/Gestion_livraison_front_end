import { Expediteur } from "./Expediteur";

export class Colis {
  code_colis: number;
  code_barre: string;
  nom_clt: string;
  gouvernement: string;
  ville: string;
  adresse_clt: string;
  tel_clt: string;
  tel_clt2: string | null;
  des: string;
  prix: number;
  nb_article: number;
  date: string; 
  commentaire: string | null;
  mode_paiement: string;
  expediteur: Expediteur | null;

  constructor(data: any) {
    this.code_colis = data.code_colis;
    this.code_barre = data.code_barre;
    this.nom_clt = data.nom_clt;
    this.gouvernement = data.gouvernement;
    this.ville = data.ville;
    this.adresse_clt = data.adresse_clt;
    this.tel_clt = data.tel_clt;
    this.tel_clt2 = data.tel_clt2;
    this.des = data.des;
    this.prix = data.prix;
    this.nb_article = data.nb_article;
    this.date = data.date;
    this.commentaire = data.commentaire;
    this.mode_paiement = data.mode_paiement;
    this.expediteur = data.expediteur;
  }
}
