class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }

  receive(sender, message) {
    const log = `[${sender}]: ${message}`;
    this.chatLog.push(log);
    console.log(`[${this.name}'s session received a message: ${log}]`)
  }

  say(message) {
    this.room.broadcast(this.name, message);
  }
}

class ChatRoom {
  constructor() {
    this.people = [];
  }

  join(p) {
    const log = `${p.name} joined the room`;
    this.people.push(p);
    p.room = this;
    this.broadcast(p.name, log);
  }

  broadcast(source, message) {
    for(let person of this.people) {
      if(person.name !== source) {
        person.receive(source, message)
      }
    }
  }

  message(source, destination, message) {
    source.send(destination, message);
    for(let person of destination) {
      if(person.name !== source) {
        person.receive(source, message)
      }
    }
  }
}

const funRoom = new ChatRoom();
const marian = new Person('Marian');
const oleh = new Person('Oleh');

funRoom.join(marian);
funRoom.join(oleh);

oleh.say('Hi there!');
marian.say('Hello Oleh, nice to meet you!');
