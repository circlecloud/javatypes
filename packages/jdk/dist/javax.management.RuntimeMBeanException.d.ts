declare namespace javax {
    namespace management {
        /**
         * Represents runtime exceptions thrown by MBean methods in
         * the agent. It "wraps" the actual <CODE>java.lang.RuntimeException</CODE> exception thrown.
         * This exception will be built by the MBeanServer when a call to an
         * MBean method throws a runtime exception.
         * @since 1.5
         */
        // @ts-ignore
        class RuntimeMBeanException extends javax.management.JMRuntimeException {
            /**
             * Creates a <CODE>RuntimeMBeanException</CODE> that wraps the actual <CODE>java.lang.RuntimeException</CODE>.
             * @param e the wrapped exception.
             */
            // @ts-ignore
            constructor(e: java.lang.RuntimeException)
            /**
             * Creates a <CODE>RuntimeMBeanException</CODE> that wraps the actual <CODE>java.lang.RuntimeException</CODE> with
             * a detailed message.
             * @param e the wrapped exception.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(e: java.lang.RuntimeException, message: java.lang.String | string)
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
            getCause(): Error
        }
    }
}
