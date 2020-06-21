declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace converter {
                    /**
                     * A {@link Comparator} that converts values before they are compared.
                     * The specified {@link Converter} will be used to convert each value
                     * before it passed to the underlying {@code Comparator}.
                     * @author Phillip Webb
                     * @since 3.2
                     * @param <S> the source type
                     * @param <T> the target type
                     */
                    // @ts-ignore
                    class ConvertingComparator<S, T> extends java.lang.Object implements java.util.Comparator<S> {
                        /**
                         * Create a new {@link ConvertingComparator} instance.
                         * @param converter the converter
                         */
                        // @ts-ignore
                        constructor(converter: org.springframework.core.convert.converter.Converter<S, T>)
                        /**
                         * Create a new {@link ConvertingComparator} instance.
                         * @param comparator the underlying comparator used to compare the converted values
                         * @param converter the converter
                         */
                        // @ts-ignore
                        constructor(comparator: java.util.Comparator<T>, converter: org.springframework.core.convert.converter.Converter<S, T>)
                        /**
                         * Create a new {@code ConvertingComparator} instance.
                         * @param comparator the underlying comparator
                         * @param conversionService the conversion service
                         * @param targetType the target type
                         */
                        // @ts-ignore
                        constructor(comparator: java.util.Comparator<T>, conversionService: org.springframework.core.convert.ConversionService, targetType: java.lang.Class<any>)
                        // @ts-ignore
                        public compare(o1: S, o2: S): number /*int*/
                        /**
                         * Create a new {@link ConvertingComparator} that compares {@link java.util.Map.Entry
                         * map * entries} based on their {@link java.util.Map.Entry#getKey() keys}.
                         * @param comparator the underlying comparator used to compare keys
                         * @return a new {#link ConvertingComparator} instance
                         */
                        // @ts-ignore
                        public static mapEntryKeys<K, V>(comparator: java.util.Comparator<K>): org.springframework.core.convert.converter.ConvertingComparator<java.util.Map.Entry<K, V>, K>
                        /**
                         * Create a new {@link ConvertingComparator} that compares {@link java.util.Map.Entry
                         * map entries} based on their {@link java.util.Map.Entry#getValue() values}.
                         * @param comparator the underlying comparator used to compare values
                         * @return a new {#link ConvertingComparator} instance
                         */
                        // @ts-ignore
                        public static mapEntryValues<K, V>(comparator: java.util.Comparator<V>): org.springframework.core.convert.converter.ConvertingComparator<java.util.Map.Entry<K, V>, V>
                    }
                }
            }
        }
    }
}
