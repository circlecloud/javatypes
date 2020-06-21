declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace util {
                            /**
                             * Interface of an object, which may be closed.
                             */
                            // @ts-ignore
                            interface Closeable {
                                /**
                                 * Closes the object.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                close(): void
                                /**
                                 * Returns, whether the object is already closed.
                                 * @return True, if the object is closed, otherwise false.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                isClosed(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
