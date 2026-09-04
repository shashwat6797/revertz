import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  /**
   * Current year dynamically displayed in the copyright notice.
   */
  readonly currentYear = new Date().getFullYear();
}
