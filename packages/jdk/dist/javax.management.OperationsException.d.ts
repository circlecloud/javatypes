declare namespace javax {
    namespace management {
        /**
         * Represents exceptions thrown in the MBean server when performing operations
         * on MBeans.
         * @since 1.5
         */
        // @ts-ignore
        class OperationsException extends javax.management.JMException {
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
            constructor(message: string)
        }
    }
}
