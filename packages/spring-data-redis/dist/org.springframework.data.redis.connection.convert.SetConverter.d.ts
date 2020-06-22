declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * Converts a Set of values of one type to a Set of values of another type
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @param <S> The type of elements in the Set to convert
                         * @param <T> The type of elements in the converted Set
                         */
                        // @ts-ignore
                        class SetConverter<S, T> extends java.lang.Object {
                            /**
                             * @param itemConverter The {#link Converter} to use for converting individual Set items. Must not be {@literal null}.
                             */
                            // @ts-ignore
                            constructor(itemConverter: object)
                            // @ts-ignore
                            public convert(source: java.util.Set<S> | Array<S>): Array<T>
                        }
                    }
                }
            }
        }
    }
}
