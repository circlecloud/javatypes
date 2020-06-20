declare namespace javax {
    namespace smartcardio {
        /**
         * Exception for errors that occur during communication with the
         * Smart Card stack or the card itself.
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class CardException extends java.lang.Exception {
            /**
             * Constructs a new CardException with the specified detail message.
             * @param message the detail message
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new CardException with the specified cause and a detail message
             * of <code>(cause==null ? null : cause.toString())</code>.
             * @param cause the cause of this exception or null
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs a new CardException with the specified detail message and cause.
             * @param message the detail message
             * @param cause the cause of this exception or null
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
        }
    }
}
