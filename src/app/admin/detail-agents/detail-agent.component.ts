import { Utilisateur } from "./../../models/utilisateur";
import { AgentService } from "src/app/services/agent.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Agent } from "src/app/models/agent";
import { Admin } from "src/app/models/admin";

@Component({
  selector: "app-detail-agent",
  templateUrl: "./detail-agent.component.html",
  styleUrls: ["./detail-agent.component.css"],
})
export class DetailAgentComponent implements OnInit {
  agentForm: FormGroup;
  agent: Agent = null;
  utilisateur: Utilisateur;
  admin: Admin;
  id: number;
  private sub: any;

  constructor(
    private router: Router,
    private agentService: AgentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params["id"];
    });

    this.agentForm = new FormGroup({
      nom: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      adresse: new FormControl("", Validators.required),
      telephone: new FormControl("", Validators.required),
      pseudo: new FormControl("", Validators.required),
      mdp: new FormControl("", Validators.required),
      matricule: new FormControl("", Validators.required),
    });

    if (this.id) {
      this.agent = this.agentService.findAgentById(this.id);
      this.agentForm.patchValue({
        nom: this.agent.utilisateur.nom,
        prenom: this.agent.utilisateur.prenom,
        email: this.agent.utilisateur.email,
        adresse: this.agent.utilisateur.adresse,
        telephone: this.agent.utilisateur.telephone,
        pseudo: this.agent.utilisateur.pseudo,
        mdp: this.agent.utilisateur.mdp,
        matricule: this.agent.matricule,
      });
    }
  }

  onSubmit() {
    if (this.agentForm.valid) {
      if (this.agent == null) {
        this.agent = new Agent(
          null,
          this.agentForm.controls["matricule"].value,
          (this.utilisateur = new Utilisateur(
            null,
            this.agentForm.controls["nom"].value,
            this.agentForm.controls["prenom"].value,
            this.agentForm.controls["email"].value,
            this.agentForm.controls["adresse"].value,
            this.agentForm.controls["telephone"].value,
            this.agentForm.controls["pseudo"].value,
            this.agentForm.controls["mdp"].value
          )),
          this.admin
        );
        this.agentService.saveAgent(this.agent);
      } else {
        this.onUpdate();
      }
    }
    this.agentForm.reset();
    this.router.navigate(["/admin/liste-agents"]);
  }

  onUpdate() {
    this.agent = new Agent(
      this.agent.idagent,
      this.agentForm.controls["matricule"].value,
      (this.utilisateur = new Utilisateur(
        null,
        this.agentForm.controls["nom"].value,
        this.agentForm.controls["prenom"].value,
        this.agentForm.controls["email"].value,
        this.agentForm.controls["adresse"].value,
        this.agentForm.controls["telephone"].value,
        this.agentForm.controls["pseudo"].value,
        this.agentForm.controls["mdp"].value
      )),
      this.admin
    );
    this.agentService.updateAgent(this.agent);
  }

  redirectAgentPage() {
    this.router.navigate(["/admin/liste-agents"]);
  }
}
