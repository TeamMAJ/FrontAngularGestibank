import { Utilisateur } from './utilisateur';

export class Admin {
  idadmin: number;
  matricule: string;
  utilisateur: Utilisateur;

  constructor(idadmin: number, matricule: string, utilisateur: Utilisateur) {
    this.idadmin = idadmin;
    this.matricule = matricule;
    this.utilisateur = utilisateur;
  }

}
