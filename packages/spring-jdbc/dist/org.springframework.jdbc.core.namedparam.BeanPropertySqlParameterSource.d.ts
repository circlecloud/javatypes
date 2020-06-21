declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * {@link SqlParameterSource} implementation that obtains parameter values
                     * from bean properties of a given JavaBean object. The names of the bean
                     * properties have to match the parameter names.
                     * <p>Uses a Spring BeanWrapper for bean property access underneath.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see NamedParameterJdbcTemplate
                     * @see org.springframework.beans.BeanWrapper
                     */
                    // @ts-ignore
                    class BeanPropertySqlParameterSource extends org.springframework.jdbc.core.namedparam.AbstractSqlParameterSource {
                        /**
                         * Create a new BeanPropertySqlParameterSource for the given bean.
                         * @param object the bean instance to wrap
                         */
                        // @ts-ignore
                        constructor(object: java.lang.Object | any)
                        // @ts-ignore
                        public hasValue(paramName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getValue(paramName: java.lang.String | string): any
                        /**
                         * Derives a default SQL type from the corresponding property type.
                         * @see org.springframework.jdbc.core.StatementCreatorUtils#javaTypeToSqlParameterType
                         */
                        // @ts-ignore
                        public getSqlType(paramName: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getParameterNames(): string[]
                        /**
                         * Provide access to the property names of the wrapped bean.
                         * Uses support provided in the {@link PropertyAccessor} interface.
                         * @return an array containing all the known property names
                         */
                        // @ts-ignore
                        public getReadablePropertyNames(): string[]
                    }
                }
            }
        }
    }
}
