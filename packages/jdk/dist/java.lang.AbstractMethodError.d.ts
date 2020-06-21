declare namespace java {
    namespace lang {
        /**
         * Thrown when an application tries to call an abstract method.
         * Normally, this error is caught by the compiler; this error can
         * only occur at run time if the definition of some class has
         * incompatibly changed since the currently executing method was last
         * compiled.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class AbstractMethodError extends java.lang.IncompatibleClassChangeError {
            /**
             * Constructs an <code>AbstractMethodError</code> with no detail  message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>AbstractMethodError</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
