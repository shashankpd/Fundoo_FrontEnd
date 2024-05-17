import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  
  title:string='';
  description:string='';
  colour:string='';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<EditNoteComponent>) { 
    console.log(data);

    this.title=data.title;
    this.description=data.description;
    this.colour=data.colour;
  }

  ngOnInit(): void {
  }

  handleEditNote()
  {
    this.dialogRef.close({...this.data,title:this.title,description:this.description,colour:this.colour});
  }

}
