import { Component, OnInit } from '@angular/core';
import { Job } from '../../interfaces/job.interface';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
})
export class JobsPageComponent implements OnInit {

  jobs: Job[] = [];
  selectedJob: Job | null = null;
  loading = false;

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.loading = true;
    this.jobsService.getAllJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        // Seleccionar el primer trabajo por defecto
        if (jobs.length > 0) {
          this.selectedJob = jobs[0];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.loading = false;
      }
    });
  }

  selectJob(job: Job): void {
    this.selectedJob = job;
  }

  isJobSelected(job: Job): boolean {
    return this.selectedJob?.id === job.id;
  }

  trackByJobId(index: number, job: Job): number {
    return job.id;
  }
}
