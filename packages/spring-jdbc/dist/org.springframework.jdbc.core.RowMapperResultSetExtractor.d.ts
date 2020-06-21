declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Adapter implementation of the ResultSetExtractor interface that delegates
                 * to a RowMapper which is supposed to create an object for each row.
                 * Each object is added to the results List of this ResultSetExtractor.
                 * <p>Useful for the typical case of one object per row in the database table.
                 * The number of entries in the results list will match the number of rows.
                 * <p>Note that a RowMapper object is typically stateless and thus reusable;
                 * just the RowMapperResultSetExtractor adapter is stateful.
                 * <p>A usage example with JdbcTemplate:
                 * <pre class="code">JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);  // reusable object
                 * RowMapper rowMapper = new UserRowMapper();  // reusable object
                 * List allUsers = (List) jdbcTemplate.query(
                 * "select * from user",
                 * new RowMapperResultSetExtractor(rowMapper, 10));
                 * User user = (User) jdbcTemplate.queryForObject(
                 * "select * from user where id=?", new Object[] {id},
                 * new RowMapperResultSetExtractor(rowMapper, 1));</pre>
                 * <p>Alternatively, consider subclassing MappingSqlQuery from the {@code jdbc.object}
                 * package: Instead of working with separate JdbcTemplate and RowMapper objects,
                 * you can have executable query objects (containing row-mapping logic) there.
                 * @author Juergen Hoeller
                 * @since 1.0.2
                 * @param <T> the result element type
                 * @see RowMapper
                 * @see JdbcTemplate
                 * @see org.springframework.jdbc.object.MappingSqlQuery
                 */
                // @ts-ignore
                class RowMapperResultSetExtractor<T> extends java.lang.Object implements org.springframework.jdbc.core.ResultSetExtractor<java.util.List<T> | Array<T>> {
                    /**
                     * Create a new RowMapperResultSetExtractor.
                     * @param rowMapper the RowMapper which creates an object for each row
                     */
                    // @ts-ignore
                    constructor(rowMapper: org.springframework.jdbc.core.RowMapper<T>)
                    /**
                     * Create a new RowMapperResultSetExtractor.
                     * @param rowMapper the RowMapper which creates an object for each row
                     * @param rowsExpected the number of expected rows
                     *  (just used for optimized collection handling)
                     */
                    // @ts-ignore
                    constructor(rowMapper: org.springframework.jdbc.core.RowMapper<T>, rowsExpected: number /*int*/)
                    // @ts-ignore
                    public extractData(rs: java.sql.ResultSet): Array<T>
                }
            }
        }
    }
}
