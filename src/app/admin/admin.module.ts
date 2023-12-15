import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AjouterDepotComponent } from './Depot/ajouter-depot/ajouter-depot.component';
import { DetailDepotComponent } from './Depot/detail-depot/detail-depot.component';
import { ListDepotsComponent } from './Depot/list-depots/list-depots.component';
import { MofifierDepotComponent } from './Depot/mofifier-depot/mofifier-depot.component';
import { OneDepotComponent } from './Depot/one-depot/one-depot.component';
import { AjouterExpediteurComponent } from './Expediteur/ajouter-expediteur/ajouter-expediteur.component';
import { ListExpediteursComponent } from './Expediteur/list-expediteurs/list-expediteurs.component';
import { OneExpediteurComponent } from './Expediteur/one-expediteur/one-expediteur.component';
import { AjouterLivreurComponent } from './Livreurs/ajouter-livreur/ajouter-livreur.component';
import { DashboarAdminComponent } from './dashboar-admin/dashboar-admin.component';
import { FormsModule } from '@angular/forms';
import { GestionLivraisonServiceService } from '../service/gestion-livraison-service.service';
import { NavComponent } from './template/nav/nav.component';
import { SectionComponent } from './template/section/section.component';
import { FooterComponent } from './template/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailExpediteurComponent } from './Expediteur/detail-expediteur/detail-expediteur.component';
import { ModifierExpediteurComponent } from './Expediteur/modifier-expediteur/modifier-expediteur.component';
import { AddEtatComponent } from './colis/add-etat/add-etat.component';
import { AllComponent } from './colis/all/all.component';

const adminroutes: Routes = [
  {
    path:'dashboard',
    component:DashboarAdminComponent
  },{
    path:'expediteurs',
    component:ListExpediteursComponent

  },
  {
    path:'expediteurs/detail/:id',
    component:DetailExpediteurComponent
    
  },{
    path:'expediteurs/add',
    component:AjouterExpediteurComponent
    
  },{
    path:'expediteurs/edit/:id',
    component:ModifierExpediteurComponent
    
  },
  {
    path:'colis/add_etat',
    component:AddEtatComponent
    
  },
  
                  
    
    ];

@NgModule({
  declarations: [
    AdminComponentComponent,
    OneExpediteurComponent,
    ListExpediteursComponent,
    DashboarAdminComponent,
    AjouterDepotComponent,
    MofifierDepotComponent,
    ListDepotsComponent,
    DetailDepotComponent,
    OneDepotComponent,
    AjouterExpediteurComponent,
    AjouterLivreurComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    ModifierExpediteurComponent,
    AddEtatComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminroutes),

    
  ],
  providers:[
    GestionLivraisonServiceService,DatePipe
  ]
})
export class AdminModule { }
