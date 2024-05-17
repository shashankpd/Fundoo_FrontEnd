import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  ARCHIVE_ICON,
  EDIT_ICON,
  NOTE_ICON,
  REMINDER_ICON,
  TRASH_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  IMG_ICON,
  PIN_ICON,
  MORE_ICON,
  UNDO_ICON,
  REDO_ICON,
  TICK_ICON,
  BRUSH_ICON,
} from 'src/assets/svg-icons';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  
  createNote:boolean=true;
  title:string="";
  description:string="";

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService:NoteServiceService) {
    
    iconRegistry.addSvgIconLiteral(
      'note-icon',
      sanitizer.bypassSecurityTrustHtml(NOTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'collabrator-icon',
      sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'color-pallete-icon',
      sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'image-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    
    iconRegistry.addSvgIconLiteral(
      'pin-icon',
      sanitizer.bypassSecurityTrustHtml(PIN_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );
    
    iconRegistry.addSvgIconLiteral(
      'undo-icon',
      sanitizer.bypassSecurityTrustHtml(UNDO_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'redo-icon',
      sanitizer.bypassSecurityTrustHtml(REDO_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'tick-icon',
      sanitizer.bypassSecurityTrustHtml(TICK_ICON)
    );
   
    iconRegistry.addSvgIconLiteral(
      'brush-icon',
      sanitizer.bypassSecurityTrustHtml(BRUSH_ICON)
    );
   }

  ngOnInit(): void {
  }

  handleCreateNote() {
    this.createNote = !this.createNote;
    if (this.title || this.description) {
      this.noteService
        .createNotesApi({
          noteId: 29,
          title: this.title,
          description: this.description,
          bgcolor: '#ffffff',
          imagePath: "string",
          remainder: "2024-05-08T12:41:53.480Z",
          isArchive: false,
          ispinned: false,
          isTrash: false,
          createdAt: "2024-05-08T12:41:53.480Z",
          modifiedAt: "2024-05-08T12:41:53.480Z",
          labelName: "string"
        })
        .subscribe((res) => {
          this.updateList.emit({
            data: {
              title: this.title,
              description: this.description,
            },
            action: 'addNote',
          });
          this.title = '';
          this.description = '';
        });
    }
  }

  
  

}
