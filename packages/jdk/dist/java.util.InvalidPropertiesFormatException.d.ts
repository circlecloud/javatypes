declare namespace java {
    namespace util {
        /**
         * Thrown to indicate that an operation could not complete because
         * the input did not conform to the appropriate XML document type
         * for a collection of properties, as per the {@link Properties}
         * specification.<p>
         * Note, that although InvalidPropertiesFormatException inherits Serializable
         * interface from Exception, it is not intended to be Serializable. Appropriate
         * serialization methods are implemented to throw NotSerializableException.
         * @see Properties
         * @since 1.5
         * @serial exclude
         */
        // @ts-ignore
        class InvalidPropertiesFormatException extends java.io.IOException {
            /**
             * Constructs an InvalidPropertiesFormatException with the specified
             * cause.
             * @param cause the cause (which is saved for later retrieval by the
             *          {#link Throwable#getCause()} method).
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs an InvalidPropertiesFormatException with the specified
             * detail message.
             * @param message   the detail message. The detail message is saved for
             *           later retrieval by the {#link Throwable#getMessage()} method.
             */
            // @ts-ignore
            constructor(message: string)
        }
    }
}
