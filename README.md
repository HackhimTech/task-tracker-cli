# Task Tracker CLI

A simple lightweight command-line task-tracker built with "Node.js" (zero dependencies).
Track your to-dos, mark task as in-progress or done, update or delete them - all from your terminal

## Features

- Add new tasks
- Update and delete tasks
- Mark task as in-progress or done
- List all task or filter by status (todo, done, in-progress)
- Stores everything in a human-readable db.json file
- No external dependencies - pure Node.js

## Installation

### Quick local use (recommended)

1. Clone or download this project
2. Run it directly (powershell):
   `node app.js add "Your first task" `

## Usage

Add new task
`node app.js add "Buy milk and eggs"`
Update a task
`node app.js update 1 "Buy peak milk and 4 eggs"`
Delete a task
`node app.js delete 1`
Mark task as in progress
`node app.js "mark-in-progress" 1`
Mark task as done
`node app.js "mark-done" 1`
List by status
`node app.js list`
`node app.js list done`
`node app.js list todo`
`node app.js list in-progress`

## Data Storage

All task are saved in a db.json file in the root directory
`[
    {
        "id": 1,
        "description": "Go to the groceries store",
        "status": "done",
        "createdAt": "2025-11-21T23:02:31.616Z",
        "updated": "2025-11-22T01:11:43.832Z"
    },
    {
        "id": 2,
        "description": "sleeping soon",
        "status": "done",
        "createdAt": "2025-11-22T01:12:05.121Z",
        "updated": "2025-11-22T09:32:59.156Z"
    }
]`

## Project Structure

data - Function use to fetch data from database
expections - Handling Errors
services - Functions that gets and store tasks to the database
utils - Holds helper functions
app.js - Main script (file you need)
db.json - Database file
package.json - Use to configure ESM
README.md - This file

## Why This Project Rocks

- Perfect for learning CLI development
- Greate for interviews or portfolio
- Actually useful in daily life
- Teaches file I/O, JSON, and argument parsing
- 100% vanilla JavaScript - no npm packages!

## License 😂

MIT ✈ 2025 Hackhim

Feel free to fork, improve, and use it however you like mate 👍
Happy task tracking!
I don sabi wetin i won learn from am
Also don't think it is AI generated o, it took me hardwork to compose all this o. make i no swear for your papa o.
Anyways later! peace and don't play!
