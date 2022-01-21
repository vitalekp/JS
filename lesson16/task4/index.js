/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

function bar() {
  let foo = 1;

  if (!foo) {
    foo = 10;
  }

  return foo;
}

var foo = bar();
console.log(foo);

export default foo;
