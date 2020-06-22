declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * Converts a Map of values of one key/value type to a Map of values of another type
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @param <S> The type of keys and values in the Map to convert
                         * @param <T> The type of keys and values in the converted Map
                         */
                        // @ts-ignore
                        class MapConverter<S, T> extends java.lang.Object {
                            /**
                             * @param itemConverter The {#link Converter} to use for converting individual Map keys and values. Must not be
                             *           {@literal null}.
                             */
                            // @ts-ignore
                            constructor(itemConverter: object)
                            // @ts-ignore
                            public convert(source: java.util.Map<S, S>): java.util.Map<T, T>
                        }
                    }
                }
            }
        }
    }
}
