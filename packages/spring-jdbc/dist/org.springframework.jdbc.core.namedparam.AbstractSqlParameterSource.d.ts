declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Abstract base class for {@link SqlParameterSource} implementations.
                     * Provides registration of SQL types per parameter and a friendly
                     * {@link #toString() toString} representation enumerating all parameters for
                     * a {@code SqlParameterSource} implementing {@link #getParameterNames()}.
                     * Concrete subclasses must implement {@link #hasValue} and {@link #getValue}.
                     * @author Juergen Hoeller
                     * @author Jens Schauder
                     * @since 2.0
                     * @see #hasValue(String)
                     * @see #getValue(String)
                     * @see #getParameterNames()
                     */
                    // @ts-ignore
                    abstract class AbstractSqlParameterSource extends java.lang.Object implements org.springframework.jdbc.core.namedparam.SqlParameterSource {
                        // @ts-ignore
                        constructor()
                        /**
                         * Register an SQL type for the given parameter.
                         * @param paramName the name of the parameter
                         * @param sqlType the SQL type of the parameter
                         */
                        // @ts-ignore
                        public registerSqlType(paramName: java.lang.String | string, sqlType: number /*int*/): void
                        /**
                         * Register an SQL type for the given parameter.
                         * @param paramName the name of the parameter
                         * @param typeName the type name of the parameter
                         */
                        // @ts-ignore
                        public registerTypeName(paramName: java.lang.String | string, typeName: java.lang.String | string): void
                        /**
                         * Return the SQL type for the given parameter, if registered.
                         * @param paramName the name of the parameter
                         * @return the SQL type of the parameter,
                         *  or {#code TYPE_UNKNOWN} if not registered
                         */
                        // @ts-ignore
                        public getSqlType(paramName: java.lang.String | string): number /*int*/
                        /**
                         * Return the type name for the given parameter, if registered.
                         * @param paramName the name of the parameter
                         * @return the type name of the parameter,
                         *  or {#code null} if not registered
                         */
                        // @ts-ignore
                        public getTypeName(paramName: java.lang.String | string): string
                        /**
                         * Enumerate the parameter names and values with their corresponding SQL type if available,
                         * or just return the simple {@code SqlParameterSource} implementation class name otherwise.
                         * @since 5.2
                         * @see #getParameterNames()
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
