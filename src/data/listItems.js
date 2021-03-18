class ListItems extends Array{
  constructor(labels = null) {
    super();
    this.forEach.call(labels, (label, key) => this.push({label, key}))
  }

  add(label) {
    const key = this.length;
    this.push({ label, key });
    return [...this];
  }

  remove(key) {
    this.splice(key, 1);
    return [...this];
  }
}

const listItems = new ListItems(['Angular', 'jQuery', 'Polymer', 'React', 'Vue.js']);

export { listItems };
