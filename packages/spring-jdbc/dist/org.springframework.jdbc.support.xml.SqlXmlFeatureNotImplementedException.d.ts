declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace xml {
                    /**
                     * Exception thrown when the underlying implementation does not support the
                     * requested feature of the API.
                     * @author Thomas Risberg
                     * @since 2.5.5
                     */
                    // @ts-ignore
                    class SqlXmlFeatureNotImplementedException extends InvalidDataAccessApiUsageException {
                        /**
                         * Constructor for SqlXmlFeatureNotImplementedException.
                         * @param msg the detail message
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                        /**
                         * Constructor for SqlXmlFeatureNotImplementedException.
                         * @param msg the detail message
                         * @param cause the root cause from the data access API in use
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
