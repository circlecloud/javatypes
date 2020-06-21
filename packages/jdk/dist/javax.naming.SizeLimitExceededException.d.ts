declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when a method
         * produces a result that exceeds a size-related limit.
         * This can happen, for example, if the result contains
         * more objects than the user requested, or when the size
         * of the result exceeds some implementation-specific limit.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class SizeLimitExceededException extends javax.naming.LimitExceededException {
            /**
             * Constructs a new instance of SizeLimitExceededException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of SizeLimitExceededException using an
             * explanation. All other fields default to null.
             * @param explanation Possibly null detail about this exception.
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
        }
    }
}
