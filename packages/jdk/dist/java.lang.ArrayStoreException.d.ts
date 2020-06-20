declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that an attempt has been made to store the
         * wrong type of object into an array of objects. For example, the
         * following code generates an <code>ArrayStoreException</code>:
         * <blockquote><pre>
         * Object x[] = new String[3];
         * x[0] = new Integer(0);
         * </pre></blockquote>
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class ArrayStoreException extends java.lang.RuntimeException {
            /**
             * Constructs an <code>ArrayStoreException</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>ArrayStoreException</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
