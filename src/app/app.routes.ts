import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { TuitionComponent } from './tuition/tuition.component';
import { BlogComponent } from './blog/blog.component';
import { ProgramsComponent } from './programs/programs.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';




export const routes: Routes = [

    { path: '', component: HomeComponent },

    {
        path: 'about',
        component: AboutUsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'tuition',
        component: TuitionComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'programs',
        component: ProgramsComponent
    },
    {
        path: 'reg-form',
        component: RegistrationFormComponent
    },

];
