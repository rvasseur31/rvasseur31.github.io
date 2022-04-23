import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMail } from 'src/shared/interfaces/mail.interface';
import { AppService } from './app.service';

enum SkillCategory {
  TECHNICAL,
  PROFESSIONAL,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.responsive.css'],
})
export class AppComponent {
  constructor(private appService: AppService) {}

  title = 'rvasseur';

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

  randomSkill = this.skills
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 5);

  techninalSkills = this.skills.filter(
    (skill) => skill.type === SkillCategory.TECHNICAL
  );
  professionalSkills = this.skills.filter(
    (skill) => skill.type === SkillCategory.PROFESSIONAL
  );

  cursuses = [
    {
      begin: '2015',
      end: '2018',
      school: 'Lycée Pierre de Fermat',
      title_fr: 'Baccalauréat S',
      title_en: 'High school diploma',
      summary_fr: 'Mention Assez bien, option ISN',
      summary_en: 'Specialising in Informatics, (Honours 2.2)',
    },
    {
      begin: 'Depuis',
      end: '2018',
      school: 'Ynov Campus Toulouse',
      title_fr: 'Bachelor en Informatique',
      title_en: 'Informatic License',
      summary_fr: 'Obtention de mon bachelor 1.',
      summary_en: 'I get my License 1.',
    },
  ];

  xps = [
    {
      begin: 'Depuis Septembre',
      end: '2018',
      company: 'CE Airbus',
      title_fr: 'Job étudiant',
      title_en: 'Extracurricular activitie',
      summary_fr:
        'Billetterie, accueil et tenue de bar lors des évènements de la salle Nougaro.',
      summary_en:
        'Billetterie, accueil et tenue de bar lors des évènements de la salle Nougaro.',
    },
    {
      begin: 'Sortie en Septembre',
      end: '2018',
      company: 'SecretNote',
      title_fr: 'Application Android (projet personnel)',
      title_en: 'Android application (personal project)',
      summary_fr: 'Bloc note sécurisé avec un mot de passe.',
      summary_en: 'Bloc note sécurisé avec un mot de passe.',
    },
    {
      begin: 'Ete',
      end: '2019',
      company: 'Les restos du coeur',
      title_fr: 'Bénévole',
      title_en: 'Volunteer',
      summary_fr: 'Tri des aliments, Distribution dans le centre des Arènes.',
      summary_en: 'I helped people.',
    },
  ];

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
