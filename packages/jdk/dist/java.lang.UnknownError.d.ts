declare namespace java {
    namespace lang {
        /**
         * Thrown when an unknown but serious exception has occurred in the
         * Java Virtual Machine.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class UnknownError extends java.lang.VirtualMachineError {
            /**
             * Constructs an <code>UnknownError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>UnknownError</code> with the specified detail
             * message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
