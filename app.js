const menu = {
    _coures: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
   get appetizers() {
    return this. _courses.appetizers;
   },
   get mains() {
     return this._courses.mains;
   },
   get desserts() {
   return this._courses.desserts;
   },
   set appetizers(appetizers) {
   this._courses.appetizers = appetizers;
   },
   set mains(mains){
     this._courses.mains = mains;
   },
   set desserts(dessert) {
     this._courses.desserts = desserts;
   },
   get courses() {
     return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts,
     };
   },
   addDishToCourse (courseName, dishName, dishPrices) {
     const dish = {
   name: dishName,
   prices: dishPrices,
     };
     return this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse(courses) {
   const dishes = this._courses[coursesName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
   },
   getRandomDishFromCourse() {
     const appetizers = this.getRandomDishFromCourse('appetizers');
     const mains = this.getRandomDishFromCourse('mains');
     const desserts = this.getRandomDishFromCourse('desserts');
     const totalPrices = appetizer.price + main.price + dessert.ptrices;
     return `your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrics}`;
   }
   };
   menu.addDishToCourse('appetizers', 'salad', 4.00);
   menu.addDishToCourse('appetizers', 'wings', 4.50);
   menu.addDishToCourse('appetizers', 'fries', 5.00);
   
   menu.addDishToCourse('mains', 'steak', 10.25);
   menu.addDishToCourse('mains', 'salmon', 7.75);
   menu.addDishToCourse('mains', 'tufo', 11.20);
   
   menu.addDishToCourse('desserts', 'ice cream', 3.00);
   menu.addDishToCourse('desserts', 'coffee', 3.00);
   menu.addDishToCourse('desserts', 'coke', 3.25);
   
   const meal = menu.generateRandomMeal();
   console.log(meal);
   