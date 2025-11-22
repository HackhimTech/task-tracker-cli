export function now() {
  return new Date().toISOString();
}

export function verifyStatus(status) {
  const statusOptions = ["done", "todo", "in-progress"];

  if (!status) return;

  if (!statusOptions.includes(status)) {
    console.log("Usage: node app.js list status");
    console.log("status: done, todo, in-process");
    return false;
  }

  return true;
}
