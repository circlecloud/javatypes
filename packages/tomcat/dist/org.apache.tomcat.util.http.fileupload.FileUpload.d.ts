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
                         * #parseRequest(RequestContext)} to acquire a list
                         * of {@link org.apache.tomcat.util.http.fileupload.FileItem FileItems} associated
                         * with a given HTML widget.</p>
                         * <p>How the data for individual parts is stored is determined by the factory
                         * used to create them; a given part may be in memory, on disk, or somewhere
                         * else.</p>
                         */
                        // @ts-ignore
                        class FileUpload extends org.apache.tomcat.util.http.fileupload.FileUploadBase {
                            /**
                             * Constructs an uninitialised instance of this class.
                             * A factory must be
                             * configured, using <code>setFileItemFactory()</code>, before attempting
                             * to parse requests.
                             * @see #FileUpload(FileItemFactory)
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Constructs an instance of this class which uses the supplied factory to
                             * create <code>FileItem</code> instances.
                             * @see #FileUpload()
                             * @param fileItemFactory The factory to use for creating file items.
                             */
                            // @ts-ignore
                            constructor(fileItemFactory: org.apache.tomcat.util.http.fileupload.FileItemFactory)
                            /**
                             * Returns the factory class used when creating file items.
                             * @return The factory class for new file items.
                             */
                            // @ts-ignore
                            public getFileItemFactory(): org.apache.tomcat.util.http.fileupload.FileItemFactory
                            /**
                             * Sets the factory class to use when creating file items.
                             * @param factory The factory class for new file items.
                             */
                            // @ts-ignore
                            public setFileItemFactory(factory: org.apache.tomcat.util.http.fileupload.FileItemFactory): void
                        }
                    }
                }
            }
        }
    }
}
