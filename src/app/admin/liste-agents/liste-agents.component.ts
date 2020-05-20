import { Agent } from './../../models/agent';
import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-liste-agents',
  templateUrl: './liste-agents.component.html',
  styleUrls: ['./liste-agents.component.css']
})
export class ListeAgentsComponent implements OnInit {
  agents: Agent[];
  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.getAllAgents();
  }

  getAllAgents() {
    this.agents = this.agentService.findAll();
  }

}
