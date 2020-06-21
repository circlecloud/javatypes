declare namespace java {
    namespace io {
        /**
         * Signals that a sync operation has failed.
         * @author Ken Arnold
         * @see java.io.FileDescriptor#sync
         * @see java.io.IOException
         * @since JDK1.1
         */
        // @ts-ignore
        class SyncFailedException extends java.io.IOException {
            /**
             * Constructs an SyncFailedException with a detail message.
             * A detail message is a String that describes this particular exception.
             * @param desc  a String describing the exception.
             */
            // @ts-ignore
            constructor(desc: java.lang.String | string)
        }
    }
}
