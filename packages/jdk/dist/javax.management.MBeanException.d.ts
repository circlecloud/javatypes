declare namespace javax {
    namespace management {
        /**
         * Represents "user defined" exceptions thrown by MBean methods
         * in the agent. It "wraps" the actual "user defined" exception thrown.
         * This exception will be built by the MBeanServer when a call to an
         * MBean method results in an unknown exception.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanException extends javax.management.JMException {
            /**
             * Creates an <CODE>MBeanException</CODE> that wraps the actual <CODE>java.lang.Exception</CODE>.
             * @param e the wrapped exception.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception)
            /**
             * Creates an <CODE>MBeanException</CODE> that wraps the actual <CODE>java.lang.Exception</CODE> with
             * a detail message.
             * @param e the wrapped exception.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception, message: string)
            /**
             * Return the actual {@link Exception} thrown.
             * @return the wrapped exception.
             */
            // @ts-ignore
            getTargetException(): java.lang.Exception
            /**
             * Return the actual {@link Exception} thrown.
             * @return the wrapped exception.
             */
            // @ts-ignore
            getCause(): java.lang.Throwable
        }
    }
}
