import { Utilisateur } from './utilisateur';

export class Admin {
  idadmin: number;
  matricule: string;
  utilisateur: Utilisateur = new Utilisateur();
}
