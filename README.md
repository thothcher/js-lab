# JS Flow Lab

A static web app that teaches **vanilla JavaScript data flow** with a drag-and-drop block canvas — the JavaScript sibling of Angular Flow Lab. Learners build a flow (array → filter → template string → DOM, or API → fetch → await → json → render), press **Run Flow**, and watch the *real value* change at every step.

No build step, no dependencies. Open `index.html`. (Fonts — Inter, Figtree, IBM Plex Mono, Noto Sans Georgian — load from Google Fonts and fall back to system fonts offline.)

## Project structure

- `index.html` — application shell.
- `styles.css` — design tokens for the dark (default) and light themes, then every component: pill buttons, 12px cards, layered shadows, aurora glows behind the canvas.
- `app.js` — block definitions, scenario datasets, the simulation engine, code generator, canvas editor, levels, reference schemas and real-world tasks.
- `imgs/` — logo.

## What is different from the Angular lab

Same canvas, same design language, three new teaching layers:

**1. Data tab — the real value after every block.**
Every block has a `run()` that actually transforms the data. `.filter()` really filters, `.reduce()` really sums, `res.json()` really parses. The panel shows the value after each step and a pill telling you whether it grew, shrank or changed kind (`5 items → 3 items → 217 chars → 3 nodes`). Nodes get a matching badge while the flow runs.

**2. Code tab — the JavaScript your canvas describes.**
The chain is compiled into real, readable source, indented and highlighted, with a Copy button. Adding `async function` and `try / catch` blocks wraps and indents the code the way you would actually write it. Great for the moment a student asks "so what does this look like in a file?"

**3. Honest error messages.**
Connect `fetch()` straight into `.filter()` and the trace says:

> `.filter()` needs an array, but received a Promise (did you forget await?)

Wire `res.json()` before `fetch()`, feed a localStorage string into `.map()` — each mistake produces the sentence a real learner needs. Breaking a flow on purpose is a lesson, not a dead end.

**4. Real-world tasks — students design the flow themselves.**
Press **Tasks** for 10 briefs taken from products people use every day: a weather widget, a shopping cart, live movie search, a news feed that survives an outage, a to-do list that remembers, a sign-in form, a sales dashboard, an unread-messages badge, an edit-profile page and a restaurant menu. The canvas starts empty; a floating checklist ticks each requirement as the student wires blocks (requirements are rules such as "data can travel from fetch() to await" or "one output feeds two branches", so extra debugging blocks never fail a task). Two levels of help: **Show blocks** lists the blocks needed (click one to add it), **Show solution** reveals the reference flow as readable chains. Completed tasks are remembered in `localStorage`.

Every scenario brings its own sample data — cities and temperatures, cart items, orders, messages, dishes in ₾ — so the Data tab, the generated code (`orders.filter(o => o.paid)`) and the browser preview all speak the scenario's language.

## Branching flows

A port can hold any number of connections: one output can feed several blocks (fan-out) and one input can collect several outputs (fan-in, e.g. URL + API key → `fetch()`). Only loops are refused. When a flow runs, every block keeps its own output and each branch reads from its own parent, so the `.reduce()` branch and the template branch of the same array each get the right value. The Code tab does the same: each branch reads its parent's variable. Linear levels still check for one straight chain.

## API block with your own key

Press **API** in the toolbar, or select any API endpoint / API key / fetch block and use the inspector. One shared config drives every network block on the canvas:

- **Endpoint URL** — leave empty for built-in mock products; put a real URL in and Run Flow performs a real `fetch`.
- **API key** — masked by default, with a Show toggle.
- **How to send the key** — `Authorization: Bearer`, a custom header (`x-api-key`, …), a query parameter, or none.
- **Array path inside the response** — for APIs that wrap the list, e.g. `{ "products": [...] }` → write `products`.
- **Request preview** — the exact request that will go out, with the key masked.
- **Test request** — fires it once and reports the status and how many items came back.

Live data is normalised onto `{ id, name, price, inStock }` (it reads `title`/`cost`/`available` too), so real API data flows through the same `.filter()` / `.map()` / template blocks. If the request fails (CORS, 401, offline) the flow says so in the trace and falls back to mock data instead of dying.

