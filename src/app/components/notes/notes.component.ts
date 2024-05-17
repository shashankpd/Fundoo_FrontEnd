import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesList:any[]=[];

  constructor(private notesService:NoteServiceService) { }

  ngOnInit() {
    this.notesService.getApi().subscribe(
      (res: any) => {
        this.notesList = res.data.filter(
          (note: any) => note.isArchive == false && note.isTrash == false
        );
      },
      (err) => console.log(err)
    );
  }
  handleUpdateNotesList($event: any) {
    console.log($event);
    if ($event.action == 'addNote') {
      this.notesList.push($event.data);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.notesList = this.notesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    }

    else if($event.action=='colour' || $event.action=='edit')
      {
        this.notesList = this.notesList.map(
           (note: any) =>{if( note.noteId = $event.data.noteId){
            return $event.data
           }
           return note
           }

        );
         
      }
  }
}
