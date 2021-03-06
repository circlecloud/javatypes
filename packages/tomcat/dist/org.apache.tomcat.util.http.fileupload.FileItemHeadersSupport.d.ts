declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * Interface that will indicate that {@link FileItem} or {@link FileItemStream}
                         * implementations will accept the headers read for the item.
                         * @since 1.2.1
                         * @see FileItem
                         * @see FileItemStream
                         */
                        // @ts-ignore
                        interface FileItemHeadersSupport {
                            /**
                             * Returns the collection of headers defined locally within this item.
                             * @return the {#link FileItemHeaders} present for this item.
                             */
                            // @ts-ignore
                            getHeaders(): org.apache.tomcat.util.http.fileupload.FileItemHeaders
                            /**
                             * Sets the headers read from within an item.  Implementations of
                             * {@link FileItem} or {@link FileItemStream} should implement this
                             * interface to be able to get the raw headers found within the item
                             * header block.
                             * @param headers the instance that holds onto the headers
                             *          for this instance.
                             */
                            // @ts-ignore
                            setHeaders(headers: org.apache.tomcat.util.http.fileupload.FileItemHeaders): void
                        }
                    }
                }
            }
        }
    }
}
