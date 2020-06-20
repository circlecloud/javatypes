declare namespace java {
    namespace lang {
        /**
         * Thrown if an application attempts to access or modify a field, or
         * to call a method that it does not have access to.
         * <p>
         * Normally, this error is caught by the compiler; this error can
         * only occur at run time if the definition of a class has
         * incompatibly changed.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class IllegalAccessError extends java.lang.IncompatibleClassChangeError {
            /**
             * Constructs an <code>IllegalAccessError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>IllegalAccessError</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
