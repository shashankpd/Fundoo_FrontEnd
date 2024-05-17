import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
 
  archiveNotesList: any = [];

  constructor(private noteService: NoteServiceService) {}

  ngOnInit(): void {
    this.noteService.getApi().subscribe(
      (res: any) => {
        console.log(res.data);

        this.archiveNotesList = res.data.filter(
          (note: any) => note.isArchive == true && note.isTrash == false
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  handleUpdateNotesList($event: any) {
    console.log($event);
    if ($event.action == 'addNotes') {
      this.archiveNotesList.push($event);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.archiveNotesList = this.archiveNotesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    }
  }
 
  
}


