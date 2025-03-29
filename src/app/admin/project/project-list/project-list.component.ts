import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/services/project.service';
import { UtilityService } from 'src/app/services/utility.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  displayedColumns: string[] = [
    'projectName',
    'projectDescription',
    'plannedStartDate',
    'plannedEndDate',
  ];
  projects = new MatTableDataSource();

  constructor(
    private readonly projectService: ProjectService,
    private readonly utility: UtilityService
  ) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe((res: any) => {
      if (res?.status === 'success' && res?.data?.length) {
        this.projects.data = res.data;
      } else {
        this.utility.showSnackbar(res?.message);
      }
    });
  }

  openProjectDialog() {
    const dialogRef = this.utility.openDialog(ProjectDetailsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      if (result) this.fetchProjects();
    });
  }
}
