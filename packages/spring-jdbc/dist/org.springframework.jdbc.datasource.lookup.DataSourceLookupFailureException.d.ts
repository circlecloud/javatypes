declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * Exception to be thrown by a DataSourceLookup implementation,
                     * indicating that the specified DataSource could not be obtained.
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class DataSourceLookupFailureException extends NonTransientDataAccessException {
                        /**
                         * Constructor for DataSourceLookupFailureException.
                         * @param msg the detail message
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                        /**
                         * Constructor for DataSourceLookupFailureException.
                         * @param msg the detail message
                         * @param cause the root cause (usually from using a underlying
                         *  lookup API such as JNDI)
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
