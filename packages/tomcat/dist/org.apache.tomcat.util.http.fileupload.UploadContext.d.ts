declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * Enhanced access to the request information needed for file uploads,
                         * which fixes the Content Length data access in {@link RequestContext}.
                         * The reason of introducing this new interface is just for backward compatibility
                         * and it might vanish for a refactored 2.x version moving the new method into
                         * RequestContext again.
                         * @since 1.3
                         */
                        // @ts-ignore
                        interface UploadContext extends org.apache.tomcat.util.http.fileupload.RequestContext {
                            /**
                             * Retrieve the content length of the request.
                             * @return The content length of the request.
                             * @since 1.3
                             */
                            // @ts-ignore
                            contentLength(): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
