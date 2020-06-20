declare namespace java {
    namespace lang {
        /**
         * Thrown if an application tries to call a specified method of a
         * class (either static or instance), and that class no longer has a
         * definition of that method.
         * <p>
         * Normally, this error is caught by the compiler; this error can
         * only occur at run time if the definition of a class has
         * incompatibly changed.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class NoSuchMethodError extends java.lang.IncompatibleClassChangeError {
            /**
             * Constructs a <code>NoSuchMethodError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>NoSuchMethodError</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
