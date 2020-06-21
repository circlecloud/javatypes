declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * {@link RowMapper} implementation that converts a single column into a single
                 * result value per row. Expects to operate on a {@code java.sql.ResultSet}
                 * that just contains a single column.
                 * <p>The type of the result value for each row can be specified. The value
                 * for the single column will be extracted from the {@code ResultSet}
                 * and converted into the specified target type.
                 * @author Juergen Hoeller
                 * @author Kazuki Shimizu
                 * @since 1.2
                 * @param <T> the result type
                 * @see JdbcTemplate#queryForList(String, Class)
                 * @see JdbcTemplate#queryForObject(String, Class)
                 */
                // @ts-ignore
                class SingleColumnRowMapper<T> extends java.lang.Object implements org.springframework.jdbc.core.RowMapper<T> {
                    /**
                     * Create a new {@code SingleColumnRowMapper} for bean-style configuration.
                     * @see #setRequiredType
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code SingleColumnRowMapper}.
                     * <p>Consider using the {@link #newInstance} factory method instead,
                     * which allows for specifying the required type once only.
                     * @param requiredType the type that each result object is expected to match
                     */
                    // @ts-ignore
                    constructor(requiredType: java.lang.Class<T>)
                    /**
                     * Set the type that each result object is expected to match.
                     * <p>If not specified, the column value will be exposed as
                     * returned by the JDBC driver.
                     */
                    // @ts-ignore
                    public setRequiredType(requiredType: java.lang.Class<T>): void
                    /**
                     * Set a {@link ConversionService} for converting a fetched value.
                     * <p>Default is the {@link DefaultConversionService}.
                     * @since 5.0.4
                     * @see DefaultConversionService#getSharedInstance
                     */
                    // @ts-ignore
                    public setConversionService(conversionService: ConversionService): void
                    /**
                     * Extract a value for the single column in the current row.
                     * <p>Validates that there is only one column selected,
                     * then delegates to {@code getColumnValue()} and also
                     * {@code convertValueToRequiredType}, if necessary.
                     * @see java.sql.ResultSetMetaData#getColumnCount()
                     * @see #getColumnValue(java.sql.ResultSet, int, Class)
                     * @see #convertValueToRequiredType(Object, Class)
                     */
                    // @ts-ignore
                    public mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/): T
                    /**
                     * Retrieve a JDBC object value for the specified column.
                     * <p>The default implementation calls
                     * {@link JdbcUtils#getResultSetValue(java.sql.ResultSet, int, Class)}.
                     * If no required type has been specified, this method delegates to
                     * {@code getColumnValue(rs, index)}, which basically calls
                     * {@code ResultSet.getObject(index)} but applies some additional
                     * default conversion to appropriate value types.
                     * @param rs is the ResultSet holding the data
                     * @param index is the column index
                     * @param requiredType the type that each result object is expected to match
                     *  (or {#code null} if none specified)
                     * @return the Object value
                     * @throws SQLException in case of extraction failure
                     * @see org.springframework.jdbc.support.JdbcUtils#getResultSetValue(java.sql.ResultSet, int, Class)
                     * @see #getColumnValue(java.sql.ResultSet, int)
                     */
                    // @ts-ignore
                    getColumnValue(rs: java.sql.ResultSet, index: number /*int*/, requiredType: java.lang.Class<any>): any
                    /**
                     * Retrieve a JDBC object value for the specified column, using the most
                     * appropriate value type. Called if no required type has been specified.
                     * <p>The default implementation delegates to {@code JdbcUtils.getResultSetValue()},
                     * which uses the {@code ResultSet.getObject(index)} method. Additionally,
                     * it includes a "hack" to get around Oracle returning a non-standard object for
                     * their TIMESTAMP datatype. See the {@code JdbcUtils#getResultSetValue()}
                     * javadoc for details.
                     * @param rs is the ResultSet holding the data
                     * @param index is the column index
                     * @return the Object value
                     * @throws SQLException in case of extraction failure
                     * @see org.springframework.jdbc.support.JdbcUtils#getResultSetValue(java.sql.ResultSet, int)
                     */
                    // @ts-ignore
                    getColumnValue(rs: java.sql.ResultSet, index: number /*int*/): any
                    /**
                     * Convert the given column value to the specified required type.
                     * Only called if the extracted column value does not match already.
                     * <p>If the required type is String, the value will simply get stringified
                     * via {@code toString()}. In case of a Number, the value will be
                     * converted into a Number, either through number conversion or through
                     * String parsing (depending on the value type). Otherwise, the value will
                     * be converted to a required type using the {@link ConversionService}.
                     * @param value the column value as extracted from {#code getColumnValue()}
                     *  (never {@code null})
                     * @param requiredType the type that each result object is expected to match
                     *  (never {#code null})
                     * @return the converted value
                     * @see #getColumnValue(java.sql.ResultSet, int, Class)
                     */
                    // @ts-ignore
                    convertValueToRequiredType(value: java.lang.Object | any, requiredType: java.lang.Class<any>): any
                    /**
                     * Static factory method to create a new {@code SingleColumnRowMapper}
                     * (with the required type specified only once).
                     * @param requiredType the type that each result object is expected to match
                     * @since 4.1
                     * @see #newInstance(Class, ConversionService)
                     */
                    // @ts-ignore
                    public static newInstance<T>(requiredType: java.lang.Class<T>): org.springframework.jdbc.core.SingleColumnRowMapper<T>
                    /**
                     * Static factory method to create a new {@code SingleColumnRowMapper}
                     * (with the required type specified only once).
                     * @param requiredType the type that each result object is expected to match
                     * @param conversionService the {#link ConversionService} for converting a
                     *  fetched value, or {@code null} for none
                     * @since 5.0.4
                     * @see #newInstance(Class)
                     * @see #setConversionService
                     */
                    // @ts-ignore
                    public static newInstance<T>(requiredType: java.lang.Class<T>, conversionService: ConversionService): org.springframework.jdbc.core.SingleColumnRowMapper<T>
                }
            }
        }
    }
}
