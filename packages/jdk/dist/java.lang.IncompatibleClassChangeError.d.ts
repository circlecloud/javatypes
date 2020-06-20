declare namespace java {
    namespace lang {
        /**
         * Thrown when an incompatible class change has occurred to some class
         * definition. The definition of some class, on which the currently
         * executing method depends, has since changed.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class IncompatibleClassChangeError extends java.lang.LinkageError {
            /**
             * Constructs an <code>IncompatibleClassChangeError</code> with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>IncompatibleClassChangeError</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
