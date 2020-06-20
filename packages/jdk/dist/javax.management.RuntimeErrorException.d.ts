declare namespace javax {
    namespace management {
        /**
         * When a <CODE>java.lang.Error</CODE> occurs in the agent it should be caught and
         * re-thrown as a <CODE>RuntimeErrorException</CODE>.
         * @since 1.5
         */
        // @ts-ignore
        class RuntimeErrorException extends javax.management.JMRuntimeException {
            /**
             * Default constructor.
             * @param e the wrapped error.
             */
            // @ts-ignore
            constructor(e: java.lang.Error)
            /**
             * Constructor that allows a specific error message to be specified.
             * @param e the wrapped error.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(e: java.lang.Error, message: string)
            /**
             * Returns the actual {@link Error} thrown.
             * @return the wrapped {#link Error}.
             */
            // @ts-ignore
            getTargetError(): java.lang.Error
            /**
             * Returns the actual {@link Error} thrown.
             * @return the wrapped {#link Error}.
             */
            // @ts-ignore
            getCause(): java.lang.Throwable
        }
    }
}
