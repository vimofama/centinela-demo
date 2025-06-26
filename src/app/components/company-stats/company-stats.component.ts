import { Component, Input } from '@angular/core';

interface CompanyStat {
    label: string;
    value: string | number;
    icon: string;
    color: string;
}

@Component({
    selector: 'app-company-stats',
    templateUrl: './company-stats.component.html',
    styleUrls: ['./company-stats.component.css']
})
export class CompanyStatsComponent {

    @Input() totalJobs: number = 0;

    stats: CompanyStat[] = [
        {
            label: 'Trabajos Activos',
            value: this.totalJobs,
            icon: '💼',
            color: 'blue'
        },
        {
            label: 'Aplicaciones Recibidas',
            value: 247,
            icon: '📄',
            color: 'green'
        },
        {
            label: 'Candidatos Entrevistados',
            value: 89,
            icon: '🎯',
            color: 'purple'
        },
        {
            label: 'Contrataciones este mes',
            value: 12,
            icon: '✅',
            color: 'orange'
        }
    ];

    constructor() { }

    ngOnInit(): void {
        // Actualizar el valor de trabajos activos cuando cambie el input
        this.stats[0].value = this.totalJobs;
    }

    ngOnChanges(): void {
        // Actualizar el valor cuando cambie el input
        if (this.stats && this.stats.length > 0) {
            this.stats[0].value = this.totalJobs;
        }
    }

    getColorClasses(color: string): string {
        const colorClasses = {
            blue: 'bg-blue-100 text-blue-800',
            green: 'bg-green-100 text-green-800',
            purple: 'bg-purple-100 text-purple-800',
            orange: 'bg-orange-100 text-orange-800'
        };
        return colorClasses[color as keyof typeof colorClasses] || 'bg-gray-100 text-gray-800';
    }
}
