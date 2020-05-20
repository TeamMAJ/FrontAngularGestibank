import { DemandeOuverture } from './../models/demande-ouverture';

export const DEMANDES: DemandeOuverture[] = [
  {
    iddemandeOuverture: 1,
    dateDemande: new Date('2017-08-28'),
    valide: 1,
    clientpotentiel: {
        idclientpotentiel: 1,
        nom: 'toto',
        prenom: null,
        email: null,
        adresse: null,
        telephone: null,
        revenuMensuel: null,
        piecesJustif: null
    },
    admin: {
        idadmin: 1,
        matricule: '001',
        utilisateur: {
            idutilisateur: 1,
            nom: null,
            prenom: null,
            email: 'admin@gmail.com',
            adresse: null,
            telephone: null,
            pseudo: null,
            mdp: 'mdp'
        }
    }
},
{
    iddemandeOuverture: 2,
    dateDemande: new Date('2017-08-28'),
    valide: 1,
    clientpotentiel: {
        idclientpotentiel: 2,
        nom: 'titi',
        prenom: null,
        email: null,
        adresse: null,
        telephone: null,
        revenuMensuel: null,
        piecesJustif: null
    },
    admin: {
        idadmin: 1,
        matricule: '001',
        utilisateur: {
            idutilisateur: 1,
            nom: null,
            prenom: null,
            email: 'admin@gmail.com',
            adresse: null,
            telephone: null,
            pseudo: null,
            mdp: 'mdp'
        }
    }
}
];
