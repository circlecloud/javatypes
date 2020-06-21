declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown by methods to indicate that
         * a binding cannot be added because the name is already bound to
         * another object.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see Context#bind
         * @see Context#rebind
         * @see Context#createSubcontext
         * @see javax.naming.directory.DirContext#bind
         * @see javax.naming.directory.DirContext#rebind
         * @see javax.naming.directory.DirContext#createSubcontext
         * @since 1.3
         */
        // @ts-ignore
        class NameAlreadyBoundException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of NameAlreadyBoundException using the
             * explanation supplied. All other fields default to null.
             * @param explanation     Possibly null additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
            /**
             * Constructs a new instance of NameAlreadyBoundException.
             * All fields are set to null;
             */
            // @ts-ignore
            constructor()
        }
    }
}
