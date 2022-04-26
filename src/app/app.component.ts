import { Component } from '@angular/core';
import { SkillCategory } from 'src/shared/enums/skill-category.enum';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.responsive.css'],
})
export class AppComponent {
  constructor(private appService: AppService) {}

  title = 'rvasseur';

  techninalSkills = this.appService.skills.filter(
    (skill) => skill.type === SkillCategory.TECHNICAL
  );
  professionalSkills = this.appService.skills.filter(
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
}
