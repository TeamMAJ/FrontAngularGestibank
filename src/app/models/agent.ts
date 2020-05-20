import { Utilisateur } from './utilisateur';
import { Admin } from './admin';

export class Agent {
  idagent: number;
  matricule: string;
  utilisateur: Utilisateur = new Utilisateur();
  admin: Admin = new Admin();
}
