declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * <p> This interface provides access to a file or form item that was
                         * received within a <code>multipart/form-data</code> POST request.
                         * The items contents are retrieved by calling {@link #openStream()}.</p>
                         * <p>Instances of this class are created by accessing the
                         * iterator, returned by
                         * {@link FileUploadBase#getItemIterator(RequestContext)}.</p>
                         * <p><em>Note</em>: There is an interaction between the iterator and
                         * its associated instances of {@link FileItemStream}: By invoking
                         * {@link java.util.Iterator#hasNext()} on the iterator, you discard all data,
                         * which hasn't been read so far from the previous data.</p>
                         */
                        // @ts-ignore
                        interface FileItemStream extends org.apache.tomcat.util.http.fileupload.FileItemHeadersSupport {
                            /**
                             * Creates an {@link InputStream}, which allows to read the
                             * items contents.
                             * @return The input stream, from which the items data may
                             *    be read.
                             * @throws IllegalStateException The method was already invoked on
                             *  this item. It is not possible to recreate the data stream.
                             * @throws IOException An I/O error occurred.
                             * @see ItemSkippedException
                             */
                            // @ts-ignore
                            openStream(): java.io.InputStream
                            /**
                             * Returns the content type passed by the browser or <code>null</code> if
                             * not defined.
                             * @return The content type passed by the browser or <code>null</code> if
                             *          not defined.
                             */
                            // @ts-ignore
                            getContentType(): string
                            /**
                             * Returns the original filename in the client's filesystem, as provided by
                             * the browser (or other client software). In most cases, this will be the
                             * base file name, without path information. However, some clients, such as
                             * the Opera browser, do include path information.
                             * @return The original filename in the client's filesystem.
                             */
                            // @ts-ignore
                            getName(): string
                            /**
                             * Returns the name of the field in the multipart form corresponding to
                             * this file item.
                             * @return The name of the form field.
                             */
                            // @ts-ignore
                            getFieldName(): string
                            /**
                             * Determines whether or not a <code>FileItem</code> instance represents
                             * a simple form field.
                             * @return <code>true</code> if the instance represents a simple form
                             *          field; <code>false</code> if it represents an uploaded file.
                             */
                            // @ts-ignore
                            isFormField(): boolean
                        }
                    }
                }
            }
        }
    }
}
