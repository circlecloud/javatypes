declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when a component of the name cannot be resolved
         * because it is not bound.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class NameNotFoundException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of NameNotFoundException using the
             * explanation supplied. All other fields default to null.
             * @param explanation     Possibly null additional detail about
             *                           this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of NameNotFoundException.
             * all name resolution fields and explanation initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
