declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal data type} expressions.
                         * @author Christoph Strobl
                         * @since 1.10
                         * @soundtrack Clawfinger - Catch Me
                         */
                        // @ts-ignore
                        class DataTypeOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Return the BSON data type of the given {@literal field}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static typeOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DataTypeOperators.Type
                        }
                    }
                }
            }
        }
    }
}
