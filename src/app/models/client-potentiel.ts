export class ClientPotentiel {
  idclientpotentiel: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  telephone: string;
  revenuMensuel: number;
  piecesJustif: string;

  // tslint:disable-next-line: max-line-length
  constructor(idclientpotentiel: number, nom: string, prenom: string, email: string, adresse: string, telephone: string, revenuMensuel: number, piecesJustif: string) {
  this.idclientpotentiel = idclientpotentiel;
  this.nom = nom;
  this.prenom = prenom;
  this.email = email;
  this.adresse = adresse;
  this.telephone = telephone;
  this.revenuMensuel = revenuMensuel;
  this.piecesJustif = piecesJustif;
  }
}
