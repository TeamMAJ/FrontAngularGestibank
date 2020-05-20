import { AdminComponent } from './../admin/admin/admin.component';
import { ClientPotentiel } from './client-potentiel';
import { Admin } from './admin';

export class DemandeOuverture {
  iddemandeOuverture: number;
  dateDemande: Date;
  valide: number;
  clientpotentiel: ClientPotentiel = new ClientPotentiel();
  admin: Admin = new Admin();
}

