declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * Factory for creating an {@link EmbeddedDatabase} instance.
                     * <p>Callers are guaranteed that the returned database has been fully
                     * initialized and populated.
                     * <p>The factory can be configured as follows:
                     * <ul>
                     * <li>Call {@link #generateUniqueDatabaseName} to set a unique, random name
                     * for the database.
                     * <li>Call {@link #setDatabaseName} to set an explicit name for the database.
                     * <li>Call {@link #setDatabaseType} to set the database type if you wish to
                     * use one of the supported types.
                     * <li>Call {@link #setDatabaseConfigurer} to configure support for a custom
                     * embedded database type.
                     * <li>Call {@link #setDatabasePopulator} to change the algorithm used to
                     * populate the database.
                     * <li>Call {@link #setDataSourceFactory} to change the type of
                     * {@link DataSource} used to connect to the database.
                     * </ul>
                     * <p>After configuring the factory, call {@link #getDatabase()} to obtain
                     * a reference to the {@link EmbeddedDatabase} instance.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 3.0
                     */
                    // @ts-ignore
                    class EmbeddedDatabaseFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default name for an embedded database: {@value}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_DATABASE_NAME: java.lang.String | string
                        /**
                         * Set the {@code generateUniqueDatabaseName} flag to enable or disable
                         * generation of a pseudo-random unique ID to be used as the database name.
                         * <p>Setting this flag to {@code true} overrides any explicit name set
                         * via {@link #setDatabaseName}.
                         * @since 4.2
                         * @see #setDatabaseName
                         */
                        // @ts-ignore
                        public setGenerateUniqueDatabaseName(generateUniqueDatabaseName: boolean): void
                        /**
                         * Set the name of the database.
                         * <p>Defaults to {@value #DEFAULT_DATABASE_NAME}.
                         * <p>Will be overridden if the {@code generateUniqueDatabaseName} flag
                         * has been set to {@code true}.
                         * @param databaseName name of the embedded database
                         * @see #setGenerateUniqueDatabaseName
                         */
                        // @ts-ignore
                        public setDatabaseName(databaseName: java.lang.String | string): void
                        /**
                         * Set the factory to use to create the {@link DataSource} instance that
                         * connects to the embedded database.
                         * <p>Defaults to {@link SimpleDriverDataSourceFactory}.
                         */
                        // @ts-ignore
                        public setDataSourceFactory(dataSourceFactory: org.springframework.jdbc.datasource.embedded.DataSourceFactory): void
                        /**
                         * Set the type of embedded database to use.
                         * <p>Call this when you wish to configure one of the pre-supported types.
                         * <p>Defaults to HSQL.
                         * @param type the database type
                         */
                        // @ts-ignore
                        public setDatabaseType(type: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType): void
                        /**
                         * Set the strategy that will be used to configure the embedded database instance.
                         * <p>Call this when you wish to use an embedded database type not already supported.
                         */
                        // @ts-ignore
                        public setDatabaseConfigurer(configurer: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseConfigurer): void
                        /**
                         * Set the strategy that will be used to initialize or populate the embedded
                         * database.
                         * <p>Defaults to {@code null}.
                         */
                        // @ts-ignore
                        public setDatabasePopulator(populator: org.springframework.jdbc.datasource.init.DatabasePopulator): void
                        /**
                         * Factory method that returns the {@linkplain EmbeddedDatabase embedded database}
                         * instance, which is also a {@link DataSource}.
                         */
                        // @ts-ignore
                        public getDatabase(): org.springframework.jdbc.datasource.embedded.EmbeddedDatabase
                        /**
                         * Hook to initialize the embedded database.
                         * <p>If the {@code generateUniqueDatabaseName} flag has been set to {@code true},
                         * the current value of the {@linkplain #setDatabaseName database name} will
                         * be overridden with an auto-generated name.
                         * <p>Subclasses may call this method to force initialization; however,
                         * this method should only be invoked once.
                         * <p>After calling this method, {@link #getDataSource()} returns the
                         * {@link DataSource} providing connectivity to the database.
                         */
                        // @ts-ignore
                        initDatabase(): void
                        /**
                         * Hook to shutdown the embedded database. Subclasses may call this method
                         * to force shutdown.
                         * <p>After calling, {@link #getDataSource()} returns {@code null}.
                         * <p>Does nothing if no embedded database has been initialized.
                         */
                        // @ts-ignore
                        shutdownDatabase(): void
                        /**
                         * Hook that gets the {@link DataSource} that provides the connectivity to the
                         * embedded database.
                         * <p>Returns {@code null} if the {@code DataSource} has not been initialized
                         * or if the database has been shut down. Subclasses may call this method to
                         * access the {@code DataSource} instance directly.
                         */
                        // @ts-ignore
                        getDataSource(): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
