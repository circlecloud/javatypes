declare namespace javax {
    namespace management {
        /**
         * Represents exceptions thrown in the MBean server when using the
         * java.lang.reflect classes to invoke methods on MBeans. It "wraps" the
         * actual java.lang.Exception thrown.
         * @since 1.5
         */
        // @ts-ignore
        class ReflectionException extends javax.management.JMException {
            /**
             * Creates a <CODE>ReflectionException</CODE> that wraps the actual <CODE>java.lang.Exception</CODE>.
             * @param e the wrapped exception.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception)
            /**
             * Creates a <CODE>ReflectionException</CODE> that wraps the actual <CODE>java.lang.Exception</CODE> with
             * a detail message.
             * @param e the wrapped exception.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception, message: string)
            /**
             * Returns the actual {@link Exception} thrown.
             * @return the wrapped {#link Exception}.
             */
            // @ts-ignore
            getTargetException(): java.lang.Exception
            /**
             * Returns the actual {@link Exception} thrown.
             * @return the wrapped {#link Exception}.
             */
            // @ts-ignore
            getCause(): java.lang.Throwable
        }
    }
}
