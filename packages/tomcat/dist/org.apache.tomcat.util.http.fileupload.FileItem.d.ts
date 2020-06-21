declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * <p> This class represents a file or form item that was received within a
                         * <code>multipart/form-data</code> POST request.
                         * <p> After retrieving an instance of this class from a {@link
                         * org.apache.tomcat.util.http.fileupload.FileUpload FileUpload} instance (see
                         * {@link org.apache.tomcat.util.http.fileupload.FileUpload
                         * #parseRequest(RequestContext)}), you may
                         * either request all contents of the file at once using {@link #get()} or
                         * request an {@link java.io.InputStream InputStream} with
                         * {@link #getInputStream()} and process the file without attempting to load
                         * it into memory, which may come handy with large files.
                         * <p> While this interface does not extend
                         * <code>javax.activation.DataSource</code> per se (to avoid a seldom used
                         * dependency), several of the defined methods are specifically defined with
                         * the same signatures as methods in that interface. This allows an
                         * implementation of this interface to also implement
                         * <code>javax.activation.DataSource</code> with minimal additional work.
                         * @since 1.3 additionally implements FileItemHeadersSupport
                         */
                        // @ts-ignore
                        interface FileItem extends org.apache.tomcat.util.http.fileupload.FileItemHeadersSupport {
                            /**
                             * Returns an {@link java.io.InputStream InputStream} that can be
                             * used to retrieve the contents of the file.
                             * @return An {#link java.io.InputStream InputStream} that can be
                             *          used to retrieve the contents of the file.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            getInputStream(): java.io.InputStream
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
                             * @throws InvalidFileNameException The file name contains a NUL character,
                             *    which might be an indicator of a security attack. If you intend to
                             *    use the file name anyways, catch the exception and use
                             *    InvalidFileNameException#getName().
                             */
                            // @ts-ignore
                            getName(): string
                            /**
                             * Provides a hint as to whether or not the file contents will be read
                             * from memory.
                             * @return <code>true</code> if the file contents will be read from memory;
                             *          <code>false</code> otherwise.
                             */
                            // @ts-ignore
                            isInMemory(): boolean
                            /**
                             * Returns the size of the file item.
                             * @return The size of the file item, in bytes.
                             */
                            // @ts-ignore
                            getSize(): number /*long*/
                            /**
                             * Returns the contents of the file item as an array of bytes.
                             * @return The contents of the file item as an array of bytes.
                             */
                            // @ts-ignore
                            get(): number /*byte*/[]
                            /**
                             * Returns the contents of the file item as a String, using the specified
                             * encoding.  This method uses {@link #get()} to retrieve the
                             * contents of the item.
                             * @param encoding The character encoding to use.
                             * @return The contents of the item, as a string.
                             * @throws UnsupportedEncodingException if the requested character
                             *                                       encoding is not available.
                             */
                            // @ts-ignore
                            getString(encoding: java.lang.String | string): string
                            /**
                             * Returns the contents of the file item as a String, using the default
                             * character encoding.  This method uses {@link #get()} to retrieve the
                             * contents of the item.
                             * @return The contents of the item, as a string.
                             */
                            // @ts-ignore
                            getString(): string
                            /**
                             * A convenience method to write an uploaded item to disk. The client code
                             * is not concerned with whether or not the item is stored in memory, or on
                             * disk in a temporary location. They just want to write the uploaded item
                             * to a file.
                             * <p>
                             * This method is not guaranteed to succeed if called more than once for
                             * the same item. This allows a particular implementation to use, for
                             * example, file renaming, where possible, rather than copying all of the
                             * underlying data, thus gaining a significant performance benefit.
                             * @param file The <code>File</code> into which the uploaded item should
                             *              be stored.
                             * @throws Exception if an error occurs.
                             */
                            // @ts-ignore
                            write(file: java.io.File): void
                            /**
                             * Deletes the underlying storage for a file item, including deleting any
                             * associated temporary disk file. Although this storage will be deleted
                             * automatically when the <code>FileItem</code> instance is garbage
                             * collected, this method can be used to ensure that this is done at an
                             * earlier time, thus preserving system resources.
                             */
                            // @ts-ignore
                            delete(): void
                            /**
                             * Returns the name of the field in the multipart form corresponding to
                             * this file item.
                             * @return The name of the form field.
                             */
                            // @ts-ignore
                            getFieldName(): string
                            /**
                             * Sets the field name used to reference this file item.
                             * @param name The name of the form field.
                             */
                            // @ts-ignore
                            setFieldName(name: java.lang.String | string): void
                            /**
                             * Determines whether or not a <code>FileItem</code> instance represents
                             * a simple form field.
                             * @return <code>true</code> if the instance represents a simple form
                             *          field; <code>false</code> if it represents an uploaded file.
                             */
                            // @ts-ignore
                            isFormField(): boolean
                            /**
                             * Specifies whether or not a <code>FileItem</code> instance represents
                             * a simple form field.
                             * @param state <code>true</code> if the instance represents a simple form
                             *               field; <code>false</code> if it represents an uploaded file.
                             */
                            // @ts-ignore
                            setFormField(state: boolean): void
                            /**
                             * Returns an {@link java.io.OutputStream OutputStream} that can
                             * be used for storing the contents of the file.
                             * @return An {#link java.io.OutputStream OutputStream} that can be used
                             *          for storing the contensts of the file.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            getOutputStream(): java.io.OutputStream
                        }
                    }
                }
            }
        }
    }
}
