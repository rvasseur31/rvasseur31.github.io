import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { IMail } from 'src/shared/interfaces/mail.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private firestore: Firestore) {}

  addMail(mail: IMail) {
    const mailsRef = collection(this.firestore, 'mails');
    return addDoc(mailsRef, mail);
  }
}
