import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
 
} from 'src/assets/svg-icons';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  @Input() notesData:any[]=[];

  searchString:string='';
  subscription!:Subscription;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private notesService:NoteServiceService,private dataService:DataServiceService,private matDialog:MatDialog) {
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
      'Archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );

   }

   ngOnInit(): void {
    this.subscription=this.dataService.currSearchString.subscribe(res=>this.searchString=res)
   }


   handleNoteIconsClick(data: any, action: string,colour?:string) {
     if (action == 'archive' || action=='unarchive') {
       this.notesService
         .archiveApi(data.noteId)
         .subscribe((res) => this.updateList.emit({ data, action }));
     } else if (action == 'trash') {
       this.notesService
         .trashApi(data.noteId)
         .subscribe((res) => this.updateList.emit({ data, action }));
     }
     else if(action == 'colour')
      {
        data.colour = colour
        this.notesService.colorApi(data.noteId,data.bgcolor).subscribe(res => {
         this.updateList.emit({data:{...data,colour},action}) })
      }
      
   }
   handleEditNote(noteData:any)
   {  
    const dialogRef= this.matDialog.open(EditNoteComponent,{data:noteData})
    dialogRef.afterClosed().subscribe(result => {this.notesService.editApi(noteData.noteId,result).subscribe(result=>{
      this.updateList.emit({data:result,action:'edit'})})

    });
    
   }
      
}
