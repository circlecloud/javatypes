declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Helper methods for named parameter parsing.
                     * <p>Only intended for internal use within Spring's JDBC framework.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class NamedParameterUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Parse the SQL statement and locate any placeholders or named parameters.
                         * Named parameters are substituted for a JDBC placeholder.
                         * @param sql the SQL statement
                         * @return the parsed statement, represented as ParsedSql instance
                         */
                        // @ts-ignore
                        public static parseSqlStatement(sql: java.lang.String | string): org.springframework.jdbc.core.namedparam.ParsedSql
                        /**
                         * Parse the SQL statement and locate any placeholders or named parameters. Named
                         * parameters are substituted for a JDBC placeholder, and any select list is expanded
                         * to the required number of placeholders. Select lists may contain an array of
                         * objects, and in that case the placeholders will be grouped and enclosed with
                         * parentheses. This allows for the use of "expression lists" in the SQL statement
                         * like: <br /><br />
                         * {@code select id, name, state from table where (name, age) in (('John', 35), ('Ann', 50))}
                         * <p>The parameter values passed in are used to determine the number of placeholders to
                         * be used for a select list. Select lists should be limited to 100 or fewer elements.
                         * A larger number of elements is not guaranteed to be supported by the database and
                         * is strictly vendor-dependent.
                         * @param parsedSql the parsed representation of the SQL statement
                         * @param paramSource the source for named parameters
                         * @return the SQL statement with substituted parameters
                         * @see #parseSqlStatement
                         */
                        // @ts-ignore
                        public static substituteNamedParameters(parsedSql: org.springframework.jdbc.core.namedparam.ParsedSql, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): string
                        /**
                         * Convert a Map of named parameter values to a corresponding array.
                         * @param parsedSql the parsed SQL statement
                         * @param paramSource the source for named parameters
                         * @param declaredParams the List of declared SqlParameter objects
                         *  (may be {#code null}). If specified, the parameter metadata will
                         *  be built into the value array in the form of SqlParameterValue objects.
                         * @return the array of values
                         */
                        // @ts-ignore
                        public static buildValueArray(parsedSql: org.springframework.jdbc.core.namedparam.ParsedSql, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, declaredParams: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>): any[]
                        /**
                         * Convert parameter types from an SqlParameterSource into a corresponding int array.
                         * This is necessary in order to reuse existing methods on JdbcTemplate.
                         * Any named parameter types are placed in the correct position in the
                         * Object array based on the parsed SQL statement info.
                         * @param parsedSql the parsed SQL statement
                         * @param paramSource the source for named parameters
                         */
                        // @ts-ignore
                        public static buildSqlTypeArray(parsedSql: org.springframework.jdbc.core.namedparam.ParsedSql, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): number /*int*/[]
                        /**
                         * Convert parameter declarations from an SqlParameterSource to a corresponding List of SqlParameters.
                         * This is necessary in order to reuse existing methods on JdbcTemplate.
                         * The SqlParameter for a named parameter is placed in the correct position in the
                         * resulting list based on the parsed SQL statement info.
                         * @param parsedSql the parsed SQL statement
                         * @param paramSource the source for named parameters
                         */
                        // @ts-ignore
                        public static buildSqlParameterList(parsedSql: org.springframework.jdbc.core.namedparam.ParsedSql, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): Array<org.springframework.jdbc.core.SqlParameter>
                        /**
                         * Parse the SQL statement and locate any placeholders or named parameters.
                         * Named parameters are substituted for a JDBC placeholder.
                         * <p>This is a shortcut version of
                         * {@link #parseSqlStatement(String)} in combination with
                         * {@link #substituteNamedParameters(ParsedSql, SqlParameterSource)}.
                         * @param sql the SQL statement
                         * @return the actual (parsed) SQL statement
                         */
                        // @ts-ignore
                        public static parseSqlStatementIntoString(sql: java.lang.String | string): string
                        /**
                         * Parse the SQL statement and locate any placeholders or named parameters.
                         * Named parameters are substituted for a JDBC placeholder and any select list
                         * is expanded to the required number of placeholders.
                         * <p>This is a shortcut version of
                         * {@link #substituteNamedParameters(ParsedSql, SqlParameterSource)}.
                         * @param sql the SQL statement
                         * @param paramSource the source for named parameters
                         * @return the SQL statement with substituted parameters
                         */
                        // @ts-ignore
                        public static substituteNamedParameters(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): string
                        /**
                         * Convert a Map of named parameter values to a corresponding array.
                         * <p>This is a shortcut version of
                         * {@link #buildValueArray(ParsedSql, SqlParameterSource, java.util.List)}.
                         * @param sql the SQL statement
                         * @param paramMap the Map of parameters
                         * @return the array of values
                         */
                        // @ts-ignore
                        public static buildValueArray(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): any[]
                    }
                }
            }
        }
    }
}
