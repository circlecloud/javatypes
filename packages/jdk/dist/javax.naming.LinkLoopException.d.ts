declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when
         * a loop was detected will attempting to resolve a link, or an implementation
         * specific limit on link counts has been reached.
         * <p>
         * Synchronization and serialization issues that apply to LinkException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see LinkRef
         * @since 1.3
         */
        // @ts-ignore
        class LinkLoopException extends javax.naming.LinkException {
            /**
             * Constructs a new instance of LinkLoopException with an explanation
             * All the other fields are initialized to null.
             * @param explanation     A possibly null string containing additional
             *                          detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of LinkLoopException.
             * All the non-link-related and link-related fields are initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
