declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Composite {@link DatabasePopulator} that delegates to a list of given
                     * {@code DatabasePopulator} implementations, executing all scripts.
                     * @author Dave Syer
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @author Kazuki Shimizu
                     * @since 3.1
                     */
                    // @ts-ignore
                    class CompositeDatabasePopulator extends java.lang.Object implements org.springframework.jdbc.datasource.init.DatabasePopulator {
                        /**
                         * Create an empty {@code CompositeDatabasePopulator}.
                         * @see #setPopulators
                         * @see #addPopulators
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a {@code CompositeDatabasePopulator} with the given populators.
                         * @param populators one or more populators to delegate to
                         * @since 4.3
                         */
                        // @ts-ignore
                        constructor(populators: java.util.Collection<org.springframework.jdbc.datasource.init.DatabasePopulator> | Array<org.springframework.jdbc.datasource.init.DatabasePopulator>)
                        /**
                         * Create a {@code CompositeDatabasePopulator} with the given populators.
                         * @param populators one or more populators to delegate to
                         * @since 4.3
                         */
                        // @ts-ignore
                        constructor(...populators: org.springframework.jdbc.datasource.init.DatabasePopulator[])
                        /**
                         * Specify one or more populators to delegate to.
                         */
                        // @ts-ignore
                        public setPopulators(...populators: org.springframework.jdbc.datasource.init.DatabasePopulator[]): void
                        /**
                         * Add one or more populators to the list of delegates.
                         */
                        // @ts-ignore
                        public addPopulators(...populators: org.springframework.jdbc.datasource.init.DatabasePopulator[]): void
                        // @ts-ignore
                        public populate(connection: java.sql.Connection): void
                    }
                }
            }
        }
    }
}
