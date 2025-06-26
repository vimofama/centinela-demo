import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.interface';
import { Job } from '../../interfaces/job.interface';
import { CompanyService } from '../../services/company.service';
import { JobsService } from '../../services/jobs.service';

@Component({
    selector: 'app-company-profile',
    templateUrl: './company-profile.component.html',
    styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

    company: Company | null = null;
    companyJobs: Job[] = [];
    activeTab: 'about' | 'jobs' = 'about';
    loading = false;
    showCreateJobModal = false;

    constructor(
        private companyService: CompanyService,
        private jobsService: JobsService
    ) { }

    ngOnInit(): void {
        this.loadCompanyProfile();
        this.loadCompanyJobs();
    }

    loadCompanyProfile(): void {
        this.loading = true;
        this.companyService.getCompanyProfile().subscribe({
            next: (company) => {
                this.company = company;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading company profile:', error);
                this.loading = false;
            }
        });
    }

    loadCompanyJobs(): void {
        this.jobsService.getAllJobs().subscribe({
            next: (jobs) => {
                // Filtrar trabajos de la empresa actual
                this.companyJobs = jobs.filter(job => job.company === 'TechCorp Solutions');
            },
            error: (error) => {
                console.error('Error loading company jobs:', error);
            }
        });
    }

    setActiveTab(tab: 'about' | 'jobs'): void {
        this.activeTab = tab;
    }

    openCreateJobModal(): void {
        this.showCreateJobModal = true;
    }

    closeCreateJobModal(): void {
        this.showCreateJobModal = false;
    }

    onJobCreated(job: Job): void {
        this.companyJobs.unshift(job);
        this.closeCreateJobModal();
    }

    trackByJobId(index: number, job: Job): number {
        return job.id;
    }
}
