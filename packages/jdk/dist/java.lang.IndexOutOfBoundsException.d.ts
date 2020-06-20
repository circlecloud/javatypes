declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that an index of some sort (such as to an array, to a
         * string, or to a vector) is out of range.
         * <p>
         * Applications can subclass this class to indicate similar exceptions.
         * @author Frank Yellin
         * @since JDK1.0
         */
        // @ts-ignore
        class IndexOutOfBoundsException extends java.lang.RuntimeException {
            /**
             * Constructs an <code>IndexOutOfBoundsException</code> with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>IndexOutOfBoundsException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
