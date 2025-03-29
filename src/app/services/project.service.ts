import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private readonly apiService: ApiService) {}

  getProjects() {
    return this.apiService.get(
      'https://dreamsketch-backend.onrender.com/projects'
      // 'http://localhost:3000/projects'
    );
  }

  createProject(project: any) {
    const { name, clientName, plannedStartDate, plannedEndDate } = project;

    return this.apiService.post(
      'https://dreamsketch-backend.onrender.com/projects',
      // 'http://localhost:3000/projects',
      {
        name,
        // empId,
      }
    );
  }
}
