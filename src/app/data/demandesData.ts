import { DemandeOuverture } from './../models/demande-ouverture';

export const USERS: DemandeOuverture[] = [
  {
    iddemandeOuverture: 1,
    dateDemande: '2020-01-01',
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
    dateDemande: '2020-01-01',
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
