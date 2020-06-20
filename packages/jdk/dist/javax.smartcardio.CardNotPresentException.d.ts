declare namespace javax {
    namespace smartcardio {
        /**
         * Exception thrown when an application tries to establish a connection with a
         * terminal that has no card present.
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class CardNotPresentException extends javax.smartcardio.CardException {
            /**
             * Constructs a new CardNotPresentException with the specified detail message.
             * @param message the detail message
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new CardNotPresentException with the specified cause and a detail message
             * of <code>(cause==null ? null : cause.toString())</code>.
             * @param cause the cause of this exception or null
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs a new CardNotPresentException with the specified detail message and cause.
             * @param message the detail message
             * @param cause the cause of this exception or null
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
        }
    }
}
