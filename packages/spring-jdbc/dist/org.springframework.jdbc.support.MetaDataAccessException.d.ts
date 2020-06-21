declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Exception indicating that something went wrong during JDBC meta-data lookup.
                 * <p>This is a checked exception since we want it to be caught, logged and
                 * handled rather than cause the application to fail. Failure to read JDBC
                 * meta-data is usually not a fatal problem.
                 * @author Thomas Risberg
                 * @since 1.0.1
                 */
                // @ts-ignore
                class MetaDataAccessException extends NestedCheckedException {
                    /**
                     * Constructor for MetaDataAccessException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Constructor for MetaDataAccessException.
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
