import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isLoggedIn: boolean = false;

  constructor(private router: Router, private authservice: AuthService) { }
  ngOnInit(): void {
  }
}
