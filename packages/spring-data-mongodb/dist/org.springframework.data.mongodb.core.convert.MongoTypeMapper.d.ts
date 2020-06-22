declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Mongo-specific {@link TypeMapper} exposing that {@link Document}s might contain a type key.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @since 1.0
                         */
                        // @ts-ignore
                        interface MongoTypeMapper {
                            /**
                             * Returns whether the given key is the type key.
                             * @return 
                             */
                            // @ts-ignore
                            isTypeKey(key: java.lang.String | string): boolean
                            /**
                             * Writes type restrictions to the given {@link Document}. This usually results in an {@code $in}-clause to be
                             * generated that restricts the type-key (e.g. {@code _class}) to be in the set of type aliases for the given
                             * {@code restrictedTypes}.
                             * @param result must not be {#literal null}
                             * @param restrictedTypes must not be {#literal null}
                             */
                            // @ts-ignore
                            writeTypeRestrictions(result: Document, restrictedTypes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): void
                        }
                    }
                }
            }
        }
    }
}
