import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  /**
   * Signal tracking whether the mobile dropdown menu is currently visible.
   */
  readonly isMobileMenuOpen = signal(false);

  /**
   * Toggles the mobile menu drawer state.
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  /**
   * Closes the mobile menu when a navigation item is clicked.
   */
  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
