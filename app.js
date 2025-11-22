import { AddTaskError, DeleteTaskError } from "./expections/taskError.js";
import {
  addTask,
  deleteTask,
  list,
  markStatus,
} from "./services/taskServices.js";

const [command] = process.argv.slice(2); // get agrument

if (!command) {
  console.log("Usage: node app.js <command> [arguments]");
  console.log(
    "commands: add, list, update, mark-in-progress, mark-done, delete,"
  );
  process.exit(1);
}

switch (command) {
  case "add":
    try {
      const description = process.argv.at(-1);
      addTask(description);
    } catch (err) {
      if (err instanceof AddTaskError)
        console.log("Failed to add task:", err.message);
      else {
        console.log("Something went wrong");
      }
    }
    break;

  case "update":
    console.log("add new task");
    break;

  case "delete":
    try {
      const id = process.argv.at(-1);
      deleteTask(id);
    } catch (err) {
      if (err instanceof DeleteTaskError)
        console.log("Failed to remove task:", err.message);
      else {
        console.log("Something went wrong in deleteTask");
      }
    }
    break;
  case "mark-in-progress": {
    const id = process.argv.at(-1);
    markStatus(command, id);
    break;
  }
  case "mark-done":
    const id = process.argv.at(-1);
    markStatus(command, id);
    break;
  case "list":
    const status = process.argv.at(3);
    list(status);
    break;
  default:
    console.log(`Invalid <command>
      Usage: node app.js <command>
      Commands:
        add "description"           Add a new task
        update <id> "new desc"      Update task
        delete <id>                 Delete task
        mark-in-progress <id>       Mark as in-progress
        mark-done <id>              Mark as done
        list                        List all tasks
        list done/todo/in-progress  Filter by status
      `);
}
