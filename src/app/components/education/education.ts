import { Component, ChangeDetectionStrategy } from '@angular/core';
import { profile } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './education.css',
})
export class EducationComponent {
  protected readonly profile = profile;
}
