const user = {
    name: 'Suman',
    cities: ['Trichy', 'Delhi', 'Bengaluru'],
    printPlacesLived: function () {
        console.log(this.name);

        const that = this;

        let ss = function(){
            console.log(that.name);
        }

        return ss();
    }
}

const multiplier = {
    rollNumbers: [2,7,16],
    multi: 2,
    increase(){
        return this.rollNumbers.map((roll) => roll * this.multi);
    }
}
user.printPlacesLived();

console.log(multiplier.increase());