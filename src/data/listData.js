import { uuid } from 'uuidv4';

class ListData extends Array{

  constructor(labels = null) {
    super();
    this.forEach.call(labels, (label) => this.push({label, key: uuid(), count: 0}));
  }

  getByKey(key) {
    let index = null;
    this.find((item, i) => (index = i, item.key === key));
    return index;
  }

  incrementCount(key) {

    this[this.getByKey(key)].count++;
    console.log(this);
    return [...this];
  }

  add(label) {
    label = label.trim();
    if (!label) return;
    let key = uuid();
    this.push({ label, key, count: 0 });
    console.log(this);
    return [...this];
  }

  remove(key) {

    this.splice(this.getByKey(key), 1);
    console.log(this)
    return [...this];
  }
}

const listData = new ListData(['Ruby', 'JavaScrypt', 'C++', 'C', 'Pascal']);

export { listData };
