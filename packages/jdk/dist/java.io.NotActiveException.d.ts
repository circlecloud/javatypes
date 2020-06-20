declare namespace java {
    namespace io {
        /**
         * Thrown when serialization or deserialization is not active.
         * @author unascribed
         * @since JDK1.1
         */
        // @ts-ignore
        class NotActiveException extends java.io.ObjectStreamException {
            /**
             * Constructor to create a new NotActiveException with the reason given.
             * @param reason  a String describing the reason for the exception.
             */
            // @ts-ignore
            constructor(reason: string)
            /**
             * Constructor to create a new NotActiveException without a reason.
             */
            // @ts-ignore
            constructor()
        }
    }
}
