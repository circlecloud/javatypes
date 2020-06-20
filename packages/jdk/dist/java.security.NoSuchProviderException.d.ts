declare namespace java {
    namespace security {
        /**
         * This exception is thrown when a particular security provider is
         * requested but is not available in the environment.
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class NoSuchProviderException extends java.security.GeneralSecurityException {
            /**
             * Constructs a NoSuchProviderException with no detail message. A
             * detail message is a String that describes this particular
             * exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a NoSuchProviderException with the specified detail
             * message. A detail message is a String that describes this
             * particular exception.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: string)
        }
    }
}
