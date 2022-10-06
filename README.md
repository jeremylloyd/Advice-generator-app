# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/Advice-generator-app)
- Live Site URL: [Github Pages](https://jeremylloyd.github.io/Advice-generator-app/)

## My process

### Built with

- HTML
- CSS (BEM)
- JS (fetch, await/async)

### What I learned

- Fetch API and Asynchronous JS functions
  - `fetch(url).then((res) => res.json()).then((data) => console.log(data))`
    is the same as:
    ```
    response = await fetch("https://api.adviceslip.com/advice");
    data = await response.json();
    return data;
    ```
  - A common error of newbie JS programmers is to put `await` before every promise.
    If you're not careful, this may result in expensive functions waiting for each other running than running asynchronously.
    To have multiple promises work asynchronously using await, you can use `await Promise.all([promise1, promise2])`.
  - The best video I saw on the topic: [YouTube](https://www.youtube.com/watch?v=iHrVo5fvmzE)
  - Asynchronous programming is probably the biggest difference to python from JS
