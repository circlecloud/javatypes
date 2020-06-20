declare namespace java {
    namespace lang {
        /**
         * Thrown if the Java Virtual Machine cannot find an appropriate
         * native-language definition of a method declared <code>native</code>.
         * @author unascribed
         * @see java.lang.Runtime
         * @since JDK1.0
         */
        // @ts-ignore
        class UnsatisfiedLinkError extends java.lang.LinkageError {
            /**
             * Constructs an <code>UnsatisfiedLinkError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>UnsatisfiedLinkError</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
