import { Utilisateur } from './../../models/utilisateur';
import { AgentService } from 'src/app/services/agent.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Agent } from 'src/app/models/agent';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-detail-agent',
  templateUrl: './detail-agent.component.html',
  styleUrls: ['./detail-agent.component.css']
})
export class DetailAgentComponent implements OnInit {
  agentForm: FormGroup;
  agent: Agent = null;
  utilisateur: Utilisateur;
  admin: Admin;
  constructor(private router: Router,
              private agentService: AgentService) { }

  ngOnInit() {

    this.agentForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
      ),
      adresse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      mdp: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    if (this.agentForm.valid) {
      if (this.agent == null) {
      this.agent = new Agent(
        null,
        this.agentForm.controls['matricule'].value,
        this.utilisateur = new Utilisateur(
        null,
        this.agentForm.controls['nom'].value,
        this.agentForm.controls['prenom'].value,
        this.agentForm.controls['email'].value,
        this.agentForm.controls['adresse'].value,
        this.agentForm.controls['telephone'].value,
        this.agentForm.controls['pseudo'].value,
        this.agentForm.controls['mdp'].value,
        ),
        this.admin,
      );
      this.agentService.saveAgent(this.agent);
    } else {
      // this.onUpdate();
    }
  }
    this.agentForm.reset();
    this.router.navigate(['/admin/liste-agents']);
}


}
