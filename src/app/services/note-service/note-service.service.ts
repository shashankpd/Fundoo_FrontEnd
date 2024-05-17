import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor( private httpService:HttpService) { }

  getApi()
  {
     return this.httpService.getNoteApiCall('/Notes')
  }

  createNotesApi(data: any) {
    return this.httpService.createNotesApiCall(data, '/Notes');
  }

  archiveApi(noteId: any) {
    return this.httpService.archiveApiCall(`/Notes/IsArchived?NoteId=${noteId}`);
  }

  trashApi(noteId: any) {
    return this.httpService.trashApiCall(`/Notes/MoveToTrash?noteId=${noteId}`);
  }

  colorApi(noteId: any,colour:string) {
    return this.httpService.colorApiCall(`/Notes/Addcolor?Noteid=${noteId}`,colour);
  }

  editApi(noteId: any, updatedData: any) {
    return this.httpService.editApiCall(`/Notes/${noteId}`,updatedData);
  }
}



