import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'projets',
    component: ProjectsComponent
  },
  {
    path: 'activités',
    component: ProfessionalComponent
  },
  {
    path: 'compétences',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
