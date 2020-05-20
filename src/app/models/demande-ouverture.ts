import { ClientPotentiel } from './client-potentiel';

export class DemandeOuverture {
  iddemandeOuverture: number;
  dateDemande: Date;
  valide: number;
  clientPotentiel: ClientPotentiel = new ClientPotentiel();
}
