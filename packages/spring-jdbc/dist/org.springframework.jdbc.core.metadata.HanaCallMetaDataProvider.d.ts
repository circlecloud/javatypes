declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * SAP HANA specific implementation for the {@link CallMetaDataProvider} interface.
                     * This class is intended for internal use by the Simple JDBC classes.
                     * @author Subhobrata Dey
                     * @author Juergen Hoeller
                     * @since 4.2.1
                     */
                    // @ts-ignore
                    class HanaCallMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericCallMetaDataProvider {
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        // @ts-ignore
                        public initializeWithMetaData(databaseMetaData: java.sql.DatabaseMetaData): void
                    }
                }
            }
        }
    }
}
