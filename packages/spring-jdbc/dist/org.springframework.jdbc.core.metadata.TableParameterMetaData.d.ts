declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Holder of meta-data for a specific parameter that is used for table processing.
                     * @author Thomas Risberg
                     * @since 2.5
                     * @see GenericTableMetaDataProvider
                     */
                    // @ts-ignore
                    class TableParameterMetaData extends java.lang.Object {
                        /**
                         * Constructor taking all the properties.
                         */
                        // @ts-ignore
                        constructor(columnName: java.lang.String | string, sqlType: number /*int*/, nullable: boolean)
                        /**
                         * Get the parameter name.
                         */
                        // @ts-ignore
                        public getParameterName(): string
                        /**
                         * Get the parameter SQL type.
                         */
                        // @ts-ignore
                        public getSqlType(): number /*int*/
                        /**
                         * Get whether the parameter/column is nullable.
                         */
                        // @ts-ignore
                        public isNullable(): boolean
                    }
                }
            }
        }
    }
}
