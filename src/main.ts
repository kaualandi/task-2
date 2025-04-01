import { Queue } from './queue';
import { Stack } from './stack';

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

console.log('Pilha antes da remoção:');
let currentStack = stack['top'];
while (currentStack) {
  console.log(currentStack.data);
  currentStack = currentStack.next;
}

const removedValue = stack.pop();
console.log(`\nValor removido: ${removedValue}`);

console.log('\nPilha depois da remoção:');
currentStack = stack['top'];
while (currentStack) {
  console.log(currentStack.data);
  currentStack = currentStack.next;
}

console.log('\n--------------------\n');

const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Fila depois de adicionar os elementos:');
let currentQueue = queue['start'];
while (currentQueue) {
  process.stdout.write(`${currentQueue.data} -> `);
  currentQueue = currentQueue.next;
}
console.log('None');

const removed = queue.dequeue();
console.log(`\nElemento removido: ${removed}`);

console.log('\nFila depois de remover:');
currentQueue = queue['start'];
while (currentQueue) {
  process.stdout.write(`${currentQueue.data} -> `);
  currentQueue = currentQueue.next;
}
console.log('None');
