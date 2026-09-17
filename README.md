# DevStack 

Build Your Ideal Development Stack — explore frontend, backend, database, and tooling options, compare them side by side, and put together the tech stack that fits your next project.

## About

DevStack is a web app where you can browse different technologies (React, Vue, Node.js, PostgreSQL, Docker, and more), see quick info about each one, and add them to your own personal "stack." It's built to help developers plan out what tools they want to use before starting a project.

## Built With

- React (with TypeScript)
- Tailwind CSS
- Vite
- react-toastify
- lucide-react

## Features

- **Add to Stack** – Browse technology cards and add any of them to your stack with one click, with toast alerts for add, duplicate, and remove actions.
- **Responsive Navbar** – Sticky navbar on desktop, with a slide-in sidebar menu for mobile screens.
- **Your Stack Sidebar** – A live sidebar that shows everything you've picked so far, with an empty state message when nothing is selected yet, and a "Remove All" option.

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is like HTML but write inside JavaScript. React use it because it easy to understand how UI look, instead of writing normal JavaScript code for every element.

**2. What is the difference between props and state?**

Props come from parent, child cannot change it. State is inside the component itself, and component can change it own self.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` help component to remember a value and change it when need. I use it for open/close the mobile menu, and also for the stack list (what technology user added).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` run code after component load, one time or when something change. I use it to fetch the JSON data one time when page open, not every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

Key help React know which item is which. Without key React get confuse when list change, and app can bug or slow.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering mean show different thing depend on condition. Example, in my "Your Stack" box, if stack empty I show "Your stack is empty", if not empty I show the list:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <ul>
    {stack.map((tech) => (
      <li key={tech.id}>{tech.name}</li>
    ))}
  </ul>
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

Parent give data to child using props, like `<TechCard tech={tech} />`. For child to send info back, parent give a function as prop, like `onAdd={addToStack}`, and child call it when button click.