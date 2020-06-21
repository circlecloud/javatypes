declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Convenient super class for JDBC-based data access objects.
                     * <p>Requires a {@link javax.sql.DataSource} to be set, providing a
                     * {@link org.springframework.jdbc.core.JdbcTemplate} based on it to
                     * subclasses through the {@link #getJdbcTemplate()} method.
                     * <p>This base class is mainly intended for JdbcTemplate usage but can
                     * also be used when working with a Connection directly or when using
                     * {@code org.springframework.jdbc.object} operation objects.
                     * @author Juergen Hoeller
                     * @since 28.07.2003
                     * @see #setDataSource
                     * @see #getJdbcTemplate
                     * @see org.springframework.jdbc.core.JdbcTemplate
                     */
                    // @ts-ignore
                    abstract class JdbcDaoSupport extends DaoSupport {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the JDBC DataSource to be used by this DAO.
                         */
                        // @ts-ignore
                        public setDataSource(dataSource: javax.sql.DataSource): void
                        /**
                         * Create a JdbcTemplate for the given DataSource.
                         * Only invoked if populating the DAO with a DataSource reference!
                         * <p>Can be overridden in subclasses to provide a JdbcTemplate instance
                         * with different configuration, or a custom JdbcTemplate subclass.
                         * @param dataSource the JDBC DataSource to create a JdbcTemplate for
                         * @return the new JdbcTemplate instance
                         * @see #setDataSource
                         */
                        // @ts-ignore
                        createJdbcTemplate(dataSource: javax.sql.DataSource): org.springframework.jdbc.core.JdbcTemplate
                        /**
                         * Return the JDBC DataSource used by this DAO.
                         */
                        // @ts-ignore
                        public getDataSource(): javax.sql.DataSource
                        /**
                         * Set the JdbcTemplate for this DAO explicitly,
                         * as an alternative to specifying a DataSource.
                         */
                        // @ts-ignore
                        public setJdbcTemplate(jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate): void
                        /**
                         * Return the JdbcTemplate for this DAO,
                         * pre-initialized with the DataSource or set explicitly.
                         */
                        // @ts-ignore
                        public getJdbcTemplate(): org.springframework.jdbc.core.JdbcTemplate
                        /**
                         * Initialize the template-based configuration of this DAO.
                         * Called after a new JdbcTemplate has been set, either directly
                         * or through a DataSource.
                         * <p>This implementation is empty. Subclasses may override this
                         * to configure further objects based on the JdbcTemplate.
                         * @see #getJdbcTemplate()
                         */
                        // @ts-ignore
                        initTemplateConfig(): void
                        // @ts-ignore
                        checkDaoConfig(): void
                        /**
                         * Return the SQLExceptionTranslator of this DAO's JdbcTemplate,
                         * for translating SQLExceptions in custom JDBC access code.
                         * @see org.springframework.jdbc.core.JdbcTemplate#getExceptionTranslator()
                         */
                        // @ts-ignore
                        getExceptionTranslator(): org.springframework.jdbc.support.SQLExceptionTranslator
                        /**
                         * Get a JDBC Connection, either from the current transaction or a new one.
                         * @return the JDBC Connection
                         * @throws CannotGetJdbcConnectionException if the attempt to get a Connection failed
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#getConnection(javax.sql.DataSource)
                         */
                        // @ts-ignore
                        getConnection(): java.sql.Connection
                        /**
                         * Close the given JDBC Connection, created via this DAO's DataSource,
                         * if it isn't bound to the thread.
                         * @param con the Connection to close
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#releaseConnection
                         */
                        // @ts-ignore
                        releaseConnection(con: java.sql.Connection): void
                    }
                }
            }
        }
    }
}
