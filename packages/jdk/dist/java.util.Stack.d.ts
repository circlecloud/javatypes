declare namespace java {
    namespace util {
        /**
         * The <code>Stack</code> class represents a last-in-first-out
         * (LIFO) stack of objects. It extends class <tt>Vector</tt> with five
         * operations that allow a vector to be treated as a stack. The usual
         * <tt>push</tt> and <tt>pop</tt> operations are provided, as well as a
         * method to <tt>peek</tt> at the top item on the stack, a method to test
         * for whether the stack is <tt>empty</tt>, and a method to <tt>search</tt>
         * the stack for an item and discover how far it is from the top.
         * <p>
         * When a stack is first created, it contains no items.
         * <p>A more complete and consistent set of LIFO stack operations is
         * provided by the {@link Deque} interface and its implementations, which
         * should be used in preference to this class.  For example:
         * <pre>   {@code
         * Deque<Integer> stack = new ArrayDeque<Integer>();}</pre>
         * @author Jonathan Payne
         * @since JDK1.0
         */
        // @ts-ignore
        class Stack<E> extends java.util.Vector<E> {
            /**
             * Creates an empty Stack.
             */
            // @ts-ignore
            constructor()
            /**
             * Pushes an item onto the top of this stack. This has exactly
             * the same effect as:
             * <blockquote><pre>
             * addElement(item)</pre></blockquote>
             * @param item   the item to be pushed onto this stack.
             * @return the <code>item</code> argument.
             * @see java.util.Vector#addElement
             */
            // @ts-ignore
            public push(item: E): E
            /**
             * Removes the object at the top of this stack and returns that
             * object as the value of this function.
             * @return The object at the top of this stack (the last item
             *           of the <tt>Vector</tt> object).
             * @throws EmptyStackException  if this stack is empty.
             */
            // @ts-ignore
            public pop(): E
            /**
             * Looks at the object at the top of this stack without removing it
             * from the stack.
             * @return the object at the top of this stack (the last item
             *           of the <tt>Vector</tt> object).
             * @throws EmptyStackException  if this stack is empty.
             */
            // @ts-ignore
            public peek(): E
            /**
             * Tests if this stack is empty.
             * @return <code>true</code> if and only if this stack contains
             *           no items; <code>false</code> otherwise.
             */
            // @ts-ignore
            public empty(): boolean
            /**
             * Returns the 1-based position where an object is on this stack.
             * If the object <tt>o</tt> occurs as an item in this stack, this
             * method returns the distance from the top of the stack of the
             * occurrence nearest the top of the stack; the topmost item on the
             * stack is considered to be at distance <tt>1</tt>. The <tt>equals</tt>
             * method is used to compare <tt>o</tt> to the
             * items in this stack.
             * @param o   the desired object.
             * @return the 1-based position from the top of the stack where
             *           the object is located; the return value <code>-1</code>
             *           indicates that the object is not on the stack.
             */
            // @ts-ignore
            public search(o: java.lang.Object | any): number /*int*/
        }
    }
}
