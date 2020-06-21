declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Abstract {@link PreparedStatementCallback} implementation that manages a {@link LobCreator}.
                     * Typically used as inner class, with access to surrounding method arguments.
                     * <p>Delegates to the {@code setValues} template method for setting values
                     * on the PreparedStatement, using a given LobCreator for BLOB/CLOB arguments.
                     * <p>A usage example with {@link org.springframework.jdbc.core.JdbcTemplate}:
                     * <pre class="code">JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);  // reusable object
                     * LobHandler lobHandler = new DefaultLobHandler();  // reusable object
                     * jdbcTemplate.execute(
                     * "INSERT INTO imagedb (image_name, content, description) VALUES (?, ?, ?)",
                     * new AbstractLobCreatingPreparedStatementCallback(lobHandler) {
                     * protected void setValues(PreparedStatement ps, LobCreator lobCreator) throws SQLException {
                     * ps.setString(1, name);
                     * lobCreator.setBlobAsBinaryStream(ps, 2, contentStream, contentLength);
                     * lobCreator.setClobAsString(ps, 3, description);
                     * }
                     * }
                     * );</pre>
                     * @author Juergen Hoeller
                     * @since 1.0.2
                     * @see org.springframework.jdbc.support.lob.LobCreator
                     */
                    // @ts-ignore
                    abstract class AbstractLobCreatingPreparedStatementCallback extends java.lang.Object implements org.springframework.jdbc.core.PreparedStatementCallback<java.lang.Integer | number> {
                        /**
                         * Create a new AbstractLobCreatingPreparedStatementCallback for the
                         * given LobHandler.
                         * @param lobHandler the LobHandler to create LobCreators with
                         */
                        // @ts-ignore
                        constructor(lobHandler: org.springframework.jdbc.support.lob.LobHandler)
                        // @ts-ignore
                        public doInPreparedStatement(ps: java.sql.PreparedStatement): number
                        /**
                         * Set values on the given PreparedStatement, using the given
                         * LobCreator for BLOB/CLOB arguments.
                         * @param ps the PreparedStatement to use
                         * @param lobCreator the LobCreator to use
                         * @throws SQLException if thrown by JDBC methods
                         * @throws DataAccessException in case of custom exceptions
                         */
                        // @ts-ignore
                        abstract setValues(ps: java.sql.PreparedStatement, lobCreator: org.springframework.jdbc.support.lob.LobCreator): void
                    }
                }
            }
        }
    }
}
