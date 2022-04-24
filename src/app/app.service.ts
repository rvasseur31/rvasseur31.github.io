import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { SkillCategory } from 'src/shared/enums/skill-category.enum';
import { IMail } from 'src/shared/interfaces/mail.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private firestore: Firestore) {}

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

  addMail(mail: IMail) {
    const mailsRef = collection(this.firestore, 'mails');
    return addDoc(mailsRef, mail);
  }
}
