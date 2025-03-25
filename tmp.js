// // // function createCart() {
// // //     let cart = [];

// // //     return {
// // //         addProduct: (name, price) => {
// // //             if (price <= 0) {
// // //                 console.log("❌ Price must be greater than zero!");
// // //                 return;
// // //             }
// // //             cart.push({ name, price });
// // //         },
// // //         removeProduct: (name) => {
// // //             cart = cart.filter(item => item.name !== name);
// // //         },
// // //         getTotal: () => cart.reduce((acc, item) => acc + item.price, 0),
// // //         viewCart: () => console.log("🛒 Cart: ", cart)
// // //     };
// // // }

// // // // ✅ Test Cases
// // // let myCart = createCart();

// // // myCart.addProduct("toy", 100);
// // // myCart.addProduct("ball", 200);
// // // myCart.viewCart();

// // // myCart.removeProduct("toy");
// // // myCart.viewCart();

// // // console.log("💰 Total:", myCart.getTotal());



// // // function createBankAccount(balance) {
// // //     return {
// // //         deposit: (amount) => {
// // //             if (amount > 0) {
// // //                 balance += amount
// // //             } else {
// // //                 console.log(`incorrect operation`);
// // //             }
// // //         },
// // //         withdraw: (amount) => {
// // //             if (amount <= balance && amount > 0) {
// // //                 balance -= amount;
// // //                 console.log(`widraw: ${amount} ✅`);
// // //             } else {
// // //                 console.log(`you do not have enough money on your acount! ❌`);
// // //             }
// // //         },
// // //         getBalance: () => `💰 Balance: ${balance}`
// // //     }
// // // }

// // // let myAccount = createBankAccount(500); // Initial balance: 500

// // // myAccount.deposit(-300);
// // // console.log(myAccount.getBalance()); // 💰 Balance: 800

// // // myAccount.withdraw(200);
// // // console.log(myAccount.getBalance()); // 💰 Balance: 600



// // // myAccount.withdraw(1000); // ❌ Not enough balance!

// // // console.log(myAccount.balance); // ❌ Undefined (Cannot access balance directly)



// // // function createTaskManager() {
// // //     let taskArr = [];
// // //     return {
// // //         addTask: (task) => {
// // //             taskArr.push({ name: task, status: "pending" });
// // //         },
// // //         viewTasks: () => {
// // //             taskArr.forEach((item, i) => console.log(`${i + 1}. ${item.name} - ${item.status}`));
// // //         },
// // //         completeTask: (task) => {
// // //             let foundTask = taskArr.find(item => item.name === task);
// // //             if (foundTask) foundTask.status = "completed";
// // //         },
// // //         removeTask: (task) => taskArr = taskArr.filter(item => item.name !== task)
// // //     }
// // // }



// // // let myTasks = createTaskManager();

// // // myTasks.addTask("Learn JavaScript");
// // // myTasks.addTask("Build a project");
// // // myTasks.viewTasks();
// // // console.log("\n");

// // // // 📋 Tasks:
// // // // 1. Learn JavaScript - pending
// // // // 2. Build a project - pending

// // // myTasks.completeTask("Learn JavaScript");
// // // myTasks.viewTasks();
// // // console.log("\n");
// // // // // 📋 Tasks:
// // // // // 1. Learn JavaScript - ✅ completed
// // // // // 2. Build a project - pending

// // // myTasks.removeTask("Build a project");
// // // myTasks.viewTasks();
// // // // // 📋 Tasks:
// // // // // 1. Learn JavaScript - ✅ completed



// // function createInventoryManager() {
// //     let productArr = [];

