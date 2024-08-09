import { Component } from '@angular/core';
import { UserDetailsService } from 'shared-lib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  group: string | undefined;
  picture: string | undefined;
  constructor(private userDetailsSvc: UserDetailsService) {
    this.loadUserDetails()
  }

  async loadUserDetails() {
    this.group = await this.userDetailsSvc.getUserGroup()
    this.picture = this.userDetailsSvc.getUserPicture()
  }
}
