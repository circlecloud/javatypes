declare namespace javax {
    namespace management {
        /**
         * Wraps exceptions thrown by the preRegister(), preDeregister() methods
         * of the <CODE>MBeanRegistration</CODE> interface.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanRegistrationException extends javax.management.MBeanException {
            /**
             * Creates an <CODE>MBeanRegistrationException</CODE> that wraps
             * the actual <CODE>java.lang.Exception</CODE>.
             * @param e the wrapped exception.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception)
            /**
             * Creates an <CODE>MBeanRegistrationException</CODE> that wraps
             * the actual <CODE>java.lang.Exception</CODE> with a detailed
             * message.
             * @param e the wrapped exception.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception, message: java.lang.String | string)
        }
    }
}
