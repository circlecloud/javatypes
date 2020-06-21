declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Bean definition reader that reads values from a database table,
                     * based on a given SQL statement.
                     * <p>Expects columns for bean name, property name and value as String.
                     * Formats for each are identical to the properties format recognized
                     * by PropertiesBeanDefinitionReader.
                     * <p><b>NOTE:</b> This is mainly intended as an example for a custom
                     * JDBC-based bean definition reader. It does not aim to offer
                     * comprehensive functionality.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @see #loadBeanDefinitions
                     * @see org.springframework.beans.factory.support.PropertiesBeanDefinitionReader
                     */
                    // @ts-ignore
                    class JdbcBeanDefinitionReader extends java.lang.Object {
                        /**
                         * Create a new JdbcBeanDefinitionReader for the given bean factory,
                         * using a default PropertiesBeanDefinitionReader underneath.
                         * <p>DataSource or JdbcTemplate still need to be set.
                         * @see #setDataSource
                         * @see #setJdbcTemplate
                         */
                        // @ts-ignore
                        constructor(beanFactory: BeanDefinitionRegistry)
                        /**
                         * Create a new JdbcBeanDefinitionReader that delegates to the
                         * given PropertiesBeanDefinitionReader underneath.
                         * <p>DataSource or JdbcTemplate still need to be set.
                         * @see #setDataSource
                         * @see #setJdbcTemplate
                         */
                        // @ts-ignore
                        constructor(beanDefinitionReader: PropertiesBeanDefinitionReader)
                        /**
                         * Set the DataSource to use to obtain database connections.
                         * Will implicitly create a new JdbcTemplate with the given DataSource.
                         */
                        // @ts-ignore
                        public setDataSource(dataSource: javax.sql.DataSource): void
                        /**
                         * Set the JdbcTemplate to be used by this bean factory.
                         * Contains settings for DataSource, SQLExceptionTranslator, etc.
                         */
                        // @ts-ignore
                        public setJdbcTemplate(jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate): void
                        /**
                         * Load bean definitions from the database via the given SQL string.
                         * @param sql the SQL query to use for loading bean definitions.
                         *  The first three columns must be bean name, property name and value.
                         *  Any join and any other columns are permitted: e.g.
                         *  {#code SELECT BEAN_NAME, PROPERTY, VALUE FROM CONFIG WHERE CONFIG.APP_ID = 1}
                         *  It's also possible to perform a join. Column names are not significant --
                         *  only the ordering of these first three columns.
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(sql: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
