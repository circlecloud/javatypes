declare namespace java {
    namespace lang {
        /**
         * Thrown when an exceptional arithmetic condition has occurred. For
         * example, an integer "divide by zero" throws an
         * instance of this class.
         * {@code ArithmeticException} objects may be constructed by the
         * virtual machine as if {@linkplain Throwable#Throwable(String,
         * Throwable, boolean, boolean) suppression were disabled and/or the
         * stack trace was not writable}.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class ArithmeticException extends java.lang.RuntimeException {
            /**
             * Constructs an {@code ArithmeticException} with no detail
             * message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an {@code ArithmeticException} with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
