declare namespace java {
    namespace security {
        /**
         * This exception is thrown if a key in the keystore cannot be recovered.
         * @since 1.2
         */
        // @ts-ignore
        class UnrecoverableKeyException extends java.security.UnrecoverableEntryException {
            /**
             * Constructs an UnrecoverableKeyException with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an UnrecoverableKeyException with the specified detail
             * message, which provides more information about why this exception
             * has been thrown.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
