export class AddTaskError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "addTaskError";
  }
}

export class DeleteTaskError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "addTaskError";
  }
}
