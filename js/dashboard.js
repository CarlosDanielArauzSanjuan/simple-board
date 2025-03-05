import {findAllStudent} from "./students.js";
import {findAllCourse} from "./course.js";
import {findAllPayments} from "./payments.js";

const students = document.querySelector("#students > strong");
const course = document.querySelector("#course > strong");
const payment = document.querySelector("#payment > strong");

students.innerHTML = findAllStudent()
course.innerHTML = findAllCourse()

const money = JSON.parse(findAllPayments());
payment.dataset.format = money.format;
payment.innerHTML = money.total;