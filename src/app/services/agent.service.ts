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

}
