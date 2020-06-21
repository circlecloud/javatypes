declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown to indicate that the result being returned
         * or returned so far is partial, and that the operation cannot
         * be completed.  For example, when listing a context, this exception
         * indicates that returned results only represents some of the bindings
         * in the context.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class PartialResultException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of the exception using the explanation
             * message specified. All other fields default to null.
             * @param explanation     Possibly null detail explaining the exception.
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
            /**
             * Constructs a new instance of PartialResultException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
