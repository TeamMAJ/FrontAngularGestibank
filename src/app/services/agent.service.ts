//Test 1
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

  deleteAgent(agent: Agent) {
    let idx;
    idx = AGENTS.indexOf(agent);
    if (idx >= 0) {
      AGENTS.splice(idx, 1);
    }
  }

  updateAgent(agent: Agent) {
    // tslint:disable-next-line: prefer-const
    let oldAgent = this.findAgentById(agent.idagent);
    let idx;
    idx = AGENTS.indexOf(oldAgent);
    if (idx >= 0) {
      AGENTS.splice(idx, 1, agent);
    }
  }

   findAgentById(id: number): Agent {
    let currentAgent: Agent;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < AGENTS.length; i++) {
      currentAgent = AGENTS[i];
      // tslint:disable-next-line: triple-equals
      if (currentAgent.idagent == id) {
        return currentAgent;
      }
    }
    return undefined;
  }

}

