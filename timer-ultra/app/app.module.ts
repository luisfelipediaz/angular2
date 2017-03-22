import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskCompoment } from "./lista-tarea/lista-tarea.component"
import { FormattedTimePipe } from "./pipes/formateohoras.pipe"
import { TaskIconsComponent } from "./tarea-task-icons/tarea-task-icons.component"

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, TaskCompoment, FormattedTimePipe, TaskIconsComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule{}