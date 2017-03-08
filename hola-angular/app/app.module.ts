import { NgModule }                 from "@angular/core";
import { BrowserModule }            from "@angular/platform-browser";
import { FormsModule }              from "@angular/forms";

import { platformBrowserDynamic }   from "@angular/platform-browser-dynamic";
import { PipeComponent }            from "./app.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [PipeComponent],
    bootstrap: [PipeComponent]
})
export class PipeModule { }

platformBrowserDynamic().bootstrapModule(PipeModule);