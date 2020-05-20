import { Component, OnInit } from '@angular/core';
import { DemandeOuverture } from 'src/app/models/demande-ouverture';
import { DemandeService } from 'src/app/services/demande.service';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';
import { Agent } from 'src/app/models/agent';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})

export class ListeDemandesComponent implements OnInit {
  demandes: DemandeOuverture[];
  agents: Agent[];
  constructor(private demandeService: DemandeService,
    private agentService: AgentService,
    private router: Router) { }

  ngOnInit() {
    this.getAllDemandes();
    this.getAllAgent();
  }

  /**
   * On crée un objet contenant toute le resultat de la fonction findAll() 
   */
  getAllDemandes() {
    this.demandes = this.demandeService.findAll();
  }

  getAllAgent() {
    this.agents = this.agentService.findAll();
  }

  /* validationDemande(demandeOuverture: DemandeOuverture) {
     if (demandeOuverture) {
       this.router.navigate(['/demande/updateDemande/:id'])
     }
   }*/
}
