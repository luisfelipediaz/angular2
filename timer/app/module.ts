import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppTimer } from "./components/timer/timer"

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppTimer ],
	bootstrap: [ AppTimer ] 
})
export class App {}