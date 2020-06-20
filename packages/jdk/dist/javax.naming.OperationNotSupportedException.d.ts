declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when a context implementation does not support
         * the operation being invoked.
         * For example, if a server does not support the Context.bind() method
         * it would throw OperationNotSupportedException when the bind() method
         * is invoked on it.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class OperationNotSupportedException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of OperationNotSupportedException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of OperationNotSupportedException using an
             * explanation. All other fields default to null.
             * @param explanation     Possibly null additional detail about this exception
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
        }
    }
}