// //     return {
// //         addProduct: (product, price, stock) => {
// //             productArr.push({ name: product, priceInUsd: price, quantity: stock })
// //         },
// //         sellProduct: (product, amount) => {
// //             let foundProduct = productArr.find(item => item.name === product);
// //             if (foundProduct && foundProduct.quantity >= amount) {
// //                 foundProduct.quantity -= amount;
// //             } else {
// //                 console.log("Not enough stock or product not found!");
// //             }
// //         },
// //         getProduct: (product) => {
// //             let foundProduct = productArr.find(item => item.name === product);
// //             if (foundProduct) {
// //                 console.log(`🏷️ ${foundProduct.name} - $${foundProduct.priceInUsd} (${foundProduct.quantity} in stock)`);
// //             } else {
// //                 console.log("❌ Product not found!");
// //             }
// //         },
// //         viewInventory: () => productArr.forEach((item, i) => console.log(`${i + 1} ${item.name} - $${item.priceInUsd} (${item.quantity} in stock)`))
// //     }
// // }

// // let store = createInventoryManager();

// // store.addProduct("Laptop", 1000, 5);
// // store.addProduct("Phone", 500, 10);
// // store.viewInventory();


// // store.sellProduct("Laptop", 2);
// // store.getProduct("Laptop");
// // // 🏷️ Laptop - $1000 (3 in stock)
// // // 🏪 Inventory:
// // // 1. Laptop - $1000 (5 in stock)
// // // // 2. Phone - $500 (10 in stock)


// // // store.restockProduct("Laptop", 5);
// // // store.getProduct("Laptop");
// // // // 🏷️ Laptop - $1000 (8 in stock)



// // function createCounter() {
// //     let count = 0;
// //     return {
// //         increment: () => count++,
// //         decrement: () => count--,
// //         getCount: () => count
// //     }
// // }

// // const counter = createCounter();
// // console.log(counter.getCount()); // Output: 0

// // counter.increment();
// // console.log(counter.getCount()); // Output: 1

// // counter.increment();
// // console.log(counter.getCount()); // Output: 2

// // counter.decrement();
// // console.log(counter.getCount()); // Output: 1



// // function createGreeter(greet) {

// //     return function (name) {
// //         let res = `${greet}, ${name}`;
// //         return res
// //     }
// // }


// // const greet = createGreeter("Hi");
// // console.log(greet("Alice")); // Output: "Hi, Alice!"

// // const greet2 = createGreeter("Greetings");
// // console.log(greet2("Bob")); // Output: "Greetings, Bob!"




// // function createTimer() {
// //     let startTime = null;
// //     let elapsedTime = 0;
// //     let timerInterval = null;

// //     return {
// //         start: function () {
// //             if (startTime === null) {
// //                 startTime = Date.now() - elapsedTime; // Capture the start time
// //                 timerInterval = setInterval(() => {
// //                     elapsedTime = Date.now() - startTime; // Continuously update elapsed time
// //                 }, 100);
// //             }
// //         },
// //         stop: function () {
// //             clearInterval(timerInterval); // Stop the timer interval
// //             timerInterval = null;
// //         },
// //         getElapsed: function () {
// //             return elapsedTime; // Return the current elapsed time
// //         }
// //     };
// // }

// // const timer = createTimer();

// // // Start the timer
// // timer.start();

// // // Stop the timer after 2 seconds
// // setTimeout(() => {
// //     timer.stop();
// //     console.log(`Elapsed time: ${timer.getElapsed()} ms`); // Output: Elapsed time after 2 seconds
// // }, 2000);






// // function createCart() {
// //     let cart = [];

// //     return {
// //         addItem: (name, price, quantity) => {
// //             const existedItem = cart.find(item => item.name === name);
// //             if (existedItem) {
// //                 existedItem.quantity += quantity;
// //             } else {
// //                 cart.push({ name, price, quantity });
// //             }
// //         },
// //         removeItem: (name) => cart = cart.filter(item => name !== item.name),
// //         getTotal: () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
// //         viewCart: () => cart.map(item => `${item.name} (x${item.quantity}): $${item.price * item.quantity}`).join("\n")
// //     }
// // }



// // const myCart = createCart();

