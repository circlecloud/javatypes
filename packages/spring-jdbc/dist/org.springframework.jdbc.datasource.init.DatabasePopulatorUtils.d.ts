declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Utility methods for executing a {@link DatabasePopulator}.
                     * @author Juergen Hoeller
                     * @author Oliver Gierke
                     * @author Sam Brannen
                     * @since 3.1
                     */
                    // @ts-ignore
                    abstract class DatabasePopulatorUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Execute the given {@link DatabasePopulator} against the given {@link DataSource}.
                         * @param populator the {#code DatabasePopulator} to execute
                         * @param dataSource the {#code DataSource} to execute against
                         * @throws DataAccessException if an error occurs, specifically a {#link ScriptException}
                         */
                        // @ts-ignore
                        public static execute(populator: org.springframework.jdbc.datasource.init.DatabasePopulator, dataSource: javax.sql.DataSource): void
                    }
                }
            }
        }
    }
}
