declare namespace java {
    namespace lang {
        /**
         * Thrown when the Java Virtual Machine cannot allocate an object
         * because it is out of memory, and no more memory could be made
         * available by the garbage collector.
         * {@code OutOfMemoryError} objects may be constructed by the virtual
         * machine as if {@linkplain Throwable#Throwable(String, Throwable,
         * boolean, boolean) suppression were disabled and/or the stack trace was not
         * writable}.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class OutOfMemoryError extends java.lang.VirtualMachineError {
            /**
             * Constructs an {@code OutOfMemoryError} with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an {@code OutOfMemoryError} with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
