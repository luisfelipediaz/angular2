

/*Forma 1*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskCompoment } from "./lista-tarea/lista-tarea.component";
import { FormattedTimePipe } from "./pipes/formateohoras.pipe";
import { QueuedOnlyPipe } from "./pipes/queuedOnlyPipe";
import { TaskIconsComponent } from "./tarea-task-icons/tarea-task-icons.component";
import { TaskTooltipDirective } from "./directives/TaskTooltipDirective";


//Importante poner antes las declaraciones de las directivas es muuuuuy importante
@NgModule({
	imports: [ BrowserModule ],
	declarations: [ TaskTooltipDirective, AppComponent, TaskCompoment, FormattedTimePipe, TaskIconsComponent, QueuedOnlyPipe ],
	bootstrap: [ AppComponent ]
})
export class AppModule{}