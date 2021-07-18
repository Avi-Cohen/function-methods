// this examples:

function a() {
  //   console.log(this);
  this.newVariable = "hello"; // possible ?? => yes, Good practice ?? => NO!!
}
a();

const obj = {};
obj.name = "Avi";
// console.log(obj);

// console.log(newVariable); // Global variable

// console.log('\n\n');

const b = function () {
  const name = "avi";
  // console.log(this.name);
};

const c = {
  name: "The c object",
  log: function () {
    const self = this;
    console.log(self.name);
    console.log(this.name);
    self.name = "Updated c object";
    console.log(this);
    const setName = function (newName) {
      self.name = newName;
    };
    setName("Updated the c object again");
    console.log(self);
  },
};

c.log();
console.log('\n\n');

let name = 'global'

const person = {
    name: 'Jason',
    shout: function() {
        console.log('MY NAME IS: ' + this.name); // => global or Jason
    },
    shout2: () => {
        console.log('MY NAME IS: ' + this.name); // => global or Jason
    },
    // shorter syntax
    shout3() {
        console.log('MY NAME IS: ' + this.name); // => global or Jason
    }
}

person.shout();
person.shout2();
person.shout3();
