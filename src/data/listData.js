const keyGen = (() => {
  let key = 0;

  return () => key++;
})();

class ListData extends Array{

  constructor(labels = null) {
    super();
    this.forEach.call(labels, (label, key) => this.push({label, key, count: 0}));
  }

  getByKey(key) {
    let index = null;
    this.find((item, i) => (index = i, item.key === key));
    return index;
  }

  incrementCount(key) {
    let i = this.getByKey(key);
    this[i].count++;
    return [...this];
  }

  add(label) {
    let key = keyGen();

    this.push({ label, key, count: 0 });
    return [...this];
  }

  remove(key) {

    this.splice(this.getByKey(key), 1);
    console.log(this)
    return [...this];
  }
}

const listData = new ListData(['Angular', 'jQuery', 'Polymer', 'React', 'Vue.js']);

export { listData };
