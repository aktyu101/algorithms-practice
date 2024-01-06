import { Queue } from "./queue.js";

class Customer {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }
}

class Cashier {
  constructor() {
    this.customers = new Queue();
  }

  addOrder(customer) {
    this.customers.enqueue(customer);
  }

  deliverOrder() {
    const finishedCustomer = this.customers.dequeue();
    console.log(
      `${finishedCustomer.name}, your ${finishedCustomer.order} is ready`
    );
  }
}

const cashier = new Cashier();
const customer1 = new Customer("jim", "fries");
const customer2 = new Customer("kebin", "coke");
const customer3 = new Customer("peter", "burger");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();
