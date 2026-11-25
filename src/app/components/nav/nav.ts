import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './nav.css',
})
export class NavComponent {
  protected readonly profile = profile;
  protected readonly menuOpen = signal(false);
  /** Id of the section currently crossing the reading line; drives the index marker. */
  protected readonly active = signal('');
  protected readonly photoFailed = signal(false);
  protected readonly links = [
    { id: 'about', no: '01', label: 'About' },
    { id: 'skills', no: '02', label: 'Skills' },
    { id: 'experience', no: '03', label: 'Experience' },
    { id: 'projects', no: '04', label: 'Projects' },
    { id: 'education', no: '05', label: 'Education' },
    { id: 'contact', no: '06', label: 'Contact' },
  ];

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }

      // A thin band about a third of the way down the viewport acts as the reading line.
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const id = entry.target.id;
            if (entry.isIntersecting) {
              this.active.set(id);
            } else if (this.active() === id) {
              this.active.set('');
            }
          }
        },
        { rootMargin: '-35% 0px -60% 0px' },
      );

      for (const link of this.links) {
        const section = document.getElementById(link.id);
        if (section) {
          observer.observe(section);
        }
      }

      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
