declare namespace java {
    namespace util {
        /**
         * Thrown by various accessor methods to indicate that the element being requested
         * does not exist.
         * @author unascribed
         * @see java.util.Enumeration#nextElement()
         * @see java.util.Iterator#next()
         * @since JDK1.0
         */
        // @ts-ignore
        class NoSuchElementException extends java.lang.RuntimeException {
            /**
             * Constructs a <code>NoSuchElementException</code> with <tt>null</tt>
             * as its error message string.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>NoSuchElementException</code>, saving a reference
             * to the error message string <tt>s</tt> for later retrieval by the
             * <tt>getMessage</tt> method.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
