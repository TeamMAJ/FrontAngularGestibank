import { Utilisateur } from './utilisateur';
import { Admin } from './admin';

export class Agent {
  idagent: number;
  matricule: string;
  utilisateur: Utilisateur;
  admin: Admin;

  constructor(idagent: number, matricule: string, utilisateur: Utilisateur, admin: Admin) {
    this.idagent = idagent;
    this.matricule = matricule;
    this.utilisateur = utilisateur;
    this.admin = admin;
  }
}
