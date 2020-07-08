export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoEntity {
  id = 0;
  title = '';
  completed = false;
}

export type TodoDto = Omit<Todo, 'id'>;
