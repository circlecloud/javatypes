declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace disk {
                            /**
                             * <p> The default implementation of the
                             * {@link org.apache.tomcat.util.http.fileupload.FileItem FileItem} interface.
                             * <p> After retrieving an instance of this class from a {@link
                             * org.apache.tomcat.util.http.fileupload.FileUpload FileUpload} instance (see
                             * {@link org.apache.tomcat.util.http.fileupload.FileUpload
                             * #parseRequest(org.apache.tomcat.util.http.fileupload.RequestContext)}), you
                             * may either request all contents of file at once using {@link #get()} or
                             * request an {@link java.io.InputStream InputStream} with
                             * {@link #getInputStream()} and process the file without attempting to load
                             * it into memory, which may come handy with large files.
                             * <p>Temporary files, which are created for file items, should be
                             * deleted later on.</p>
                             * @since FileUpload 1.1
                             */
                            // @ts-ignore
                            class DiskFileItem extends java.lang.Object implements org.apache.tomcat.util.http.fileupload.FileItem {
                                /**
                                 * Constructs a new <code>DiskFileItem</code> instance.
                                 * @param fieldName     The name of the form field.
                                 * @param contentType   The content type passed by the browser or
                                 *                       <code>null</code> if not specified.
                                 * @param isFormField   Whether or not this item is a plain form field, as
                                 *                       opposed to a file upload.
                                 * @param fileName      The original filename in the user's filesystem, or
                                 *                       <code>null</code> if not specified.
                                 * @param sizeThreshold The threshold, in bytes, below which items will be
                                 *                       retained in memory and above which they will be
                                 *                       stored as a file.
                                 * @param repository    The data repository, which is the directory in
                                 *                       which files will be created, should the item size
                                 *                       exceed the threshold.
                                 */
                                // @ts-ignore
                                constructor(fieldName: java.lang.String | string, contentType: java.lang.String | string, isFormField: boolean, fileName: java.lang.String | string, sizeThreshold: number /*int*/, repository: java.io.File)
                                /**
                                 * Default content charset to be used when no explicit charset
                                 * parameter is provided by the sender. Media subtypes of the
                                 * "text" type are defined to have a default charset value of
                                 * "ISO-8859-1" when received via HTTP.
                                 */
                                // @ts-ignore
                                public static readonly DEFAULT_CHARSET: java.lang.String | string
                                /**
                                 * Returns an {@link java.io.InputStream InputStream} that can be
                                 * used to retrieve the contents of the file.
                                 * @return An {#link java.io.InputStream InputStream} that can be
                                 *          used to retrieve the contents of the file.
                                 * @throws IOException if an error occurs.
                                 */
                                // @ts-ignore
                                public getInputStream(): java.io.InputStream
                                /**
                                 * Returns the content type passed by the agent or <code>null</code> if
                                 * not defined.
                                 * @return The content type passed by the agent or <code>null</code> if
                                 *          not defined.
                                 */
                                // @ts-ignore
                                public getContentType(): string
                                /**
                                 * Returns the content charset passed by the agent or <code>null</code> if
                                 * not defined.
                                 * @return The content charset passed by the agent or <code>null</code> if
                                 *          not defined.
                                 */
                                // @ts-ignore
                                public getCharSet(): string
                                /**
                                 * Returns the original filename in the client's filesystem.
                                 * @return The original filename in the client's filesystem.
                                 * @throws org.apache.tomcat.util.http.fileupload.InvalidFileNameException
                                 *    The file name contains a NUL character, which might be an indicator of
                                 *    a security attack. If you intend to use the file name anyways, catch
                                 *    the exception and use {#link
                                 *    org.apache.tomcat.util.http.fileupload.InvalidFileNameException#getName()}.
                                 */
                                // @ts-ignore
                                public getName(): string
                                /**
                                 * Provides a hint as to whether or not the file contents will be read
                                 * from memory.
                                 * @return <code>true</code> if the file contents will be read
                                 *          from memory; <code>false</code> otherwise.
                                 */
                                // @ts-ignore
                                public isInMemory(): boolean
                                /**
                                 * Returns the size of the file.
                                 * @return The size of the file, in bytes.
                                 */
                                // @ts-ignore
                                public getSize(): number /*long*/
                                /**
                                 * Returns the contents of the file as an array of bytes.  If the
                                 * contents of the file were not yet cached in memory, they will be
                                 * loaded from the disk storage and cached.
                                 * @return The contents of the file as an array of bytes
                                 *  or {#code null} if the data cannot be read
                                 */
                                // @ts-ignore
                                public get(): number /*byte*/[]
                                /**
                                 * Returns the contents of the file as a String, using the specified
                                 * encoding.  This method uses {@link #get()} to retrieve the
                                 * contents of the file.
                                 * @param charset The charset to use.
                                 * @return The contents of the file, as a string.
                                 * @throws UnsupportedEncodingException if the requested character
                                 *                                       encoding is not available.
                                 */
                                // @ts-ignore
                                public getString(charset: java.lang.String | string): string
                                /**
                                 * Returns the contents of the file as a String, using the default
                                 * character encoding.  This method uses {@link #get()} to retrieve the
                                 * contents of the file.
                                 * <b>TODO</b> Consider making this method throw UnsupportedEncodingException.
                                 * @return The contents of the file, as a string.
                                 */
                                // @ts-ignore
                                public getString(): string
                                /**
                                 * A convenience method to write an uploaded item to disk. The client code
                                 * is not concerned with whether or not the item is stored in memory, or on
                                 * disk in a temporary location. They just want to write the uploaded item
                                 * to a file.
                                 * <p>
                                 * This implementation first attempts to rename the uploaded item to the
                                 * specified destination file, if the item was originally written to disk.
                                 * Otherwise, the data will be copied to the specified file.
                                 * <p>
                                 * This method is only guaranteed to work <em>once</em>, the first time it
                                 * is invoked for a particular item. This is because, in the event that the
                                 * method renames a temporary file, that file will no longer be available
                                 * to copy or rename again at a later time.
                                 * @param file The <code>File</code> into which the uploaded item should
                                 *              be stored.
                                 * @throws Exception if an error occurs.
                                 */
                                // @ts-ignore
                                public write(file: java.io.File): void
                                /**
                                 * Deletes the underlying storage for a file item, including deleting any
                                 * associated temporary disk file. Although this storage will be deleted
                                 * automatically when the <code>FileItem</code> instance is garbage
                                 * collected, this method can be used to ensure that this is done at an
                                 * earlier time, thus preserving system resources.
                                 */
                                // @ts-ignore
                                public delete(): void
                                /**
                                 * Returns the name of the field in the multipart form corresponding to
                                 * this file item.
                                 * @return The name of the form field.
                                 * @see #setFieldName(java.lang.String)
                                 */
                                // @ts-ignore
                                public getFieldName(): string
                                /**
                                 * Sets the field name used to reference this file item.
                                 * @param fieldName The name of the form field.
                                 * @see #getFieldName()
                                 */
                                // @ts-ignore
                                public setFieldName(fieldName: java.lang.String | string): void
                                /**
                                 * Determines whether or not a <code>FileItem</code> instance represents
                                 * a simple form field.
                                 * @return <code>true</code> if the instance represents a simple form
                                 *          field; <code>false</code> if it represents an uploaded file.
                                 * @see #setFormField(boolean)
                                 */
                                // @ts-ignore
                                public isFormField(): boolean
                                /**
                                 * Specifies whether or not a <code>FileItem</code> instance represents
                                 * a simple form field.
                                 * @param state <code>true</code> if the instance represents a simple form
                                 *               field; <code>false</code> if it represents an uploaded file.
                                 * @see #isFormField()
                                 */
                                // @ts-ignore
                                public setFormField(state: boolean): void
                                /**
                                 * Returns an {@link java.io.OutputStream OutputStream} that can
                                 * be used for storing the contents of the file.
                                 * @return An {#link java.io.OutputStream OutputStream} that can be used
                                 *          for storing the contents of the file.
                                 * @throws IOException if an error occurs.
                                 */
                                // @ts-ignore
                                public getOutputStream(): java.io.OutputStream
                                /**
                                 * Returns the {@link java.io.File} object for the <code>FileItem</code>'s
                                 * data's temporary location on the disk. Note that for
                                 * <code>FileItem</code>s that have their data stored in memory,
                                 * this method will return <code>null</code>. When handling large
                                 * files, you can use {@link java.io.File#renameTo(java.io.File)} to
                                 * move the file to new location without copying the data, if the
                                 * source and destination locations reside within the same logical
                                 * volume.
                                 * @return The data file, or <code>null</code> if the data is stored in
                                 *          memory.
                                 */
                                // @ts-ignore
                                public getStoreLocation(): java.io.File
                                /**
                                 * Removes the file contents from the temporary storage.
                                 */
                                // @ts-ignore
                                finalize(): void
                                /**
                                 * Creates and returns a {@link java.io.File File} representing a uniquely
                                 * named temporary file in the configured repository path. The lifetime of
                                 * the file is tied to the lifetime of the <code>FileItem</code> instance;
                                 * the file will be deleted when the instance is garbage collected.
                                 * <p>
                                 * <b>Note: Subclasses that override this method must ensure that they return the
                                 * same File each time.</b>
                                 * @return The {#link java.io.File File} to be used for temporary storage.
                                 */
                                // @ts-ignore
                                getTempFile(): java.io.File
                                /**
                                 * Returns a string representation of this object.
                                 * @return a string representation of this object.
                                 */
                                // @ts-ignore
                                public toString(): string
                                /**
                                 * Returns the file item headers.
                                 * @return The file items headers.
                                 */
                                // @ts-ignore
                                public getHeaders(): org.apache.tomcat.util.http.fileupload.FileItemHeaders
                                /**
                                 * Sets the file item headers.
                                 * @param pHeaders The file items headers.
                                 */
                                // @ts-ignore
                                public setHeaders(pHeaders: org.apache.tomcat.util.http.fileupload.FileItemHeaders): void
                                /**
                                 * Returns the default charset for use when no explicit charset
                                 * parameter is provided by the sender.
                                 * @return the default charset
                                 */
                                // @ts-ignore
                                public getDefaultCharset(): string
                                /**
                                 * Sets the default charset for use when no explicit charset
                                 * parameter is provided by the sender.
                                 * @param charset the default charset
                                 */
                                // @ts-ignore
                                public setDefaultCharset(charset: java.lang.String | string): void
                            }
                        }
                    }
                }
            }
        }
    }
}
