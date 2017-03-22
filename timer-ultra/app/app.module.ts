

/*Forma 1*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskCompoment } from "./lista-tarea/lista-tarea.component";
import { FormattedTimePipe } from "./pipes/formateohoras.pipe";
import { QueuedOnlyPipe } from "./pipes/queuedOnlyPipe";
import { TaskIconsComponent } from "./tarea-task-icons/tarea-task-icons.component";
//Para la forma uno este import no va
import { TaskTooltipDirective } from "./directives/TaskTooltipDirective";


//Importante poner antes las declaraciones de las directivas es muuuuuy importante
@NgModule({
	imports: [ BrowserModule ],
	/*
	para la forma uno los declarations deben ser
	declarations: [ AppComponent, TaskCompoment, FormattedTimePipe, TaskIconsComponent, QueuedOnlyPipe ],
	*/
	declarations: [ TaskTooltipDirective, AppComponent, TaskCompoment, FormattedTimePipe, TaskIconsComponent, QueuedOnlyPipe ],
	bootstrap: [ AppComponent ]
})
export class AppModule{}