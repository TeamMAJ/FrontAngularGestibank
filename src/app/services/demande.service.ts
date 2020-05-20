import { DemandeOuverture } from '../models/demande-ouverture';
import { DEMANDES } from '../data/demandesData';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
 * Création d'une class gérant toute les actions concernant les demandes
 */
export class DemandeService {
    constructor() { }

    /**
     * On veux récupérer toute les demandes effectuer
     */
    findAll(): DemandeOuverture[] {
        return DEMANDES;
    }

    /**
     * Création d'une fonction pour permettre l'enregistrement d'une demande
     * @param demandeouverture 
     */
    saveDemande(demandeouverture: DemandeOuverture) {
        if (demandeouverture.iddemandeOuverture == null) {
            demandeouverture.iddemandeOuverture = DEMANDES.length + 1;
            DEMANDES.push(demandeouverture);
        }
    }

    updateDemande(demandeouverture: DemandeOuverture) {
        let olddemande = this.findDemandeById(demandeouverture.iddemandeOuverture);
        let idx;
        idx = DEMANDES.indexOf(olddemande);
        if (idx >= 0) {
            DEMANDES.splice(idx, 1, demandeouverture);
        }
    }

    findDemandeById(iddemandeOuverture: number): DemandeOuverture {
        let actuelDemande: DemandeOuverture;
        for (let i = 0; i < DEMANDES.length; i++) {
            if (actuelDemande.iddemandeOuverture = iddemandeOuverture) {
                return actuelDemande;
            }
        }
        return undefined;
    }
}
