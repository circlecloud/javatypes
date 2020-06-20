declare namespace java {
    namespace lang {
        /**
         * Thrown when a stack overflow occurs because an application
         * recurses too deeply.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class StackOverflowError extends java.lang.VirtualMachineError {
            /**
             * Constructs a <code>StackOverflowError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>StackOverflowError</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
