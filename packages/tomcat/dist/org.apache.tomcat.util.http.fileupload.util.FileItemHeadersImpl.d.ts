declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace util {
                            /**
                             * Default implementation of the {@link FileItemHeaders} interface.
                             * @since 1.2.1
                             */
                            // @ts-ignore
                            class FileItemHeadersImpl extends java.lang.Object implements org.apache.tomcat.util.http.fileupload.FileItemHeaders, java.io.Serializable {
                                // @ts-ignore
                                constructor()
                                /**
                                 * {@inheritDoc}
                                 */
                                // @ts-ignore
                                public getHeader(name: java.lang.String | string): string
                                /**
                                 * {@inheritDoc}
                                 */
                                // @ts-ignore
                                public getHeaderNames(): java.util.Iterator<java.lang.String | string>
                                /**
                                 * {@inheritDoc}
                                 */
                                // @ts-ignore
                                public getHeaders(name: java.lang.String | string): java.util.Iterator<java.lang.String | string>
                                /**
                                 * Method to add header values to this instance.
                                 * @param name name of this header
                                 * @param value value of this header
                                 */
                                // @ts-ignore
                                public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                            }
                        }
                    }
                }
            }
        }
    }
}
