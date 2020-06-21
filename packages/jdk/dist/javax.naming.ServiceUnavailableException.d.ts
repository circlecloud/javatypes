declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when attempting to communicate with a
         * directory or naming service and that service is not available.
         * It might be unavailable for different reasons. For example,
         * the server might be too busy to service the request, or the server
         * might not be registered to service any requests, etc.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class ServiceUnavailableException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of ServiceUnavailableException using an
             * explanation. All other fields default to null.
             * @param explanation     Possibly null additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
            /**
             * Constructs a new instance of ServiceUnavailableException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
