declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace ValueFactory {
                        /**
                         * A builder pattern for constructing {@link MutableBoundedValue}s without the hassle of
                         * keeping track of the order of arguments.
                         * @param <E> The type of element
                         */
                        // @ts-ignore
                        interface BoundedValueBuilder<E> {
                            /**
                             * If <code>E</code> is not {@link Comparable}, a {@link Comparator}
                             * is required. The builder by default will attempt to check if
                             * the type is a {@link Comparable} and delegate to the default
                             * {@link Comparable#compareTo(Object)} for comparisons. In short, the
                             * {@link Comparator} is only required if the element is not
                             * {@link Comparable}, or custom comparisons are required.
                             * @param comparator The comparator to use
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            comparator(comparator: java.util.Comparator<E>): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder<E>
                            /**
                             * Sets the minimum supported value.
                             * @param min The minimum supported value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            minimum(min: E): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder<E>
                            /**
                             * Sets the maximum supported value.
                             * @param max The maximum supported value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            maximum(max: E): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder<E>
                            /**
                             * Sets the default value. This is required. If no value is set,
                             * the default value transitively sets the value.
                             * @param defaultValue The default value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            defaultValue(defaultValue: E): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder<E>
                            /**
                             * Sets the actual value. Though not required, if the value is
                             * different from the {@link #defaultValue(Object)}, it should be
                             * set.
                             * @param actual The actual value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            actualValue(actual: E): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder<E>
                            /**
                             * Builds a new {@link MutableBoundedValue}. The requirements are
                             * that the {@link #minimum(Object)}, {@link #maximum(Object)},
                             * {@link #defaultValue(Object)} are set, and if the <code>E</code> is
                             * not {@link Comparable}, {@link #comparator(Comparator)} is set.
                             * @return The newly constructed value
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<E>
                        }
                    }
                }
            }
        }
    }
}
