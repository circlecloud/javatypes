declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when attempting to destroy a context that
         * is not empty.
         * <p>
         * If the program wants to handle this exception in particular, it
         * should catch ContextNotEmptyException explicitly before attempting to
         * catch NamingException. For example, after catching ContextNotEmptyException,
         * the program might try to remove the contents of the context before
         * reattempting the destroy.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see Context#destroySubcontext
         * @since 1.3
         */
        // @ts-ignore
        class ContextNotEmptyException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of ContextNotEmptyException using an
             * explanation. All other fields default to null.
             * @param explanation     Possibly null string containing
             *  additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
            /**
             * Constructs a new instance of ContextNotEmptyException with
             * all name resolution fields and explanation initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
