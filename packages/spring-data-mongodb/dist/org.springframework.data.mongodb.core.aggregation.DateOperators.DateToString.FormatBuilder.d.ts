declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            namespace DateToString {
                                // @ts-ignore
                                interface FormatBuilder {
                                    /**
                                     * Creates new {@link DateToString} with all previously added arguments appending the given one.
                                     * @param format must not be {#literal null}.
                                     * @return 
                                     */
                                    // @ts-ignore
                                    toString(format: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                    /**
                                     * Creates new {@link DateToString} using the server default string format ({@code %Y-%m-%dT%H:%M:%S.%LZ}) for
                                     * dates. <br />
                                     * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                     * @return new instance of {#link DateToString}.
                                     * @since 2.1
                                     */
                                    // @ts-ignore
                                    defaultFormat(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateToString
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
