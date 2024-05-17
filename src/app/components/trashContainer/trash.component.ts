import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashNotesList: any = [];

  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.noteService.getApi().subscribe(
      (res: any) => {
        console.log(res.data);

        this.trashNotesList = res.data.filter(
          (note: any) => note.isArchive == false && note.isTrash == true
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
    this.trashNotesList.push($event);
  } else if ($event.action == 'archive' || $event.action == 'trash') {
    this.trashNotesList = this.trashNotesList.filter(
      (note: any) => note.noteId != $event.data.noteId
    );
  }
}
}
