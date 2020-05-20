export class Utilisateur {
  idutilisateur: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  telephone: string;
  pseudo: string;
  mdp: string;

  constructor(idutilisateur, nom, prenom, email, adresse, telephone, pseudo, mdp) {
    this.idutilisateur = idutilisateur;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.adresse = adresse;
    this.telephone = telephone;
    this.pseudo = pseudo;
    this.mdp = mdp;
  }
}
