import { Component, ChangeDetectionStrategy } from '@angular/core';
import { profile } from '../../data/profile';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills.css',
})
export class SkillsComponent {
  protected readonly profile = profile;
}
