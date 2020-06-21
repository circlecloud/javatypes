declare namespace java {
    namespace net {
        /**
         * Thrown to indicate that an unknown service exception has
         * occurred. Either the MIME type returned by a URL connection does
         * not make sense, or the application is attempting to write to a
         * read-only URL connection.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class UnknownServiceException extends java.io.IOException {
            /**
             * Constructs a new {@code UnknownServiceException} with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new {@code UnknownServiceException} with the
             * specified detail message.
             * @param msg   the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
