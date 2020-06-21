declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * <p>Abstracts access to the request information needed for file uploads. This
                         * interface should be implemented for each type of request that may be
                         * handled by FileUpload, such as servlets and portlets.</p>
                         * @since FileUpload 1.1
                         */
                        // @ts-ignore
                        interface RequestContext {
                            /**
                             * Retrieve the character encoding for the request.
                             * @return The character encoding for the request.
                             */
                            // @ts-ignore
                            getCharacterEncoding(): string
                            /**
                             * Retrieve the content type of the request.
                             * @return The content type of the request.
                             */
                            // @ts-ignore
                            getContentType(): string
                            /**
                             * Retrieve the input stream for the request.
                             * @return The input stream for the request.
                             * @throws IOException if a problem occurs.
                             */
                            // @ts-ignore
                            getInputStream(): java.io.InputStream
                        }
                    }
                }
            }
        }
    }
}
