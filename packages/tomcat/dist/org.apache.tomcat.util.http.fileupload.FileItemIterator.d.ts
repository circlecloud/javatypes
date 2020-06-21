declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * An iterator, as returned by
                         * {@link FileUploadBase#getItemIterator(RequestContext)}.
                         */
                        // @ts-ignore
                        interface FileItemIterator {
                            /**
                             * Returns, whether another instance of {@link FileItemStream}
                             * is available.
                             * @throws FileUploadException Parsing or processing the
                             *    file item failed.
                             * @throws IOException Reading the file item failed.
                             * @return True, if one or more additional file items
                             *    are available, otherwise false.
                             */
                            // @ts-ignore
                            hasNext(): boolean
                            /**
                             * Returns the next available {@link FileItemStream}.
                             * @throws java.util.NoSuchElementException No more items are available. Use
                             *  {#link #hasNext()} to prevent this exception.
                             * @throws FileUploadException Parsing or processing the
                             *    file item failed.
                             * @throws IOException Reading the file item failed.
                             * @return FileItemStream instance, which provides
                             *    access to the next file item.
                             */
                            // @ts-ignore
                            next(): org.apache.tomcat.util.http.fileupload.FileItemStream
                        }
                    }
                }
            }
        }
    }
}
