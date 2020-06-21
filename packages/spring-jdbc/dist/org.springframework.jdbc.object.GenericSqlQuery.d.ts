declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * A concrete variant of {@link SqlQuery} which can be configured
                 * with a {@link RowMapper}.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @param <T> the result type
                 * @see #setRowMapper
                 * @see #setRowMapperClass
                 */
                // @ts-ignore
                class GenericSqlQuery<T> extends org.springframework.jdbc.object.SqlQuery<T> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set a specific {@link RowMapper} instance to use for this query.
                     * @since 4.3.2
                     */
                    // @ts-ignore
                    public setRowMapper(rowMapper: org.springframework.jdbc.core.RowMapper<T>): void
                    /**
                     * Set a {@link RowMapper} class for this query, creating a fresh
                     * {@link RowMapper} instance per execution.
                     */
                    // @ts-ignore
                    public setRowMapperClass(rowMapperClass: java.lang.Class<any>): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    newRowMapper(parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>): org.springframework.jdbc.core.RowMapper<T>
                }
            }
        }
    }
}
