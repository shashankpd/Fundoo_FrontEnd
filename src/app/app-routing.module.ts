import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { NoteComponent } from './components/createnote/note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archiveContainer/archive.component';
import { TrashComponent } from './components/trashContainer/trash.component';
import { FundoHeaderComponent } from './components/fundo-header/fundo-header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthGuardService } from './services/authGuard-service/auth-guard.service';

const routes: Routes = [
{path: '',redirectTo:"login",pathMatch:'prefix'},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"note",component:NoteComponent},
{path:"noteCard",component:NoteCardComponent},
{path: "dashboard",component:DashboardComponent,canActivate:[AuthGuardService],

children:
  [
    
    {path: "notes",component:NotesComponent},
    {path: "archive",component:ArchiveComponent},
    {path: "trash",component:TrashComponent}
  ]
  },
  {path:"header",component:FundoHeaderComponent},
  {path:"sidenav",component:SidenavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
