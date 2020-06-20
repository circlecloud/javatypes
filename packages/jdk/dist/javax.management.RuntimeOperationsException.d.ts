declare namespace javax {
    namespace management {
        /**
         * Represents runtime exceptions thrown in the agent when performing operations on MBeans.
         * It wraps the actual <CODE>java.lang.RuntimeException</CODE> thrown.
         * @since 1.5
         */
        // @ts-ignore
        class RuntimeOperationsException extends javax.management.JMRuntimeException {
            /**
             * Creates a <CODE>RuntimeOperationsException</CODE> that wraps the actual <CODE>java.lang.RuntimeException</CODE>.
             * @param e the wrapped exception.
             */
            // @ts-ignore
            constructor(e: java.lang.RuntimeException)
            /**
             * Creates a <CODE>RuntimeOperationsException</CODE> that wraps the actual <CODE>java.lang.RuntimeException</CODE>
             * with a detailed message.
             * @param e the wrapped exception.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(e: java.lang.RuntimeException, message: string)
            /**
             * Returns the actual {@link RuntimeException} thrown.
             * @return the wrapped {#link RuntimeException}.
             */
            // @ts-ignore
            getTargetException(): java.lang.RuntimeException
            /**
             * Returns the actual {@link RuntimeException} thrown.
             * @return the wrapped {#link RuntimeException}.
             */
            // @ts-ignore
            getCause(): java.lang.Throwable
        }
    }
}
