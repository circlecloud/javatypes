declare namespace javax {
    namespace management {
        /**
         * Exception which occurs when trying to register an  object in the MBean server that is not a JMX compliant MBean.
         * @since 1.5
         */
        // @ts-ignore
        class NotCompliantMBeanException extends javax.management.OperationsException {
            /**
             * Default constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructor that allows a specific error message to be specified.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(message: java.lang.String | string)
        }
    }
}
