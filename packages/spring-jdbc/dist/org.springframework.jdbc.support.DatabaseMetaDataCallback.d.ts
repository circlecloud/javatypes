declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * A callback interface used by the JdbcUtils class. Implementations of this
                 * interface perform the actual work of extracting database meta-data, but
                 * don't need to worry about exception handling. SQLExceptions will be caught
                 * and handled correctly by the JdbcUtils class.
                 * @author Thomas Risberg
                 * @see JdbcUtils#extractDatabaseMetaData
                 */
                // @ts-ignore
                interface DatabaseMetaDataCallback {
                    /**
                     * Implementations must implement this method to process the meta-data
                     * passed in. Exactly what the implementation chooses to do is up to it.
                     * @param dbmd the DatabaseMetaData to process
                     * @return a result object extracted from the meta-data
                     *  (can be an arbitrary object, as needed by the implementation)
                     * @throws SQLException if an SQLException is encountered getting
                     *  column values (that is, there's no need to catch SQLException)
                     * @throws MetaDataAccessException in case of other failures while
                     *  extracting meta-data (for example, reflection failure)
                     */
                    // @ts-ignore
                    processMetaData(dbmd: java.sql.DatabaseMetaData): any
                }
            }
        }
    }
}
