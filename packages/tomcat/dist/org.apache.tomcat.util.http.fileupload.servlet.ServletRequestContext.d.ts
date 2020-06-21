declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace servlet {
                            /**
                             * <p>Provides access to the request information needed for a request made to
                             * an HTTP servlet.</p>
                             * @since FileUpload 1.1
                             */
                            // @ts-ignore
                            class ServletRequestContext extends java.lang.Object implements org.apache.tomcat.util.http.fileupload.UploadContext {
                                /**
                                 * Construct a context for this request.
                                 * @param request The request to which this context applies.
                                 */
                                // @ts-ignore
                                constructor(request: javax.servlet.http.HttpServletRequest)
                                /**
                                 * Retrieve the character encoding for the request.
                                 * @return The character encoding for the request.
                                 */
                                // @ts-ignore
                                public getCharacterEncoding(): string
                                /**
                                 * Retrieve the content type of the request.
                                 * @return The content type of the request.
                                 */
                                // @ts-ignore
                                public getContentType(): string
                                /**
                                 * Retrieve the content length of the request.
                                 * @return The content length of the request.
                                 * @since 1.3
                                 */
                                // @ts-ignore
                                public contentLength(): number /*long*/
                                /**
                                 * Retrieve the input stream for the request.
                                 * @return The input stream for the request.
                                 * @throws IOException if a problem occurs.
                                 */
                                // @ts-ignore
                                public getInputStream(): java.io.InputStream
                                /**
                                 * Returns a string representation of this object.
                                 * @return a string representation of this object.
                                 */
                                // @ts-ignore
                                public toString(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
