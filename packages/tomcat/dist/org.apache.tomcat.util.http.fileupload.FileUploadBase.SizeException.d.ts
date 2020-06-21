declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace FileUploadBase {
                            /**
                             * This exception is thrown, if a requests permitted size
                             * is exceeded.
                             */
                            // @ts-ignore
                            abstract class SizeException extends org.apache.tomcat.util.http.fileupload.FileUploadException {
                                /**
                                 * Creates a new instance.
                                 * @param message The detail message.
                                 * @param actual The actual number of bytes in the request.
                                 * @param permitted The requests size limit, in bytes.
                                 */
                                // @ts-ignore
                                constructor(message: java.lang.String | string, actual: number /*long*/, permitted: number /*long*/)
                                /**
                                 * Retrieves the actual size of the request.
                                 * @return The actual size of the request.
                                 * @since 1.3
                                 */
                                // @ts-ignore
                                getActualSize(): number /*long*/
                                /**
                                 * Retrieves the permitted size of the request.
                                 * @return The permitted size of the request.
                                 * @since 1.3
                                 */
                                // @ts-ignore
                                getPermittedSize(): number /*long*/
                            }
                        }
                    }
                }
            }
        }
    }
}
