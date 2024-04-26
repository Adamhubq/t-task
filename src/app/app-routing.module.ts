import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapEditorComponent } from './map-editor/map-editor.component';

const routes: Routes = [
  {path: '', component: MapEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
