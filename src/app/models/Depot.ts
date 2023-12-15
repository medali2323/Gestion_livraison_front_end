
export class Depot {
  id_depot: number;
  ville: string;
  adresse: string;
  num_tel: string;

  constructor(data: any) {
    this.id_depot = data.id_depot;
    this.ville = data.ville;
    this.adresse = data.adresse;
    this.num_tel = data.num_tel;
  }
}
