export class Etat {
    code_etat: number;
    libelle: string;
  
    constructor(data: any) {
      this.code_etat = data.code_etat;
      this.libelle = data.libelle;
    }
  }
  