import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './components/createnote/note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archiveContainer/archive.component';
import { TrashComponent } from './components/trashContainer/trash.component';
import { FundoHeaderComponent } from './components/fundo-header/fundo-header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchPipe } from './pipe/search.pipe';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NoteComponent,
    NoteCardComponent,
    DashboardComponent,
    NotesComponent,
    ArchiveComponent,
    TrashComponent,
    FundoHeaderComponent,
    SidenavComponent,
    SearchPipe,
    EditNoteComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
