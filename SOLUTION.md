### How much time did you spend on this test?

Answer: 2 weeks

---

### Why did you choose this particular boilerplate or framework?

Answer: i really like react for  :
- Designing large, complex applications. - Reusability of components. 
- The performance of its virtual DOM
- React is a very popular framework with a large community of active 
- Its compatibility with ReduxToolkit, Tytpêscrip but also Next.js
- 

---

### What's your current experience in the framework you used? (no experience, beginner, advanced, expert)

Answer: advanced
---
### What would be the improvements on the technical part if you had to send this app to production? (A more complete version is already in production)

Answer: - More extensive e2e testing
- Improved responsive for tablets
- Improved css with better use of the createTheme(MUI)
- Loading icons and scroll effects.


---
### Have you met issues that you left on the side to finish in time and how would you solve them?

Answer:

I have encountered two major problems. The css and the infinite scroll.

The Mui createTheme is very capricious for the variants. To overcome this problem I used directly objects that are called in the "sx" attribute of MUI components.

For the inifini scroll, I wanted to add a condition in case the api would arrive at the end of the message list. But I was missing an endpoint to be able to manage this better. I prefered to revise my function and stay on the essential infinite scroll
