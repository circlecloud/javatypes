declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace FileUploadBase {
                            /**
                             * Thrown to indicate that the request size exceeds the configured maximum.
                             */
                            // @ts-ignore
                            class SizeLimitExceededException extends org.apache.tomcat.util.http.fileupload.FileUploadBase.SizeException {
                                /**
                                 * Constructs a <code>SizeExceededException</code> with
                                 * the specified detail message, and actual and permitted sizes.
                                 * @param message   The detail message.
                                 * @param actual    The actual request size.
                                 * @param permitted The maximum permitted request size.
                                 */
                                // @ts-ignore
                                constructor(message: java.lang.String | string, actual: number /*long*/, permitted: number /*long*/)
                            }
                        }
                    }
                }
            }
        }
    }
}
