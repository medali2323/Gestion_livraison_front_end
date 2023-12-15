import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expediteur } from 'src/app/models/Expediteur';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-expediteurs',
  templateUrl: './list-expediteurs.component.html',
  styleUrls: ['./list-expediteurs.component.css']
})
export class ListExpediteursComponent implements OnInit {
  [x: string]: any;
  ListExpediteur: any[] = [];

  constructor(private ExpService: GestionLivraisonServiceService,private router: Router) {}

  ngOnInit(): void {
  this.getall();
  }
  getall(){
    this.ExpService.getAll("expediteurs").subscribe(
      (data: any) => {
        this.ListExpediteur = data;
      },
      (error: any) => {
        console.error('Error fetching ListExpediteur:', error);
      }
    );
  }
  modifierr(exp: Expediteur) {
    this.router.navigate(['admin/expediteurs/edit/', exp.code_expediteur]);

  }
  spp(exp: Expediteur) {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'cet expediteur va etre supprumer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.value) {
        // Appel de la fonction de suppression ici
        this.ExpService.delete("expediteur", exp.code_expediteur).subscribe(
          () => {
            // Succès de la suppression
            Swal.fire(
              'Supprimé !',
              'Votre expediteur a été supprimé.',
              'success'
            );
            this.getall();
          },
          (error) => {
            // Gestion des erreurs
            Swal.fire(
              'Erreur',
              'Une erreur est survenue lors de la suppression du expediteur.',
              'error'
            );
            console.error(error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          '',
          'error'
        );
      }
    });
  }
}