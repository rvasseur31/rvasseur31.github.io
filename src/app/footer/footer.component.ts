import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMail } from 'src/shared/interfaces/mail.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private appService: AppService) {}

  mail: IMail = {
    firstName: '',
    lastName: '',
    from: '',
    text: '',
  };

  onSubmit(form: NgForm) {
    this.appService.addMail(form.value).then(() => form.reset());
  }
}
