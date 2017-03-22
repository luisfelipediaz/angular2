import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskCompoment } from "./lista-tarea/lista-tarea.component"

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, TaskCompoment ],
	bootstrap: [ AppComponent ]
})
export class AppModule{}