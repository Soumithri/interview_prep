// Feel free to add new properties and methods to the class.
class MinMaxStack {
	
	constructor() {
		this.stack = new Array();
	}
    peek() {
        if (this.stack.length === 0) {
            //console.log('peek: ', this.stack);
            return ('Stack is Empty. Cannot pop an item');
            
        }
        //console.log('peek: ', this.stack, 'result: ', this.stack[this.stack.length - 1].val);
    return this.stack[this.stack.length - 1].val;
    }

    pop() {
        // check if the stack is empty
        if (this.stack.length === 0) {
            return ('Stack is Empty. Cannot pop an item');
        }
        var poppedValue = this.stack.pop().val;
        //console.log('pop', this.stack);
        return poppedValue;
    }

    push(number) {
        // whenever you push into the stack
        // record the min and max value
        var min, max;
        // console.log(number);
        // console.log(this.stack);
        if (this.stack.length === 0) {
            min = number;
            max = number;
        }
        else {
            min = this.stack[this.stack.length - 1].min;
            max = this.stack[this.stack.length - 1].max;
            min = Math.min(number, min);
            max = Math.max(number, max);
        }
        //console.log(min, max, number)
        this.stack.push(
            {
                val: number,
                min: min,
                max: max
            });
    //console.log('push: ', this.stack);
    }

    getMin() {
        var min = this.stack[this.stack.length - 1].min;
        //console.log('getMax: ', this.stack, 'result: ', min);
        return min;
    }

    getMax() {
        var max = this.stack[this.stack.length - 1].max;
        //console.log('getMax: ', this.stack, 'result: ', max);
        return max;
    }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
