declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when a method
         * does not terminate within the specified time limit.
         * This can happen, for example, if the user specifies that
         * the method should take no longer than 10 seconds, and the
         * method fails to complete with 10 seconds.
         * <p> Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class TimeLimitExceededException extends javax.naming.LimitExceededException {
            /**
             * Constructs a new instance of TimeLimitExceededException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of TimeLimitExceededException
             * using the argument supplied.
             * @param explanation possibly null detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
        }
    }
}