The key is stored in `localStorage` in that browser only, and is never written into the generated code — the Code tab prints a masked constant. Still: use keys that are safe to expose in a browser, or proxy through your own backend.

Public endpoints that work well for a class: `https://fakestoreapi.com/products`, `https://dummyjson.com/products` (array path: `products`), `https://jsonplaceholder.typicode.com/posts`.

## Blocks (42)

| Group | Blocks |
| --- | --- |
| Data sources | array literal, API endpoint, localStorage, input value |
| Fetch & HTTP | `fetch()`, API key / headers, `res.json()`, GET, POST, PUT/PATCH, DELETE, try/catch, AbortController |
| Async & timing | `async function`, `await`, `.then()` chain, `setTimeout`, debounce, event loop |
| Array & transform | `.filter()`, `.map()`, `.sort()`, `.reduce()`, `.find()`, destructuring, spread, template string |
| State & storage | state object, closure, save to storage |
| DOM & events | `querySelector`, `createElement`, append/fragment, render to DOM, `addEventListener`, event delegation, form submit, classList |
| Modules | `export`, `import` |
| Output | `console.log`, browser screen |

Each block carries: what it does, where it lives, a code sample, the data shape in and out, and the mistake people actually make with it. Blocks flip on double-click for the long explanation, and the ⟩ button dives into a block to build its internals from 22 sub-blocks (`try` / `catch` halves, headers, `preventDefault`, `FormData`, guards, arrow functions…).

## Levels (22)

Fundamentals 1–9: render an array, filter, map, sort, reduce, first fetch, async/await, try/catch (with a dive-in requirement), send an API key.

Advanced 10–22: click handlers, POST from a form, PUT, delegated DELETE, spread + localStorage, restore from storage, debounced search, event delegation, `.then()` chain, event-loop ordering, ES modules, AbortController, and a fan-in/fan-out graph level where create and delete share one request pipeline.

**Check Answer** validates the chain and names the first block that is out of place. **Reference Schemas** holds 30 pre-built flows you can load read-only and then edit: 10 real-world scenarios (each with a *Practise as a task* link) and 20 concept schemas.

## Canvas controls

| Action | How |
| --- | --- |
| Add a block | Drag from the library (or search it first) |
| Connect | Drag from a right port to a left port — again from the same port to branch |
| Remove a connection | Hover the line and click its ×, or click the line |
| Block details | Click (inspector) · double-click (flip) · ⟩ (dive in) |
| Pan / zoom | Drag the empty background, Space+drag or middle-drag · Ctrl+wheel · Ctrl +/−/0 |
| Tidy, snap, undo, fit | Floating toolbar bottom-right (it stays put while you pan) · Ctrl+Z / Ctrl+Shift+Z |
| More room for the canvas | « in the library header folds it into an icon rail (hover an icon for its name, drag it as usual) · hover the inspector's or the bottom panel's edge and click the double arrow to hide it, click it again to bring it back · drag any edge to resize. Remembered per browser. |
| Delete a block | Select and press Delete |

Also: dark (default) and light theme, English/Georgian UI, block search, and task progress — remembered in `localStorage`.

## Teaching ideas

- Build level 1, then **delete `.join('')` mentally**: switch to the Code tab and ask what the commas on screen would come from.
- Wire `fetch()` directly into `.filter()` and run it. The error message *is* the lesson on promises.
- Run level 6 with mock data, then paste a real URL into the API block and run it again — same blocks, live data.
- Open the Data tab and walk the pill values: `5 items → 3 items → 1 number`. That single line is what `.filter()` and `.reduce()` mean.
- Level 19 (event loop): read the console order out loud before running it, then run it.
- Level 22: ask why two different user actions can share one `fetch()` — the graph makes the answer visible.
- Tasks: let pairs read a brief aloud and sketch the flow on paper first, then build it. Compare designs — the checklist accepts any flow that meets the requirements, so two different correct answers are a discussion, not a mistake.

## Notes

Static front end, no server needed. `file://` works for everything except real API calls to servers that require CORS with credentials; a plain static server (`npx serve`, VS Code Live Server) avoids all such surprises.

## License

Use and modify freely for learning and demo purposes.
