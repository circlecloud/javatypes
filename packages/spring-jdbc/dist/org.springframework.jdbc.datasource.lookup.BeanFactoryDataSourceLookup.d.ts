declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * {@link DataSourceLookup} implementation based on a Spring {@link BeanFactory}.
                     * <p>Will lookup Spring managed beans identified by bean name,
                     * expecting them to be of type {@code javax.sql.DataSource}.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see org.springframework.beans.factory.BeanFactory
                     */
                    // @ts-ignore
                    class BeanFactoryDataSourceLookup extends java.lang.Object implements org.springframework.jdbc.datasource.lookup.DataSourceLookup {
                        /**
                         * Create a new instance of the {@link BeanFactoryDataSourceLookup} class.
                         * <p>The BeanFactory to access must be set via {@code setBeanFactory}.
                         * @see #setBeanFactory
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new instance of the {@link BeanFactoryDataSourceLookup} class.
                         * <p>Use of this constructor is redundant if this object is being created
                         * by a Spring IoC container, as the supplied {@link BeanFactory} will be
                         * replaced by the {@link BeanFactory} that creates it (c.f. the
                         * {@link BeanFactoryAware} contract). So only use this constructor if you
                         * are using this class outside the context of a Spring IoC container.
                         * @param beanFactory the bean factory to be used to lookup {#link DataSource DataSources}
                         */
                        // @ts-ignore
                        constructor(beanFactory: BeanFactory)
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                        // @ts-ignore
                        public getDataSource(dataSourceName: java.lang.String | string): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
