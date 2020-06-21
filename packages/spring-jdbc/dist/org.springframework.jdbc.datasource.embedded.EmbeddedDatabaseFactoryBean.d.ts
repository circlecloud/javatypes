declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * A subclass of {@link EmbeddedDatabaseFactory} that implements {@link FactoryBean}
                     * for registration as a Spring bean. Returns the actual {@link DataSource} that
                     * provides connectivity to the embedded database to Spring.
                     * <p>The target {@link DataSource} is returned instead of an {@link EmbeddedDatabase}
                     * proxy since the {@link FactoryBean} will manage the initialization and destruction
                     * lifecycle of the embedded database instance.
                     * <p>Implements {@link DisposableBean} to shutdown the embedded database when the
                     * managing Spring container is being closed.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class EmbeddedDatabaseFactoryBean extends org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseFactory {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set a script execution to be run in the bean destruction callback,
                         * cleaning up the database and leaving it in a known state for others.
                         * @param databaseCleaner the database script executor to run on destroy
                         * @see #setDatabasePopulator
                         * @see org.springframework.jdbc.datasource.init.DataSourceInitializer#setDatabaseCleaner
                         */
                        // @ts-ignore
                        public setDatabaseCleaner(databaseCleaner: org.springframework.jdbc.datasource.init.DatabasePopulator): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): javax.sql.DataSource
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                        // @ts-ignore
                        public destroy(): void
                    }
                }
            }
        }
    }
}
