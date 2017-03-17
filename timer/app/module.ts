import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppTimer } from "./components/timer/timer"

import { timer2 } from "./components/timer2/timer2";
import { CountDownComponent } from "./components/counting/counting"

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppTimer, timer2, CountDownComponent ],
	bootstrap: [ AppTimer, timer2 ] 
})
export class App {}