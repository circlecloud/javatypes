declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when a naming operation proceeds to a point
         * where a context is required to continue the operation, but the
         * resolved object is not a context. For example, Context.destroy() requires
         * that the named object be a context. If it is not, NotContextException
         * is thrown. Another example is a non-context being encountered during
         * the resolution phase of the Context methods.
         * <p>
         * It is also thrown when a particular subtype of context is required,
         * such as a DirContext, and the resolved object is a context but not of
         * the required subtype.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @see Context#destroySubcontext
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class NotContextException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of NotContextException using an
             * explanation. All other fields default to null.
             * @param explanation     Possibly null additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of NotContextException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
