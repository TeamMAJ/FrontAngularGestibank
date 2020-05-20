import { Admin } from '../models/admin';

export const ADMIN: Admin = {
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
};
