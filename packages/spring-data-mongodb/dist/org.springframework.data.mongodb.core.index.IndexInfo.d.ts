declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * @author Mark Pollack
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class IndexInfo extends java.lang.Object {
                            // @ts-ignore
                            constructor(indexFields: java.util.List<org.springframework.data.mongodb.core.index.IndexField> | Array<org.springframework.data.mongodb.core.index.IndexField>, name: java.lang.String | string, unique: boolean, sparse: boolean, language: java.lang.String | string)
                            /**
                             * Creates new {@link IndexInfo} parsing required properties from the given {@literal sourceDocument}.
                             * @param sourceDocument
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static indexInfoOf(sourceDocument: Document): org.springframework.data.mongodb.core.index.IndexInfo
                            /**
                             * Returns the individual index fields of the index.
                             * @return 
                             */
                            // @ts-ignore
                            public getIndexFields(): Array<org.springframework.data.mongodb.core.index.IndexField>
                            /**
                             * Returns whether the index is covering exactly the fields given independently of the order.
                             * @param keys must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public isIndexForFields(keys: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): boolean
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public isUnique(): boolean
                            // @ts-ignore
                            public isSparse(): boolean
                            /**
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getLanguage(): string
                            /**
                             * @return 
                             * @since 1.0
                             */
                            // @ts-ignore
                            public getPartialFilterExpression(): string
                            /**
                             * Get collation information.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getCollation(): java.util.Optional<Document>
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