// // myCart.addItem('Apple', 1, 3); // 3 Apples
// // myCart.addItem('Banana', 0.5, 5); // 5 Bananas
// // myCart.addItem('Orange', 0.8, 2); // 2 Oranges

// // console.log("Cart Items:");
// // console.log(myCart.viewCart());

// // console.log(`Total: $${myCart.getTotal()}`);

// // myCart.removeItem('Banana');
// // console.log("\nCart after removing Banana:");
// // console.log(myCart.viewCart());

// // console.log(`Total after removal: $${myCart.getTotal()}`);








// // Create a function that simulates a simple inventory system:

// //     Add a product to the inventory with a name, quantity, and price.

// //     Remove a product from the inventory.

// //     Update product quantity (increase or decrease).

// //     Get the total value of the inventory (sum of quantity * price for all items).

// //     View all items in the inventory.



// // function createAuthSystem() {
// //     let user = null;

// //     return {
// //         login: (username, pass) => {
// //             if (pass == "1234") {
// //                 user = username;
// //                 console.log(`✅ User "Alice" logged in successfully!`);
// //             } else {
// //                 console.log(`❌ Incorrect password!`);
// //             }
// //         },
// //         logout: () => {
// //             if (user) {
// //                 console.log(`👋 User "Alice" logged out.`);
// //             } else {
// //                 console.log(`Wrong`);
// //             }
// //         },
// //         isLoggedIn: () => user !== null,
// //         getUser: () => user ? `🔹 Current user: ${user}` : `🔸 No user is logged in`
// //     }
// // }


// // const auth = createAuthSystem();

// // auth.login("Alice", "wrongpass"); // ❌ Incorrect password!
// // auth.login("Alice", "1234"); // ✅ User "Alice" logged in successfully!
// // console.log(auth.isLoggedIn()); // true
// // console.log(auth.getUser()); // 🔹 Current user: Alice

// // auth.logout(); // 👋 User "Alice" logged out.
// // console.log(auth.isLoggedIn()); // false
// // console.log(auth.getUser()); // 🔸 No user is logged in.





// function createTaskScheduler() {
//     let tasks = {};

//     return {
//         // Schedule a task
//         scheduleTask: function (taskName, delay, callback) {
//             if (tasks[taskName]) {
//                 console.log(`⚠️ Task "${taskName}" is already scheduled.`);
//                 return;
//             }

//             let timer = setTimeout(() => {
//                 callback();
//                 delete tasks[taskName]; // Remove task after execution
//             }, delay);

//             tasks[taskName] = timer;
//             console.log(`✅ Task "${taskName}" scheduled in ${delay / 1000} seconds.`);
//         },

//         // Cancel a scheduled task
//         cancelTask: function (taskName) {
//             if (tasks[taskName]) {
//                 clearTimeout(tasks[taskName]);
//                 delete tasks[taskName];
//                 console.log(`🚫 Task "${taskName}" canceled.`);
//             } else {
//                 console.log(`⚠️ Task "${taskName}" not found.`);
//             }
//         },

//         // Show pending tasks
//         showPendingTasks: function () {
//             let pending = Object.keys(tasks);
//             return pending.length ? `⏳ Pending tasks: ${pending.join(", ")}` : "✅ No pending tasks.";
//         }
//     };
// }

// // Example Usage
// const scheduler = createTaskScheduler();

// scheduler.scheduleTask("BackupDB", 5000, () => console.log("📀 Database backup completed."));
// scheduler.scheduleTask("SendEmail", 3000, () => console.log("📩 Email sent to user."));
// scheduler.scheduleTask("ClearCache", 7000, () => console.log("🗑️ Cache cleared."));

// console.log(scheduler.showPendingTasks());

// setTimeout(() => scheduler.cancelTask("SendEmail"), 2000); // Cancel before execution

// setTimeout(() => console.log(scheduler.showPendingTasks()), 6000); // Check remaining tasks
