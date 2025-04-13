const todayCon = document.querySelector(".today-page");
const pendingCon = document.querySelector(".pending-page");
const overdueCon = document.querySelector(".overdue-page");

const pageNav = document.querySelectorAll(".page-nav");
const pageContent = document.querySelectorAll(".page");

let curentPage = 0;

const swithPage = () => {
    const oldPage = document.querySelector(".page-nav.active");
    const oldContent = document.querySelector(".page.active-con");
    oldPage.classList.remove("active");
    oldContent.classList.remove("active-con");

    pageNav[curentPage].classList.add("active");
    pageContent[curentPage].classList.add("active-con");
}

pageNav.forEach((item, index) => {
    item.addEventListener("click", () => {
        curentPage = index;
        swithPage();
    })
})

const addTaskBtn = document.getElementById("add-task-btn");
const taskCon = document.querySelector(".task-details");

addTaskBtn.addEventListener("click", () => {
    taskCon.classList.toggle("active-details");
})

const closeBtn = document.querySelectorAll(".close-btn");

closeBtn.forEach(item => {
    item.addEventListener("click", () => {
        taskCon.classList.remove("active-details");
    })
})

const createListItem = (tag, option = {}) => {
    const elem = document.createElement(tag);

    if (option?.className) {
        elem.classList.add(option.className);
    }

    if (option?.id) {
        elem.id = option.id;
    }

    if (option?.imageSrc) {
        elem.src = option.imageSrc;
    }

    return elem;
};

const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleFromForm = document.getElementById("title").value;
    const dateFromForm = document.getElementById("dateInp").value;

    const task = {
        title: titleFromForm,
        date: dateFromForm,
        isDone: false
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))

    renderTask(task); // Render the new task immediately

    myForm.reset()
});

function showToast(message) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function renderTask(task) {
    const newItem = createListItem("li");
    const lefSideCon = createListItem("div", { className: "left-side" });
    const lefSideConTitle = createListItem("span");
    lefSideConTitle.textContent = task.title;
    const lefSideConInput = createListItem("input", { id: "thick" });
    lefSideConInput.type = "checkbox";
    lefSideConInput.checked = task.isDone;

    const rightSideCon = createListItem("div", { className: "right-side" });
    const rightSideConFirstCon = createListItem("div", { className: "right-side-first-con" });
    const rightSideConFirstConImg = createListItem("img", { imageSrc: "./clock-svgrepo-com.svg" });
    const rightSideConFirstConSpan = createListItem("span");
    rightSideConFirstConSpan.textContent = task.date;

    const rightSideConSecondCon = createListItem("div", { className: "right-side-second-con" });
    const rightSideConSecondConImg = createListItem("img", { imageSrc: "./pencil-svgrepo-com.svg" });
    const rightSideConSecondConSpan = createListItem("span");

    newItem.appendChild(lefSideCon);
    lefSideCon.appendChild(lefSideConInput);
    lefSideCon.appendChild(lefSideConTitle);

    newItem.appendChild(rightSideCon);
    rightSideCon.appendChild(rightSideConFirstCon);
    rightSideConFirstCon.appendChild(rightSideConFirstConImg);
    rightSideConFirstCon.appendChild(rightSideConFirstConSpan);

    rightSideCon.appendChild(rightSideConSecondCon);
    rightSideConSecondCon.appendChild(rightSideConSecondConImg);
    rightSideConSecondCon.appendChild(rightSideConSecondConSpan);

    const todayList = document.querySelector(".today-page ul");
    const completedList = document.querySelector(".completed-task ul");

    if (task.isDone) {
        completedList.appendChild(newItem);
    } else {
        todayList.appendChild(newItem);
    }

    lefSideConInput.addEventListener("change", () => {
        task.isDone = lefSideConInput.checked;
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        const updatedTasks = tasks.map(t => {
            if (t.title === task.title && t.date === task.date) {
                return { ...t, isDone: task.isDone };
            }
            return t;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        showToast("დავალების სტატუსი განახლდა!");

        const currentParent = newItem.parentElement;
        currentParent.removeChild(newItem);

        if (task.isDone) {
            completedList.appendChild(newItem);
        } else {
            todayList.appendChild(newItem);
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        renderTask(task);
    });

    const showCompleted = JSON.parse(localStorage.getItem("showCompletedTasks"));
    const downArrow = document.querySelector("#down-arrow img");
    const completedTaskUl = document.querySelector(".completed-task ul");

    if (showCompleted) {
        downArrow.classList.add("down-arrow-rotated");
        completedTaskUl.classList.add("active-details");
    }
});

const downArrow = document.querySelector("#down-arrow img");

downArrow.addEventListener("click", () => {
    const completedTaskUl = document.querySelector(".completed-task ul");

    downArrow.classList.toggle("down-arrow-rotated");
    completedTaskUl.classList.toggle("active-details");

    const isExpanded = completedTaskUl.classList.contains("active-details");
    localStorage.setItem("showCompletedTasks", JSON.stringify(isExpanded));
});