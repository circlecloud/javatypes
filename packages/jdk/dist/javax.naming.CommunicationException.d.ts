declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when the client is
         * unable to communicate with the directory or naming service.
         * The inability to communicate with the service might be a result
         * of many factors, such as network partitioning, hardware or interface problems,
         * failures on either the client or server side.
         * This exception is meant to be used to capture such communication problems.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class CommunicationException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of CommunicationException using the
             * arguments supplied.
             * @param explanation     Additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of CommunicationException.
             */
            // @ts-ignore
            constructor()
        }
    }
}
