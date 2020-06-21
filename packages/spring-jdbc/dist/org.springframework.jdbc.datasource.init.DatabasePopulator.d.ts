declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Strategy used to populate, initialize, or clean up a database.
                     * @author Keith Donald
                     * @author Sam Brannen
                     * @since 3.0
                     * @see ResourceDatabasePopulator
                     * @see DatabasePopulatorUtils
                     * @see DataSourceInitializer
                     */
                    // @ts-ignore
                    interface DatabasePopulator {
                        /**
                         * Populate, initialize, or clean up the database using the provided JDBC
                         * connection.
                         * <p>Concrete implementations <em>may</em> throw an {@link SQLException} if
                         * an error is encountered but are <em>strongly encouraged</em> to throw a
                         * specific {@link ScriptException} instead. For example, Spring's
                         * {@link ResourceDatabasePopulator} and {@link DatabasePopulatorUtils} wrap
                         * all {@code SQLExceptions} in {@code ScriptExceptions}.
                         * @param connection the JDBC connection to use to populate the db; already
                         *  configured and ready to use; never {#code null}
                         * @throws SQLException if an unrecoverable data access exception occurs
                         *  during database population
                         * @throws ScriptException in all other error cases
                         * @see DatabasePopulatorUtils#execute
                         */
                        // @ts-ignore
                        populate(connection: java.sql.Connection): void
                    }
                }
            }
        }
    }
}
