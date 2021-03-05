import { Injectable } from '@angular/core';
import { Task } from 'app/shared';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: "root" })
export class TasksService {
  private source: BehaviorSubject<Task[]> = new BehaviorSubject([
    new Task({
      id: uuidv4(),
      title: "task 1"
    })
  ]);
  tasks$ = this.source.asObservable();

  constructor() {}

  /**
   * Gets all tasks.
   * @returns all tasks as observable.
   */
  getAll(): Observable<Task[]> {
    return this.tasks$;
  }

  /**
   * Creates the task.
   * @param model - the new task. type: Task
   * @returns the created task.
   */
  create(model: Task): Observable<Task> {
    const task = new Task({ ...model, id: uuidv4() });
    this.source.next([...this.source.getValue(), task]);
    return of(task);
  }

  /**
   * Updates a given task.
   * @param model - the task to update. type: Task
   * @returns the updated task.
   */
  update(model: Task): Observable<Task> {
    this.source.next(
      this.source
        .getValue()
        .map(task =>
          model.id === task.id ? new Task({ ...task, ...model }) : task
        )
    );
    return of(this.source.getValue().find(task => task.id === model.id));
  }

  /**
   * Deletes a given task by id.
   * @param id - the id of the task to delete.
   * @returns the id of the given task.
   */
  delete(id: string): Observable<string> {
    this.source.next(this.source.getValue().filter(task => task.id !== id));
    return of(id);
  }
}
