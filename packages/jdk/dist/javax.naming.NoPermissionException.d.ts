declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when attempting to perform an operation
         * for which the client has no permission. The access control/permission
         * model is dictated by the directory/naming server.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class NoPermissionException extends javax.naming.NamingSecurityException {
            /**
             * Constructs a new instance of NoPermissionException using an
             * explanation. All other fields default to null.
             * @param explanation     Possibly null additional detail about this exception.
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of NoPermissionException.
             * All fields are initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
