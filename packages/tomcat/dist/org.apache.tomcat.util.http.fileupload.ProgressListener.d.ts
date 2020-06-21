declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * The {@link ProgressListener} may be used to display a progress bar
                         * or do stuff like that.
                         */
                        // @ts-ignore
                        interface ProgressListener {
                            /**
                             * Updates the listeners status information.
                             * @param pBytesRead The total number of bytes, which have been read
                             *    so far.
                             * @param pContentLength The total number of bytes, which are being
                             *    read. May be -1, if this number is unknown.
                             * @param pItems The number of the field, which is currently being
                             *    read. (0 = no item so far, 1 = first item is being read, ...)
                             */
                            // @ts-ignore
                            update(pBytesRead: number /*long*/, pContentLength: number /*long*/, pItems: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
