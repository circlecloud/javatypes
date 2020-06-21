declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace servlet {
                            /**
                             * <p>High level API for processing file uploads.</p>
                             * <p>This class handles multiple files per single HTML widget, sent using
                             * <code>multipart/mixed</code> encoding type, as specified by
                             * <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>.  Use {@link
                             * #parseRequest(org.apache.tomcat.util.http.fileupload.RequestContext)} to
                             * acquire a list of {@link org.apache.tomcat.util.http.fileupload.FileItem}s
                             * associated with a given HTML widget.</p>
                             * <p>How the data for individual parts is stored is determined by the factory
                             * used to create them; a given part may be in memory, on disk, or somewhere
                             * else.</p>
                             */
                            // @ts-ignore
                            class ServletFileUpload extends org.apache.tomcat.util.http.fileupload.FileUpload {
                                /**
                                 * Constructs an uninitialised instance of this class. A factory must be
                                 * configured, using <code>setFileItemFactory()</code>, before attempting
                                 * to parse requests.
                                 * @see FileUpload#FileUpload(FileItemFactory)
                                 */
                                // @ts-ignore
                                constructor()
                                /**
                                 * Constructs an instance of this class which uses the supplied factory to
                                 * create <code>FileItem</code> instances.
                                 * @see FileUpload#FileUpload()
                                 * @param fileItemFactory The factory to use for creating file items.
                                 */
                                // @ts-ignore
                                constructor(fileItemFactory: org.apache.tomcat.util.http.fileupload.FileItemFactory)
                                /**
                                 * Utility method that determines whether the request contains multipart
                                 * content.
                                 * @param request The servlet request to be evaluated. Must be non-null.
                                 * @return <code>true</code> if the request is multipart;
                                 *          <code>false</code> otherwise.
                                 */
                                // @ts-ignore
                                public static isMultipartContent(request: javax.servlet.http.HttpServletRequest): boolean
                                /**
                                 * Processes an <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>
                                 * compliant <code>multipart/form-data</code> stream.
                                 * @param request The servlet request to be parsed.
                                 * @return A map of <code>FileItem</code> instances parsed from the request.
                                 * @throws FileUploadException if there are problems reading/parsing
                                 *                              the request or storing files.
                                 * @since 1.3
                                 */
                                // @ts-ignore
                                public parseParameterMap(request: javax.servlet.http.HttpServletRequest): java.util.Map<java.lang.String | string, java.util.List<org.apache.tomcat.util.http.fileupload.FileItem> | Array<org.apache.tomcat.util.http.fileupload.FileItem>>
                                /**
                                 * Processes an <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>
                                 * compliant <code>multipart/form-data</code> stream.
                                 * @param request The servlet request to be parsed.
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
                                public getItemIterator(request: javax.servlet.http.HttpServletRequest): org.apache.tomcat.util.http.fileupload.FileItemIterator
                            }
                        }
                    }
                }
            }
        }
    }
}
