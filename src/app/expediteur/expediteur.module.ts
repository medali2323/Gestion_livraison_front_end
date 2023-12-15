import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcolisComponent } from './addcolis/addcolis.component';
import { AddechangeComponent } from './addechange/addechange.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { AudepotComponent } from './audepot/audepot.component';
import { DashbordExpediteurComponent } from './dashbord-expediteur/dashbord-expediteur.component';
import { DetailcolisComponent } from './detailcolis/detailcolis.component';
import { EnattenteComponent } from './enattente/enattente.component';
import { EncourComponent } from './encour/encour.component';
import { ImprimercolisComponent } from './imprimercolis/imprimercolis.component';
import { ImprimermanifesteComponent } from './imprimermanifeste/imprimermanifeste.component';
import { ImprimerttcolisComponent } from './imprimerttcolis/imprimerttcolis.component';
import { ListcolisComponent } from './listcolis/listcolis.component';
import { ListreclamationComponent } from './listreclamation/listreclamation.component';
import { LivreeComponent } from './livree/livree.component';
import { ModifiercolisComponent } from './modifiercolis/modifiercolis.component';
import { OnecolisComponent } from './onecolis/onecolis.component';
import { RecherchecolisComponent } from './recherchecolis/recherchecolis.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { SectionComponent } from './template/section/section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionLivraisonServiceService } from '../service/gestion-livraison-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { ListcolisselelonEtatComponent } from './listcolisselelon-etat/listcolisselelon-etat.component';
import { RtndepotComponent } from './rtndepot/rtndepot.component';
import { RtndefenitifComponent } from './rtndefenitif/rtndefenitif.component';
const expediteurroutes: Routes = [
{
    path:"dashboard",
    component:DashbordExpediteurComponent
  },{
  path:"recherche",
  component:RecherchecolisComponent
  },{
    path:"addcolis",
    component:AddcolisComponent
    },{
      path:"modifiercolis/:id",
      component:ModifiercolisComponent
      },{
       path:"imrimercolis/id",
      component:ImprimercolisComponent
        },{
          path:"imprimermanifeste",
          component:RecherchecolisComponent
          },{
            path:"addreclamation",
            component:AddreclamationComponent
            },{
              path:"reclamations",
              component:ListreclamationComponent
              },{
                path:"colis",
                component:ListcolisComponent
                },{
                  path:"colis/:id",
                  component:DetailcolisComponent
                  },{
                    path:"enattente",
                    component:EnattenteComponent
                    },
                    {
                      path:"audepot",
                      component:AudepotComponent
                      },
                      {
                        path:"rtndepot",
                        component:RtndepotComponent
                        },
                        {
                          path:"rtndefenitif",
                          component:RtndefenitifComponent
                          },
                        {
                          path:"livree",
                          component:LivreeComponent
                          },  {
                            path:"encours",
                            component:EncourComponent
                            },
                          
                {
                  path:"addechange",
                  component:AddechangeComponent
                  },
                
  
  ];


@NgModule({
  declarations: [
    DashbordExpediteurComponent,
    RecherchecolisComponent,
    AddcolisComponent,
    AddechangeComponent,
    ModifiercolisComponent,
    ImprimermanifesteComponent,
    ImprimercolisComponent,
    ImprimerttcolisComponent,
    AddreclamationComponent,
    ListreclamationComponent,
    ListcolisComponent,
    OnecolisComponent,
    AudepotComponent,
    EnattenteComponent,
    EncourComponent,
    LivreeComponent,
    NavComponent,
    FooterComponent,
    SectionComponent,
    DetailcolisComponent,
    ListcolisselelonEtatComponent,
    RtndepotComponent,
    RtndefenitifComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(expediteurroutes),
      
  ],
  providers:[
    GestionLivraisonServiceService
  ]
})
export class ExpediteurModule { }
