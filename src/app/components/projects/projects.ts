import { Component, ChangeDetectionStrategy } from '@angular/core';
import { profile } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  protected readonly profile = profile;

  /** Two-digit index shown on each project block, e.g. `01`. */
  protected no(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
