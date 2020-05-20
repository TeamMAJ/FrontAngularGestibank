import { Component, OnInit } from '@angular/core';
import { DemandeOuverture } from 'src/app/models/demande-ouverture';
import { DemandeService } from 'src/app/services/demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})

export class ListeDemandesComponent implements OnInit {
  demandes: DemandeOuverture[];
  constructor(private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit() {
    this.getAllDemandes();
  }

  /**
   * On crée un objet contenant toute le resultat de la fonction findAll() 
   */
  getAllDemandes() {
    this.demandes = this.demandeService.findAll();
  }

  redirectNewDemandePage() {
    this.router.navigate(['/admin/liste-demandes']);
  }

  validationDemande(demandeOuverture: DemandeOuverture) {
    if (demandeOuverture) {
      this.router.navigate(['/demande/updateDemande/:id'])
    }
  }
}
