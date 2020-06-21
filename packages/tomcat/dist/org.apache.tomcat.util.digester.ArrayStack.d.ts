declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Imported copy of the <code>ArrayStack</code> class from
                     * Commons Collections, which was the only direct dependency from Digester.</p>
                     * <p><strong>WARNNG</strong> - This class is public solely to allow it to be
                     * used from subpackages of <code>org.apache.commons.digester</code>.
                     * It should not be considered part of the public API of Commons Digester.
                     * If you want to use such a class yourself, you should use the one from
                     * Commons Collections directly.</p>
                     * <p>An implementation of the {@link java.util.Stack} API that is based on an
                     * <code>ArrayList</code> instead of a <code>Vector</code>, so it is not
                     * synchronized to protect against multi-threaded access.  The implementation
                     * is therefore operates faster in environments where you do not need to
                     * worry about multiple thread contention.</p>
                     * <p>Unlike <code>Stack</code>, <code>ArrayStack</code> accepts null entries.
                     * </p>
                     * @param <E> Type of object in this stack
                     * @see java.util.Stack
                     * @since Digester 1.6 (from Commons Collections 1.0)
                     */
                    // @ts-ignore
                    class ArrayStack<E> extends java.util.ArrayList<E> {
                        /**
                         * Constructs a new empty <code>ArrayStack</code>. The initial size
                         * is controlled by <code>ArrayList</code> and is currently 10.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructs a new empty <code>ArrayStack</code> with an initial size.
                         * @param initialSize  the initial size to use
                         * @throws IllegalArgumentException  if the specified initial size
                         *   is negative
                         */
                        // @ts-ignore
                        constructor(initialSize: number /*int*/)
                        /**
                         * Return <code>true</code> if this stack is currently empty.
                         * <p>
                         * This method exists for compatibility with <code>java.util.Stack</code>.
                         * New users of this class should use <code>isEmpty</code> instead.
                         * @return true if the stack is currently empty
                         */
                        // @ts-ignore
                        public empty(): boolean
                        /**
                         * Returns the top item off of this stack without removing it.
                         * @return the top item on the stack
                         * @throws EmptyStackException  if the stack is empty
                         */
                        // @ts-ignore
                        public peek(): E
                        /**
                         * Returns the n'th item down (zero-relative) from the top of this
                         * stack without removing it.
                         * @param n  the number of items down to go
                         * @return the n'th item on the stack, zero relative
                         * @throws EmptyStackException  if there are not enough items on the
                         *   stack to satisfy this request
                         */
                        // @ts-ignore
                        public peek(n: number /*int*/): E
                        /**
                         * Pops the top item off of this stack and return it.
                         * @return the top item on the stack
                         * @throws EmptyStackException  if the stack is empty
                         */
                        // @ts-ignore
                        public pop(): E
                        /**
                         * Pushes a new item onto the top of this stack. The pushed item is also
                         * returned. This is equivalent to calling <code>add</code>.
                         * @param item  the item to be added
                         * @return the item just pushed
                         */
                        // @ts-ignore
                        public push(item: E): E
                    }
                }
            }
        }
    }
}
