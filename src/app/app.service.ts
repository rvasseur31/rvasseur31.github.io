import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SkillCategory } from 'src/shared/enums/skill-category.enum';
import { IMail } from 'src/shared/interfaces/mail.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private firestore: Firestore, private http: HttpClient) {}

  skills = [
    {
      title_fr: 'HTML/CSS',
      title_en: 'HTML/CSS',
      skill: '85',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'Javascript',
      title_en: 'Javascript',
      skill: '70',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'PHP 7 (Laravel)',
      title_en: 'PHP 7 (Laravel)',
      skill: '70',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'Android Natif (Java)',
      title_en: 'Android Natif (Java)',
      skill: '75',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'Android/IOS (Flutter)',
      title_en: 'Android/IOS (Flutter)',
      skill: '60',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'Python (Tkinter)',
      title_en: 'Python (Tkinter)',
      skill: '50',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'C++ (QT)',
      title_en: 'C++ (QT)',
      skill: '60',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'Suite office',
      title_en: 'Suite office',
      skill: '90',
      type: SkillCategory.TECHNICAL,
    },
    {
      title_fr: 'Communication',
      title_en: 'Communication',
      skill: '80',
      type: SkillCategory.PROFESSIONAL,
    },
    {
      title_fr: "Travail d'équipe",
      title_en: 'Work team',
      skill: '70',
      type: SkillCategory.PROFESSIONAL,
    },
    {
      title_fr: 'Gestion de projet',
      title_en: 'Project management',
      skill: '85',
      type: SkillCategory.PROFESSIONAL,
    },
    {
      title_fr: 'Créativité',
      title_en: 'Creativity',
      skill: '50',
      type: SkillCategory.PROFESSIONAL,
    },
  ];

  async addMail(mail: IMail) {
    const httpOptions = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': environment.mailApiKey,
      },
    };
    const mailBody = {
      sender: {
        name: `Raphael Vasseur`,
        email: 'rafvasseur@gmail.com',
      },
      to: [
        {
          email: 'rafvasseur@gmail.com',
          name: 'Raphael Vasseur',
        },
      ],
      subject: 'Nouveau message de votre site',
      htmlContent: `<html> <head></head> <body> <h1>Vous avez un nouveau message sur votre site CV</h1> <br/> <h3>Envoyé par : ${mail.firstName} ${mail.lastName}</h3> <h4>Depuis le mail : ${mail.from}</h4> <p>Contenu : <br/>${mail.message}</p></body></html>`,
    };
    this.http
      .post('https://api.sendinblue.com/v3/smtp/email', mailBody, httpOptions)
      .subscribe((data: any) => console.log('Mail sent successfully', data));
    const mailsRef = collection(this.firestore, 'mails');
    return addDoc(mailsRef, mail);
  }
}
