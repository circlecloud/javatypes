declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when a malformed link was encountered while
         * resolving or constructing a link.
         * <p>
         * Synchronization and serialization issues that apply to LinkException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see LinkRef#getLinkName
         * @see LinkRef
         * @since 1.3
         */
        // @ts-ignore
        class MalformedLinkException extends javax.naming.LinkException {
            /**
             * Constructs a new instance of MalformedLinkException with an explanation
             * All the other fields are initialized to null.
             * @param explanation     A possibly null string containing additional
             *                          detail about this exception.
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
            /**
             * Constructs a new instance of Malformed LinkException.
             * All fields are initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
