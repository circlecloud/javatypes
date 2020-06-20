declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when there is a configuration problem.
         * This can arise when installation of a provider was
         * not done correctly, or if there are configuration problems with the
         * server, or if configuration information required to access
         * the provider or service is malformed or missing.
         * For example, a request to use SSL as the security protocol when
         * the service provider software was not configured with the SSL
         * component would cause such an exception. Another example is
         * if the provider requires that a URL be specified as one of the
         * environment properties but the client failed to provide it.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class ConfigurationException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of ConfigurationException using an
             * explanation. All other fields default to null.
             * @param explanation     A possibly null string containing
             *                           additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of ConfigurationException with
             * all name resolution fields and explanation initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
