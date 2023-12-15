import { Component } from '@angular/core';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listcolis',
  templateUrl: './listcolis.component.html',
  styleUrls: ['./listcolis.component.css']
})
export class ListcolisComponent {
  ListColis: any[] = [];
  codeexp:number=1

  constructor(private ExpService: GestionLivraisonServiceService) {}

  ngOnInit(): void {
  this.getall();
  }
  getall(){
    this.ExpService.getcolisforexpparetat(this.codeexp,1).subscribe(
      (data: any) => {
        this.ListColis = data.result;
        console.log(this.ListColis);
        
      },
      (error: any) => {
        console.error('Error fetching ListColis:', error);
      }
    );
  }
  supprimerColis(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'cet colis va etre supprumer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.value) {
        // Appel de la fonction de suppression ici
        this.ExpService.delete("colis", id).subscribe(
          () => {
            // Succès de la suppression
            Swal.fire(
              'Supprimé !',
              'Votre colis a été supprimé.',
              'success'
            );
            this.getall();
          },
          (error) => {
            // Gestion des erreurs
            Swal.fire(
              'Erreur',
              'Une erreur est survenue lors de la suppression du colis.',
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