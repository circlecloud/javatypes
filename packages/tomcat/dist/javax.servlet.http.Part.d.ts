declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * This class represents a part as uploaded to the server as part of a
             * <code>multipart/form-data</code> request body. The part may represent either
             * an uploaded file or form data.
             * @since Servlet 3.0
             */
            // @ts-ignore
            interface Part {
                /**
                 * Obtain an <code>InputStream</code> that can be used to retrieve the
                 * contents of the file.
                 * @return An InputStream for the contents of the file
                 * @throws IOException if an I/O occurs while obtaining the stream
                 */
                // @ts-ignore
                getInputStream(): java.io.InputStream
                /**
                 * Obtain the content type passed by the browser.
                 * @return The content type passed by the browser or <code>null</code> if
                 *          not defined.
                 */
                // @ts-ignore
                getContentType(): string
                /**
                 * Obtain the name of the field in the multipart form corresponding to this
                 * part.
                 * @return The name of the field in the multipart form corresponding to this
                 *          part.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * If this part represents an uploaded file, gets the file name submitted
                 * in the upload. Returns {@code null} if no file name is available or if
                 * this part is not a file upload.
                 * @return the submitted file name or {#code null}.
                 * @since Servlet 3.1
                 */
                // @ts-ignore
                getSubmittedFileName(): string
                /**
                 * Obtain the size of this part.
                 * @return The size of the part if bytes
                 */
                // @ts-ignore
                getSize(): number /*long*/
                /**
                 * A convenience method to write an uploaded part to disk. The client code
                 * is not concerned with whether or not the part is stored in memory, or on
                 * disk in a temporary location. They just want to write the uploaded part
                 * to a file.
                 * This method is not guaranteed to succeed if called more than once for
                 * the same part. This allows a particular implementation to use, for
                 * example, file renaming, where possible, rather than copying all of the
                 * underlying data, thus gaining a significant performance benefit.
                 * @param fileName  The location into which the uploaded part should be
                 *                   stored. Relative locations are relative to {#link
                 *                   javax.servlet.MultipartConfigElement#getLocation()}
                 * @throws IOException if an I/O occurs while attempting to write the part
                 */
                // @ts-ignore
                write(fileName: java.lang.String | string): void
                /**
                 * Deletes the underlying storage for a part, including deleting any
                 * associated temporary disk file. Although the container will delete this
                 * storage automatically this method can be used to ensure that this is done
                 * at an earlier time, thus preserving system resources.
                 * <p>
                 * Containers are only required to delete the associated storage when the
                 * Part instance is garbage collected. Apache Tomcat will delete the
                 * associated storage when the associated request has finished processing.
                 * Behaviour of other containers may be different.
                 * @throws IOException if an I/O occurs while attempting to delete the part
                 */
                // @ts-ignore
                delete(): void
                /**
                 * Obtains the value of the specified part header as a String. If there are
                 * multiple headers with the same name, this method returns the first header
                 * in the part. The header name is case insensitive.
                 * @param name  Header name
                 * @return The header value or <code>null</code> if the header is not
                 *               present
                 */
                // @ts-ignore
                getHeader(name: java.lang.String | string): string
                /**
                 * Obtain all the values of the specified part header.
                 * @param name The name of the header of interest. The header name is case
                 *              insensitive.
                 * @return All the values of the specified part header. If the part did not
                 *          include any headers of the specified name, this method returns an
                 *          empty Collection.
                 */
                // @ts-ignore
                getHeaders(name: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Get the header names provided for this part.
                 * @return a Collection of all the header names provided for this part.
                 */
                // @ts-ignore
                getHeaderNames(): Array<java.lang.String | string>
            }
        }
    }
}
