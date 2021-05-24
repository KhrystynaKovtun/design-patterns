class Event {
  constructor() {
    this.handlers = new Map();
    this.count = null;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(id) {
    this.handlers.delete(id);
  }

  fire(sender, args) {
    this.handlers.forEach((value, key) => value(sender, args));
  }
}

class VaccineProvider {
  constructor(address) {
    this.address = address;
    this.arrivedVaccineEvent = new Event();
  }

  arrivedVaccine(nameOfVaccine) {
    this.arrivedVaccineEvent.fire(this, {
      nameOfVaccine: nameOfVaccine,
      address: this.address,
    });
  }
}

const vaccineProvider = new VaccineProvider('Lviv, Antonovich street 123');
const oleh = vaccineProvider.arrivedVaccineEvent.subscribe(
  (sender, { nameOfVaccine, address }) => {
    console.log(`Oleh, vaccine ${nameOfVaccine} arrived to ${address}`);
  }
);
const marina = vaccineProvider.arrivedVaccineEvent.subscribe(
  (sender, { nameOfVaccine, address }) => {
    console.log(`Marina, vaccine ${nameOfVaccine} arrived to ${address}`);
  }
);

vaccineProvider.arrivedVaccine('Pfizer-BioNTech');
console.log("Marina is unsubscribed")
vaccineProvider.arrivedVaccineEvent.unsubscribe(marina);
vaccineProvider.arrivedVaccine('Pfizer-BioNTech');
