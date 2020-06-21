declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Holder of meta-data for a specific parameter that is used for call processing.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see GenericCallMetaDataProvider
                     */
                    // @ts-ignore
                    class CallParameterMetaData extends java.lang.Object {
                        /**
                         * Constructor taking all the properties.
                         */
                        // @ts-ignore
                        constructor(columnName: java.lang.String | string, columnType: number /*int*/, sqlType: number /*int*/, typeName: java.lang.String | string, nullable: boolean)
                        /**
                         * Get the parameter name.
                         */
                        // @ts-ignore
                        public getParameterName(): string
                        /**
                         * Get the parameter type.
                         */
                        // @ts-ignore
                        public getParameterType(): number /*int*/
                        /**
                         * Determine whether the declared parameter qualifies as a 'return' parameter
                         * for our purposes: type {@link DatabaseMetaData#procedureColumnReturn} or
                         * {@link DatabaseMetaData#procedureColumnResult}.
                         * @since 4.3.15
                         */
                        // @ts-ignore
                        public isReturnParameter(): boolean
                        /**
                         * Get the parameter SQL type.
                         */
                        // @ts-ignore
                        public getSqlType(): number /*int*/
                        /**
                         * Get the parameter type name.
                         */
                        // @ts-ignore
                        public getTypeName(): string
                        /**
                         * Get whether the parameter is nullable.
                         */
                        // @ts-ignore
                        public isNullable(): boolean
                    }
                }
            }
        }
    }
}
