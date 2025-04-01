import { Queue } from '../src/queue';

describe('Fila', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('deve iniciar com a fila vazia', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
    expect(queue.peek()).toBeNull();
  });

  test('deve enfileirar os elementos dentro da fila', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.length()).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  test('deve retirar elementos da fila', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.length()).toBe(2);
    expect(queue.peek()).toBe(2);

    expect(queue.dequeue()).toBe(2);
    expect(queue.length()).toBe(1);
    expect(queue.peek()).toBe(3);

    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeNull();
  });

  test('deve retornar nulo quando retirar de uma fila vazia', () => {
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });

  test('deve tratar corretamente a visualização', () => {
    expect(queue.peek()).toBeNull();

    queue.enqueue(10);
    expect(queue.peek()).toBe(10);

    queue.enqueue(20);
    expect(queue.peek()).toBe(10);

    queue.dequeue();
    expect(queue.peek()).toBe(20);
  });

  test('deve tratar o retorno de status vazio corretamente', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('deve retornar o tamanho corretamente', () => {
    expect(queue.length()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length()).toBe(2);

    queue.dequeue();
    expect(queue.length()).toBe(1);

    queue.dequeue();
    expect(queue.length()).toBe(0);
  });
});
