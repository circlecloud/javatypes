declare namespace java {
    namespace io {
        /**
         * Indicates that one or more deserialized objects failed validation
         * tests.  The argument should provide the reason for the failure.
         * @see ObjectInputValidation
         * @since JDK1.1
         * @author unascribed
         * @since JDK1.1
         */
        // @ts-ignore
        class InvalidObjectException extends java.io.ObjectStreamException {
            /**
             * Constructs an <code>InvalidObjectException</code>.
             * @param reason Detailed message explaining the reason for the failure.
             * @see ObjectInputValidation
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string)
        }
    }
}
