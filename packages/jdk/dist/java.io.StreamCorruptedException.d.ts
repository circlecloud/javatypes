declare namespace java {
    namespace io {
        /**
         * Thrown when control information that was read from an object stream
         * violates internal consistency checks.
         * @author unascribed
         * @since JDK1.1
         */
        // @ts-ignore
        class StreamCorruptedException extends java.io.ObjectStreamException {
            /**
             * Create a StreamCorruptedException and list a reason why thrown.
             * @param reason  String describing the reason for the exception.
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string)
            /**
             * Create a StreamCorruptedException and list no reason why thrown.
             */
            // @ts-ignore
            constructor()
        }
    }
}
