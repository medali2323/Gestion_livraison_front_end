import { Component } from '@angular/core';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';
import { NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddEtatComponent {
  ListColis: any[] = [];
  Listetat: any[] = [];
  selectedEtat: number | undefined;
  etatcolis: any;

  constructor(private ExpService: GestionLivraisonServiceService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.ExpService.all_with_etat().subscribe(
      (data: any) => {
        this.ListColis = data.result;
        console.log(this.ListColis);
        // Utilisation de la fonction fléchée pour maintenir le contexte 'this'
        this.ListColis.forEach(value => {
          const v = value.etat_colis.code_etat_colis;
          this.ExpService.getById("etatcolis", v).subscribe(
            (data: any) => {
               console.log(data);
               value.etat_colis.code_etat_colis=data.libelle_etat
            },
            (error: any) => {
              console.error('Error fetching ListColis:', error);
            }
          );
        });
      },
      (error: any) => {
        console.error('Error fetching ListColis:', error);
      }
    );
    this.alletat();
  }

  alletat() {
    this.ExpService.getAll("etats").subscribe(
      (data: any) => {
        this.Listetat = data;
        console.log(this.Listetat);
      },
      (error: any) => {
        console.error('Error fetching ListColis:', error);
      }
    );
  }

  save(f: NgForm) {
    if (f.valid && this.atLeastOneCheckboxSelected()) {
      const selectedRows = this.ListColis.filter(colis => colis.selected);

      selectedRows.forEach(row => {
        const Etatcolis = {
          code_etat: this.selectedEtat,
          code_colis: row.code_colis,
          date: this.formatDate(new Date()),
          code_livreur: null,
          commentaire: ''
        };

        console.log('Etatcolis:', Etatcolis);

        this.ExpService.create("etatcolis", Etatcolis).subscribe(
          (response: any) => {
            console.log('Données envoyées avec succès etat colis', response);
          },
          (error: any) => {
            console.error('Erreur lors de l\'envoi des données ETAT COLIS', error);
          }
        );
      });
    }
  }

  atLeastOneCheckboxSelected(): boolean {
    // Vérifiez si au moins une case à cocher est sélectionnée
    return this.ListColis && this.ListColis.some(colis => colis.selected);
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ssZ') || '';
  }

  getetat(id: number) {
    this.ExpService.getById("etatcolis", id).subscribe(
      (data: any) => {
        this.etatcolis = data;
      },
      (error: any) => {
        console.error('Error fetching ListColis:', error);
      }
    );
  }
}
