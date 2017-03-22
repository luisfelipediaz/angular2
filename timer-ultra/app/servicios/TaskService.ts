import { Task } from "../interfaces/Task"

export class TaskService{
	public taskStore: Task[] = [];

	constructor(){
		const tasks =[
			{
				name: "Preparad arquitectura del proyecto",
				deadline: "03 Mar 2017",
				tareasRequeridas: 2
			},
			{
				name: "Subir al tfs",
				deadline: "04 Mar 2017",
				tareasRequeridas: 1
			},
			{
				name: "Probar funcionamiento",
				deadline: "05 Mar 2017",
				tareasRequeridas: 2
			},
			{
				name: "Montar primera pagina",
				deadline: "06 Mar 2017",
				tareasRequeridas: 3
			}
		];
	}
}