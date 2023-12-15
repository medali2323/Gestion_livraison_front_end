// expediteur.model.ts

export class Expediteur {
    code_expediteur: number;
    nom_expediteur: string;
    num_tel_expediteur: string;
    gouvernement: string;
    adresse: string;
    ville: string;
    code_tva: string;
    email: string;
    mode_paiement: string;
    frais_livraison: number;
    frais_retour: number;
    user: any; // Vous devrez définir la structure correcte pour la propriété user
  
    constructor(
      code_expediteur: number,
      nom_expediteur: string,
      num_tel_expediteur: string,
      gouvernement: string,
      adresse: string,
      ville: string,
      code_tva: string,
      email: string,
      mode_paiement: string,
      frais_livraison: number,
      frais_retour: number,
      user: any
    ) {
      this.code_expediteur = code_expediteur;
      this.nom_expediteur = nom_expediteur;
      this.num_tel_expediteur = num_tel_expediteur;
      this.gouvernement = gouvernement;
      this.adresse = adresse;
      this.ville = ville;
      this.code_tva = code_tva;
      this.email = email;
      this.mode_paiement = mode_paiement;
      this.frais_livraison = frais_livraison;
      this.frais_retour = frais_retour;
      this.user = user;
    }
  }
  