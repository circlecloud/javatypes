declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * Converts a List of values of one type to a List of values of another type
                         * @author Jennifer Hickey
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @param <S> The type of elements in the List to convert
                         * @param <T> The type of elements in the converted List
                         */
                        // @ts-ignore
                        class ListConverter<S, T> extends java.lang.Object {
                            /**
                             * @param itemConverter The {#link Converter} to use for converting individual List items
                             */
                            // @ts-ignore
                            constructor(itemConverter: object)
                            // @ts-ignore
                            public convert(source: java.util.List<S> | Array<S>): Array<T>
                        }
                    }
                }
            }
        }
    }
}
