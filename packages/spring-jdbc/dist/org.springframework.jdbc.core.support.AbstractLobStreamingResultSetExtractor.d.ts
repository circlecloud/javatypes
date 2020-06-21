declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Abstract ResultSetExtractor implementation that assumes streaming of LOB data.
                     * Typically used as inner class, with access to surrounding method arguments.
                     * <p>Delegates to the {@code streamData} template method for streaming LOB
                     * content to some OutputStream, typically using a LobHandler. Converts an
                     * IOException thrown during streaming to a LobRetrievalFailureException.
                     * <p>A usage example with JdbcTemplate:
                     * <pre class="code">JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);  // reusable object
                     * final LobHandler lobHandler = new DefaultLobHandler();  // reusable object
                     * jdbcTemplate.query(
                     * "SELECT content FROM imagedb WHERE image_name=?", new Object[] {name},
                     * new AbstractLobStreamingResultSetExtractor() {
                     * public void streamData(ResultSet rs) throws SQLException, IOException {
                     * FileCopyUtils.copy(lobHandler.getBlobAsBinaryStream(rs, 1), contentStream);
                     * }
                     * }
                     * );</pre>
                     * @author Juergen Hoeller
                     * @since 1.0.2
                     * @param <T> the result type
                     * @see org.springframework.jdbc.support.lob.LobHandler
                     * @see org.springframework.jdbc.LobRetrievalFailureException
                     */
                    // @ts-ignore
                    abstract class AbstractLobStreamingResultSetExtractor<T> extends java.lang.Object implements org.springframework.jdbc.core.ResultSetExtractor<T> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Delegates to handleNoRowFound, handleMultipleRowsFound and streamData,
                         * according to the ResultSet state. Converts an IOException thrown by
                         * streamData to a LobRetrievalFailureException.
                         * @see #handleNoRowFound
                         * @see #handleMultipleRowsFound
                         * @see #streamData
                         * @see org.springframework.jdbc.LobRetrievalFailureException
                         */
                        // @ts-ignore
                        public extractData(rs: java.sql.ResultSet): T
                        /**
                         * Handle the case where the ResultSet does not contain a row.
                         * @throws DataAccessException a corresponding exception,
                         *  by default an EmptyResultDataAccessException
                         * @see org.springframework.dao.EmptyResultDataAccessException
                         */
                        // @ts-ignore
                        handleNoRowFound(): void
                        /**
                         * Handle the case where the ResultSet contains multiple rows.
                         * @throws DataAccessException a corresponding exception,
                         *  by default an IncorrectResultSizeDataAccessException
                         * @see org.springframework.dao.IncorrectResultSizeDataAccessException
                         */
                        // @ts-ignore
                        handleMultipleRowsFound(): void
                        /**
                         * Stream LOB content from the given ResultSet to some OutputStream.
                         * <p>Typically used as inner class, with access to surrounding method arguments
                         * and to a LobHandler instance variable of the surrounding class.
                         * @param rs the ResultSet to take the LOB content from
                         * @throws SQLException if thrown by JDBC methods
                         * @throws IOException if thrown by stream access methods
                         * @throws DataAccessException in case of custom exceptions
                         * @see org.springframework.jdbc.support.lob.LobHandler#getBlobAsBinaryStream
                         * @see org.springframework.util.FileCopyUtils
                         */
                        // @ts-ignore
                        abstract streamData(rs: java.sql.ResultSet): void
                    }
                }
            }
        }
    }
}
