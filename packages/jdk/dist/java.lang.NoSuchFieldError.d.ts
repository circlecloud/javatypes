declare namespace java {
    namespace lang {
        /**
         * Thrown if an application tries to access or modify a specified
         * field of an object, and that object no longer has that field.
         * <p>
         * Normally, this error is caught by the compiler; this error can
         * only occur at run time if the definition of a class has
         * incompatibly changed.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class NoSuchFieldError extends java.lang.IncompatibleClassChangeError {
            /**
             * Constructs a <code>NoSuchFieldError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>NoSuchFieldError</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
