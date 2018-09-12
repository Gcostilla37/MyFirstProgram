class MyFirstProgram {

    constructor(...argArray: Array<any>){
        this.printArgs(argArray);

    }//constructor gets run first

    printArgs(argArray){
        console.log(argArray);
    }

    runFirst(callback:Function){
        console.log('this method runs first...!');
    }

    runLast(){
        console.log('this method runs last!!');
    }

    runMiddle(){
        console.log('this code run in between the other two functions ...');
    }
}

const newInstance = new MyFirstProgram ("a","b","c");