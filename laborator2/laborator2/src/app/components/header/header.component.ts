import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentification.service';
import { UserServiceService } from 'app/services/user-service.service';
import {HeadStateService} from '../../services/head-state.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public headStateService: HeadStateService,private userService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }
}
