declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * A simple empty implementation of the {@link SqlParameterSource} interface.
                     * @author Juergen Hoeller
                     * @since 3.2.2
                     */
                    // @ts-ignore
                    class EmptySqlParameterSource extends java.lang.Object implements org.springframework.jdbc.core.namedparam.SqlParameterSource {
                        // @ts-ignore
                        constructor()
                        /**
                         * A shared instance of {@link EmptySqlParameterSource}.
                         */
                        // @ts-ignore
                        public static readonly INSTANCE: org.springframework.jdbc.core.namedparam.EmptySqlParameterSource
                        // @ts-ignore
                        public hasValue(paramName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getValue(paramName: java.lang.String | string): any
                        // @ts-ignore
                        public getSqlType(paramName: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getTypeName(paramName: java.lang.String | string): string
                        // @ts-ignore
                        public getParameterNames(): string[]
                    }
                }
            }
        }
    }
}
