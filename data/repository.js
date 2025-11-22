import fs from "fs";

export function loadDB() { 
  if (!fs.existsSync("db.json"))
    fs.writeFileSync("db.json", JSON.stringify([]));

  return JSON.parse(fs.readFileSync("db.json", "utf-8"));
}

export function saveTaskToDB(tasks) {
  fs.writeFileSync("db.json", JSON.stringify(tasks, null, 2));
  console.log("✅ Tasks saved to db successfully!");
}
