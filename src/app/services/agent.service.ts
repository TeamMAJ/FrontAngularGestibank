import { AGENTS } from './../data/agentsData';
import { Agent } from './../models/agent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor() { }

  findAll(): Agent[] {
    return AGENTS;
  }

  saveAgent(agent: Agent) {
    if (agent.idagent == null) {
      agent.idagent = AGENTS.length + 1;
      AGENTS.push(agent);
    }
  }

}
