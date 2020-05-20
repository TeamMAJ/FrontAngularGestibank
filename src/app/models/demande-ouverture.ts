import { ClientPotentiel } from './client-potentiel';
import { Admin } from './admin';

export class DemandeOuverture {
  iddemandeOuverture: number;
  dateDemande: Date;
  valide: number;
  agentMatricule: number;
  clientpotentiel: ClientPotentiel;
  admin: Admin;

}

