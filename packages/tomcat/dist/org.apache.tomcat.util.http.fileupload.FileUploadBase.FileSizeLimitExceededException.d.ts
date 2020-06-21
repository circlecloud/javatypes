declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace FileUploadBase {
                            /**
                             * Thrown to indicate that A files size exceeds the configured maximum.
                             */
                            // @ts-ignore
                            class FileSizeLimitExceededException extends org.apache.tomcat.util.http.fileupload.FileUploadBase.SizeException {
                                /**
                                 * Constructs a <code>SizeExceededException</code> with
                                 * the specified detail message, and actual and permitted sizes.
                                 * @param message   The detail message.
                                 * @param actual    The actual request size.
                                 * @param permitted The maximum permitted request size.
                                 */
                                // @ts-ignore
                                constructor(message: java.lang.String | string, actual: number /*long*/, permitted: number /*long*/)
                                /**
                                 * Returns the file name of the item, which caused the
                                 * exception.
                                 * @return File name, if known, or null.
                                 */
                                // @ts-ignore
                                getFileName(): string
                                /**
                                 * Sets the file name of the item, which caused the
                                 * exception.
                                 * @param pFileName the file name of the item, which caused the exception.
                                 */
                                // @ts-ignore
                                setFileName(pFileName: java.lang.String | string): void
                                /**
                                 * Returns the field name of the item, which caused the
                                 * exception.
                                 * @return Field name, if known, or null.
                                 */
                                // @ts-ignore
                                getFieldName(): string
                                /**
                                 * Sets the field name of the item, which caused the
                                 * exception.
                                 * @param pFieldName the field name of the item,
                                 *         which caused the exception.
                                 */
                                // @ts-ignore
                                setFieldName(pFieldName: java.lang.String | string): void
                            }
                        }
                    }
                }
            }
        }
    }
}
