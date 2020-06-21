declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that a thread is not in an appropriate state
         * for the requested operation. See, for example, the
         * <code>suspend</code> and <code>resume</code> methods in class
         * <code>Thread</code>.
         * @author unascribed
         * @see java.lang.Thread#resume()
         * @see java.lang.Thread#suspend()
         * @since JDK1.0
         */
        // @ts-ignore
        class IllegalThreadStateException extends java.lang.IllegalArgumentException {
            /**
             * Constructs an <code>IllegalThreadStateException</code> with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>IllegalThreadStateException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
