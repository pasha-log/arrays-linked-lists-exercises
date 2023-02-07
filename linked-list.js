/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			let currentNode = this.head;
			this.head = newNode;
			this.head.next = currentNode;
		}
		this.length += 1;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (!this.head) {
			throw new Error('List is empty');
		}
		if (this.length === 1) {
			let val = this.head.val;
			this.head = null;
			this.tail = null;
			this.length -= 1;
			return val;
		} else {
			let val = this.tail.val;
			this.tail = this.head;
			this.length -= 1;
			return val;
		}
	}

	/** shift(): return & remove first item. */

	shift() {
		if (!this.head) {
			throw new Error('List is empty');
		}
		if (this.length === 1) {
			let val = this.head.val;
			this.head = null;
			this.tail = null;
			this.length -= 1;
			return val;
		} else {
			let val = this.head.val;
			this.head = this.tail;
			this.length -= 1;
			return val;
		}
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Index is invalid');
		}
		let currentNode = this.head.val;
		let count = 0;

		while (currentNode) {
			if (count === idx) {
				return currentNode;
			}

			count++;
			currentNode = this.head.next;
			return currentNode.val;
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Index is invalid');
		}
		let currentNode = this.head.val;
		let count = 0;

		while (currentNode) {
			if (count === idx) {
				this.head.val = val;
				break;
			}

			count++;
			currentNode = this.head.next;
			currentNode.val = val;
			break;
		}
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		let newNode = new Node(val); //instantiate a new node
		if (idx < 0 || idx > this.length) {
			throw new Error('Index is invalid');
		}
		if (idx === this.length && idx !== 0) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			if (!this.head) {
				// if we do not have any nodes in the list)
				this.head = newNode; // point newNode's pointer to the head
				this.tail = newNode; // point the head pointer to the newNode;
			} else {
				let prev = null; // set up a variable to hold the prev value
				let curr = this.head; // set a current variable to this.head (the start)
				let currIndex = 0;
				while (currIndex < idx) {
					currIndex++;
					// while the current index we're at is less than the position, we need to keep iterating
					prev = curr; // set prev variable equal to curr
					curr = curr.next; // skip to next node until we find the right position
				}
				newNode.next = curr; // after we find the position, set the new node's next to equal the current
				prev.next = newNode; // also set the previous node's next to equal the new node
			}
			this.length++;
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Index is invalid');
		}
		let currentNode = this.head.val;
		let count = 0;

		while (currentNode) {
			if (count === idx) {
				this.head = null;
				this.tail = null;
				this.length--;
				return currentNode;
			}

			count++;
			currentNode = this.head.next;
			currentNode = null;
			this.length--;
			return currentNode.val;
		}
	}

	/** average(): return an average of all values in the list */

	average() {
		if (!this.head) {
			return 0;
		} else {
			let currentNode = this.head;
			let sum = 0;
			let count = 0;
			while (currentNode !== null) {
				count++;
				sum += currentNode.val;
				currentNode = currentNode.next;
			}
			return sum / count;
		}
	}
}

module.exports = LinkedList;
