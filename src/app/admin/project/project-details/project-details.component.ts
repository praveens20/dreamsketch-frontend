import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projectForm!: UntypedFormGroup;

  constructor(
    private readonly projectService: ProjectService,
    private readonly utility: UtilityService,
    public dialogRef: MatDialogRef<ProjectDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.projectForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
    });
  }

  addProject() {
    this.projectService
      .createProject(this.projectForm.value)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          this.dialogRef.close(true);
        }
        this.utility.showSnackbar(res?.error?.message ?? res?.message);
      });
  }
}
