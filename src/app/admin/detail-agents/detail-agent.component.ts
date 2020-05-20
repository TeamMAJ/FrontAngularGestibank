import { AgentService } from 'src/app/services/agent.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Agent } from 'src/app/models/agent';

@Component({
  selector: 'app-detail-agent',
  templateUrl: './detail-agent.component.html',
  styleUrls: ['./detail-agent.component.css']
})
export class DetailAgentComponent implements OnInit {
  agentForm: FormGroup;
  agent: Agent = null;
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

  /*
  onSubmit() {
    if (this.agentForm.valid) {
      if (this.agent == null) {
      this.agent = new Agent(
        null,
        this.agentForm.controls['matricule'].value,
        // utilisateur
        // admin
      );
      this.agentService.saveAgent(this.agent);
    } else {
      // this.onUpdate();
    }
  }
    this.agentForm.reset();
    this.router.navigate(['/liste-agent']);
}

*/

}
