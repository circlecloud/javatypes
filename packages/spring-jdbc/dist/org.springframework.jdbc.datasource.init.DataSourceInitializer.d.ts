declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Used to {@linkplain #setDatabasePopulator set up} a database during
                     * initialization and {@link #setDatabaseCleaner clean up} a database during
                     * destruction.
                     * @author Dave Syer
                     * @author Sam Brannen
                     * @since 3.0
                     * @see DatabasePopulator
                     */
                    // @ts-ignore
                    class DataSourceInitializer extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * The {@link DataSource} for the database to populate when this component
                         * is initialized and to clean up when this component is shut down.
                         * <p>This property is mandatory with no default provided.
                         * @param dataSource the DataSource
                         */
                        // @ts-ignore
                        public setDataSource(dataSource: javax.sql.DataSource): void
                        /**
                         * Set the {@link DatabasePopulator} to execute during the bean initialization phase.
                         * @param databasePopulator the {#code DatabasePopulator} to use during initialization
                         * @see #setDatabaseCleaner
                         */
                        // @ts-ignore
                        public setDatabasePopulator(databasePopulator: org.springframework.jdbc.datasource.init.DatabasePopulator): void
                        /**
                         * Set the {@link DatabasePopulator} to execute during the bean destruction
                         * phase, cleaning up the database and leaving it in a known state for others.
                         * @param databaseCleaner the {#code DatabasePopulator} to use during destruction
                         * @see #setDatabasePopulator
                         */
                        // @ts-ignore
                        public setDatabaseCleaner(databaseCleaner: org.springframework.jdbc.datasource.init.DatabasePopulator): void
                        /**
                         * Flag to explicitly enable or disable the {@linkplain #setDatabasePopulator
                         * database populator} and {@linkplain #setDatabaseCleaner database cleaner}.
                         * @param enabled {#code true} if the database populator and database cleaner
                         *  should be called on startup and shutdown, respectively
                         */
                        // @ts-ignore
                        public setEnabled(enabled: boolean): void
                        /**
                         * Use the {@linkplain #setDatabasePopulator database populator} to set up
                         * the database.
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Use the {@linkplain #setDatabaseCleaner database cleaner} to clean up the
                         * database.
                         */
                        // @ts-ignore
                        public destroy(): void
                    }
                }
            }
        }
    }
}
