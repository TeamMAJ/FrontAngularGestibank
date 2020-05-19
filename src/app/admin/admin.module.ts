import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AjoutAgentComponent } from './ajout-agent/ajout-agent.component';
import { ListeAgentsComponent } from './liste-agents/liste-agents.component';
import { ListeDemandesComponent } from './liste-demandes/liste-demandes.component';



@NgModule({
  declarations: [AdminComponent, AjoutAgentComponent, ListeAgentsComponent, ListeDemandesComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
