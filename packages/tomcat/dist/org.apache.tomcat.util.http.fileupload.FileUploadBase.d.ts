declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * <p>High level API for processing file uploads.</p>
                         * <p>This class handles multiple files per single HTML widget, sent using
                         * <code>multipart/mixed</code> encoding type, as specified by
                         * <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>.  Use {@link
                         * #parseRequest(RequestContext)} to acquire a list of {@link
                         * org.apache.tomcat.util.http.fileupload.FileItem}s associated with a given HTML
                         * widget.</p>
                         * <p>How the data for individual parts is stored is determined by the factory
                         * used to create them; a given part may be in memory, on disk, or somewhere
                         * else.</p>
                         */
                        // @ts-ignore
                        abstract class FileUploadBase extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * HTTP content type header name.
                             */
                            // @ts-ignore
                            public static readonly CONTENT_TYPE: java.lang.String | string
                            /**
                             * HTTP content disposition header name.
                             */
                            // @ts-ignore
                            public static readonly CONTENT_DISPOSITION: java.lang.String | string
                            /**
                             * HTTP content length header name.
                             */
                            // @ts-ignore
                            public static readonly CONTENT_LENGTH: java.lang.String | string
                            /**
                             * Content-disposition value for form data.
                             */
                            // @ts-ignore
                            public static readonly FORM_DATA: java.lang.String | string
                            /**
                             * Content-disposition value for file attachment.
                             */
                            // @ts-ignore
                            public static readonly ATTACHMENT: java.lang.String | string
                            /**
                             * Part of HTTP content type header.
                             */
                            // @ts-ignore
                            public static readonly MULTIPART: java.lang.String | string
                            /**
                             * HTTP content type header for multipart forms.
                             */
                            // @ts-ignore
                            public static readonly MULTIPART_FORM_DATA: java.lang.String | string
                            /**
                             * HTTP content type header for multiple uploads.
                             */
                            // @ts-ignore
                            public static readonly MULTIPART_MIXED: java.lang.String | string
                            /**
                             * <p>Utility method that determines whether the request contains multipart
                             * content.</p>
                             * <p><strong>NOTE:</strong>This method will be moved to the
                             * <code>ServletFileUpload</code> class after the FileUpload 1.1 release.
                             * Unfortunately, since this method is static, it is not possible to
                             * provide its replacement until this method is removed.</p>
                             * @param ctx The request context to be evaluated. Must be non-null.
                             * @return <code>true</code> if the request is multipart;
                             *          <code>false</code> otherwise.
                             */
                            // @ts-ignore
                            public static isMultipartContent(ctx: org.apache.tomcat.util.http.fileupload.RequestContext): boolean
                            /**
                             * Returns the factory class used when creating file items.
                             * @return The factory class for new file items.
                             */
                            // @ts-ignore
                            public abstract getFileItemFactory(): org.apache.tomcat.util.http.fileupload.FileItemFactory
                            /**
                             * Sets the factory class to use when creating file items.
                             * @param factory The factory class for new file items.
                             */
                            // @ts-ignore
                            public abstract setFileItemFactory(factory: org.apache.tomcat.util.http.fileupload.FileItemFactory): void
                            /**
                             * Returns the maximum allowed size of a complete request, as opposed
                             * to {@link #getFileSizeMax()}.
                             * @return The maximum allowed size, in bytes. The default value of
                             *    -1 indicates, that there is no limit.
                             * @see #setSizeMax(long)
                             */
                            // @ts-ignore
                            public getSizeMax(): number /*long*/
                            /**
                             * Sets the maximum allowed size of a complete request, as opposed
                             * to {@link #setFileSizeMax(long)}.
                             * @param sizeMax The maximum allowed size, in bytes. The default value of
                             *    -1 indicates, that there is no limit.
                             * @see #getSizeMax()
                             */
                            // @ts-ignore
                            public setSizeMax(sizeMax: number /*long*/): void
                            /**
                             * Returns the maximum allowed size of a single uploaded file,
                             * as opposed to {@link #getSizeMax()}.
                             * @see #setFileSizeMax(long)
                             * @return Maximum size of a single uploaded file.
                             */
                            // @ts-ignore
                            public getFileSizeMax(): number /*long*/
                            /**
                             * Sets the maximum allowed size of a single uploaded file,
                             * as opposed to {@link #getSizeMax()}.
                             * @see #getFileSizeMax()
                             * @param fileSizeMax Maximum size of a single uploaded file.
                             */
                            // @ts-ignore
                            public setFileSizeMax(fileSizeMax: number /*long*/): void
                            /**
                             * Retrieves the character encoding used when reading the headers of an
                             * individual part. When not specified, or <code>null</code>, the request
                             * encoding is used. If that is also not specified, or <code>null</code>,
                             * the platform default encoding is used.
                             * @return The encoding used to read part headers.
                             */
                            // @ts-ignore
                            public getHeaderEncoding(): string
                            /**
                             * Specifies the character encoding to be used when reading the headers of
                             * individual part. When not specified, or <code>null</code>, the request
                             * encoding is used. If that is also not specified, or <code>null</code>,
                             * the platform default encoding is used.
                             * @param encoding The encoding used to read part headers.
                             */
                            // @ts-ignore
                            public setHeaderEncoding(encoding: java.lang.String | string): void
                            /**
                             * Processes an <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>
                             * compliant <code>multipart/form-data</code> stream.
                             * @param ctx The context for the request to be parsed.
                             * @return An iterator to instances of <code>FileItemStream</code>
                             *          parsed from the request, in the order that they were
                             *          transmitted.
                             * @throws FileUploadException if there are problems reading/parsing
                             *                              the request or storing files.
                             * @throws IOException An I/O error occurred. This may be a network
                             *    error while communicating with the client or a problem while
                             *    storing the uploaded content.
                             */
                            // @ts-ignore
                            public getItemIterator(ctx: org.apache.tomcat.util.http.fileupload.RequestContext): org.apache.tomcat.util.http.fileupload.FileItemIterator
                            /**
                             * Processes an <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>
                             * compliant <code>multipart/form-data</code> stream.
                             * @param ctx The context for the request to be parsed.
                             * @return A list of <code>FileItem</code> instances parsed from the
                             *          request, in the order that they were transmitted.
                             * @throws FileUploadException if there are problems reading/parsing
                             *                              the request or storing files.
                             */
                            // @ts-ignore
                            public parseRequest(ctx: org.apache.tomcat.util.http.fileupload.RequestContext): Array<org.apache.tomcat.util.http.fileupload.FileItem>
                            /**
                             * Processes an <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>
                             * compliant <code>multipart/form-data</code> stream.
                             * @param ctx The context for the request to be parsed.
                             * @return A map of <code>FileItem</code> instances parsed from the request.
                             * @throws FileUploadException if there are problems reading/parsing
                             *                              the request or storing files.
                             * @since 1.3
                             */
                            // @ts-ignore
                            public parseParameterMap(ctx: org.apache.tomcat.util.http.fileupload.RequestContext): java.util.Map<java.lang.String | string, java.util.List<org.apache.tomcat.util.http.fileupload.FileItem> | Array<org.apache.tomcat.util.http.fileupload.FileItem>>
                            /**
                             * Retrieves the boundary from the <code>Content-type</code> header.
                             * @param contentType The value of the content type header from which to
                             *                     extract the boundary value.
                             * @return The boundary, as a byte array.
                             */
                            // @ts-ignore
                            getBoundary(contentType: java.lang.String | string): number /*byte*/[]
                            /**
                             * Retrieves the file name from the <code>Content-disposition</code>
                             * header.
                             * @param headers The HTTP headers object.
                             * @return The file name for the current <code>encapsulation</code>.
                             */
                            // @ts-ignore
                            getFileName(headers: org.apache.tomcat.util.http.fileupload.FileItemHeaders): string
                            /**
                             * Retrieves the field name from the <code>Content-disposition</code>
                             * header.
                             * @param headers A <code>Map</code> containing the HTTP request headers.
                             * @return The field name for the current <code>encapsulation</code>.
                             */
                            // @ts-ignore
                            getFieldName(headers: org.apache.tomcat.util.http.fileupload.FileItemHeaders): string
                            /**
                             * <p> Parses the <code>header-part</code> and returns as key/value
                             * pairs.
                             * <p> If there are multiple headers of the same names, the name
                             * will map to a comma-separated list containing the values.
                             * @param headerPart The <code>header-part</code> of the current
                             *                    <code>encapsulation</code>.
                             * @return A <code>Map</code> containing the parsed HTTP request headers.
                             */
                            // @ts-ignore
                            getParsedHeaders(headerPart: java.lang.String | string): org.apache.tomcat.util.http.fileupload.FileItemHeaders
                            /**
                             * Creates a new instance of {@link FileItemHeaders}.
                             * @return The new instance.
                             */
                            // @ts-ignore
                            newFileItemHeaders(): org.apache.tomcat.util.http.fileupload.util.FileItemHeadersImpl
                            /**
                             * Returns the progress listener.
                             * @return The progress listener, if any, or null.
                             */
                            // @ts-ignore
                            public getProgressListener(): org.apache.tomcat.util.http.fileupload.ProgressListener
                            /**
                             * Sets the progress listener.
                             * @param pListener The progress listener, if any. Defaults to null.
                             */
                            // @ts-ignore
                            public setProgressListener(pListener: org.apache.tomcat.util.http.fileupload.ProgressListener): void
                        }
                    }
                }
            }
        }
    }
}
