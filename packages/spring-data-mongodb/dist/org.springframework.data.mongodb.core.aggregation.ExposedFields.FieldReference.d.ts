declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ExposedFields {
                            /**
                             * A reference to an {@link ExposedField}.
                             * @author Christoph Strobl
                             * @since 1.10
                             */
                            // @ts-ignore
                            interface FieldReference {
                                /**
                                 * Returns the raw, unqualified reference, i.e. the field reference without a {@literal $} prefix.
                                 * @return 
                                 */
                                // @ts-ignore
                                getRaw(): string
                                /**
                                 * Returns the reference value for the given field reference. Will return 1 for a synthetic, unaliased field or the
                                 * raw rendering of the reference otherwise.
                                 * @return 
                                 */
                                // @ts-ignore
                                getReferenceValue(): any
                            }
                        }
                    }
                }
            }
        }
    }
}
