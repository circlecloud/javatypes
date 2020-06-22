declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        namespace TextIndexDefinition {
                            /**
                             * @author Christoph Strobl
                             * @since 1.6
                             */
                            // @ts-ignore
                            class TextIndexedFieldSpec extends java.lang.Object {
                                /**
                                 * Create new {@link TextIndexedFieldSpec} for given fieldname without any weight.
                                 * @param fieldname
                                 */
                                // @ts-ignore
                                constructor(fieldname: java.lang.String | string)
                                /**
                                 * Create new {@link TextIndexedFieldSpec} for given fieldname and weight.
                                 * @param fieldname
                                 * @param weight
                                 */
                                // @ts-ignore
                                constructor(fieldname: java.lang.String | string, weight: java.lang.Float | number)
                                /**
                                 * Get the fieldname associated with the {@link TextIndexedFieldSpec}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getFieldname(): string
                                /**
                                 * Get the weight associated with the {@link TextIndexedFieldSpec}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getWeight(): number
                                /**
                                 * @return true if {#link #weight} has a value that is a valid number.
                                 */
                                // @ts-ignore
                                public isWeighted(): boolean
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
}
