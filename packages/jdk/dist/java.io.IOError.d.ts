declare namespace java {
    namespace io {
        /**
         * Thrown when a serious I/O error has occurred.
         * @author Xueming Shen
         * @since 1.6
         */
        // @ts-ignore
        class IOError extends java.lang.Error {
            /**
             * Constructs a new instance of IOError with the specified cause. The
             * IOError is created with the detail message of
             * <tt>(cause==null ? null : cause.toString())</tt> (which typically
             * contains the class and detail message of cause).
             * @param cause
             *          The cause of this error, or <tt>null</tt> if the cause
             *          is not known
             */
            // @ts-ignore
            constructor(cause: Error)
        }
    }
}
