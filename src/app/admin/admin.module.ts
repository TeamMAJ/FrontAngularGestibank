import { DetailAgentComponent } from './detail-agents/detail-agent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ListeDemandesComponent } from './liste-demandes/liste-demandes.component';
import { Routes, RouterModule } from '@angular/router';
import { ListeAgentsComponent } from './liste-agents/liste-agents.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'detail-agent', component: DetailAgentComponent },
      { path: 'liste-demandes', component: ListeDemandesComponent },
      { path: 'liste-agents', component: ListeAgentsComponent },
      { path: 'agent/edit/:id', component: DetailAgentComponent},
      { path: '',   redirectTo: 'admin', pathMatch: 'full' }
    ],
  }
];


@NgModule({
  declarations: [AdminComponent, DetailAgentComponent, ListeAgentsComponent, ListeDemandesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes),

  ]
})
export class AdminModule { }
