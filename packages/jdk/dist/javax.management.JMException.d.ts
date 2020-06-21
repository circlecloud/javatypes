declare namespace javax {
    namespace management {
        /**
         * Exceptions thrown by JMX implementations.
         * It does not include the runtime exceptions.
         * @since 1.5
         */
        // @ts-ignore
        class JMException extends java.lang.Exception {
            /**
             * Default constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructor that allows a specific error message to be specified.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
