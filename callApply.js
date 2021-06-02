const normalParson = {
        firstName : "korim",
        lastName : "Uddin",
        salary : 5000,
        getFullname :function(){
                console.log(this.firstName + this.lastName);
        },
        chargeBill : function(amount) {
                this.salary = this.salary - amount;
                return this.salary

                
        }
};
const happyFriend = {
        firstName : "kolim",
        lastName :"uddin",
        salary:20000 
} 

const goodFriend = {
        firstName : "molim",
         lastName :"uddin",
         salary:5000 


}
const bestFriend = {
        firstName : "solim",
         lastName :"uddin",
         salary:8000 


}

//  bind
const happyChargeBill = normalParson.chargeBill.bind(happyFriend);
 happyChargeBill(500)
 console.log(happyFriend.salary);
//  call
normalParson.chargeBill.call(goodFriend,1000)
 console.log(goodFriend.salary);
// apply
normalParson.chargeBill.apply(bestFriend,[3000])
console.log(bestFriend.salary);
normalParson.chargeBill(100)

console.log(normalParson.salary);
