declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Utility methods for JSON serialization.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        abstract class SerializationUtils extends java.lang.Object {
                            /**
                             * Flattens out a given {@link Document}.
                             * <pre>
                             * <code>
                             * {
                             * _id : 1
                             * nested : { value : "conflux"}
                             * }
                             * </code>
                             * will result in
                             * <code>
                             * {
                             * _id : 1
                             * nested.value : "conflux"
                             * }
                             * </code>
                             * </pre>
                             * @param source can be {#literal null}.
                             * @return {#link Collections#emptyMap()} when source is {@literal null}
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static flattenMap(source: Document): java.util.Map<java.lang.String | string, java.lang.Object | any>
                            /**
                             * Serializes the given object into pseudo-JSON meaning it's trying to create a JSON representation as far as possible
                             * but falling back to the given object's {@link Object#toString()} method if it's not serializable. Useful for
                             * printing raw {@link Document}s containing complex values before actually converting them into Mongo native types.
                             * @param value
                             * @return the serialized value or {#literal null}.
                             */
                            // @ts-ignore
                            public static serializeToJsonSafely(value: java.lang.Object | any): string
                        }
                    }
                }
            }
        }
    }
}
