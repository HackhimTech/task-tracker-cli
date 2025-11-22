import { loadDB, saveTaskToDB } from "../data/repository.js";
import { AddTaskError, DeleteTaskError } from "../expections/taskError.js";
import { now, verifyStatus } from "../utils/helper.js";

export function addTask(description) {
  const tasks = loadDB();
  if (!description)
    throw new AddTaskError(
      "❌ description is missing \n Usage: task-cli <command> task-description"
    );

  const newTask = {
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: now(),
    updated: now(),
  };

  tasks.push(newTask);
  saveTaskToDB(tasks);
  console.log(`✔ Task added successfully (ID: ${newTask.id})`);
}

export function deleteTask(id) {
  const tasks = loadDB();
  const filtered = tasks.filter((tx) => tx.id !== id);

  if (filtered.length === tasks.length)
    throw new DeleteTaskError("❌ Task not found!");

  saveTaskToDB(filtered);
  console.log(`✅ Tasks ID: ${id} removed successfully!`);
}

export function list(status) {
  const tasks = loadDB();

  if (tasks.length === 0) {
    console.log("No task yet!");
    return null;
  }

  if (!status) {
    console.table(tasks);
  }

  if (!verifyStatus(status)) return;

  const filtered = tasks.filter((tx) => tx.status === status);
  if (filtered.length === 0) {
    console.log(`${filtered.length} task ${status}`);
    return null;
  }

  console.table(filtered);
}

export function markStatus(status, id) {
  const tasks = loadDB();
  let sts = status.split("-").slice(1);
  sts = sts.length > 1 ? sts.join("-") : sts.at(0);

  if (!verifyStatus(sts)) return;

  const task = tasks.find((tx) => tx.id == id);
  if (!task) {
    console.log("No task found!");
    return null;
  }

  task.status = sts;
  task.updated = now();

  console.log(`✅ Task ID: ${id} marked ${sts}`);
  saveTaskToDB(tasks);
}

export function updateTask(id, description) {
  const tasks = loadDB();
  const task = tasks.find((t) => t.id == id);

  if (!task) {
    console.log("No task found!");
    return null;
  }

  task.description = description;
  task.updated = now();

  console.log(`✅ Task ID: ${id} updated!`);
  saveTaskToDB(tasks);
}
