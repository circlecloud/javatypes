declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Sybase specific implementation for the {@link CallMetaDataProvider} interface.
                     * This class is intended for internal use by the Simple JDBC classes.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    class SybaseCallMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericCallMetaDataProvider {
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        // @ts-ignore
                        public parameterNameToUse(parameterName: java.lang.String | string): string
                        // @ts-ignore
                        public byPassReturnParameter(parameterName: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
