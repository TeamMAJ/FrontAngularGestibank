import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AjoutAgentComponent } from './ajout-agent/ajout-agent.component';
import { ListeAgentsComponent } from './liste-agents/liste-agents.component';
import { ListeDemandesComponent } from './liste-demandes/liste-demandes.component';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'ajout-agent', component: AjoutAgentComponent },
      { path: 'liste-demandes', component: ListeDemandesComponent },
      { path: 'liste-agents', component: ListeAgentsComponent },
      { path: '',   redirectTo: 'admin', pathMatch: 'full' }
    ],
  }
];


@NgModule({
  declarations: [AdminComponent, AjoutAgentComponent, ListeAgentsComponent, ListeDemandesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),

  ]
})
export class AdminModule { }
