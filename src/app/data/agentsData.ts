import { Agent } from '../models/agent';

export const AGENTS: Agent[] = [
  {
    idagent: 1,
    matricule: '002',
    utilisateur: {
        idutilisateur: 2,
        nom: 'nomAgent',
        prenom: 'prenomAgent',
        email: 'agent@gmail.com',
        adresse: 'Rue de la paix',
        telephone: '0320989800',
        pseudo: 'pseudo',
        mdp: 'mdp'
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
    idagent: 2,
    matricule: '003',
    utilisateur: {
        idutilisateur: 4,
        nom: 'nomAgent2',
        prenom: 'prenomAgent2',
        email: 'agent2@gmail.com',
        adresse: null,
        telephone: null,
        pseudo: 'pseudoAgent2',
        mdp: 'mdp'
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
