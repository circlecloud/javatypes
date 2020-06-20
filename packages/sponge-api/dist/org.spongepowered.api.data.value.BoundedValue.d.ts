declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    /**
                     * Represents a value that may itself be {@link Comparable} or can be
                     * compared using the {@link Comparator} such that the value is "bounded" by a
                     * {@link #getMinValue()} and a {@link #getMaxValue()}. For a majority of
                     * values, a {@link BoundedValue} is limited to being within it's destined
                     * bounds. Any {@link BoundedValue} that is out of it's intended bounds will
                     * throw an {@link IllegalStateException} if used or offered to a
                     * {@link ValueContainer} or {@link DataHolder}.
                     * @param <E> The type of value that can be compared
                     */
                    // @ts-ignore
                    interface BoundedValue<E> extends org.spongepowered.api.data.value.BaseValue<E> {
                        /**
                         * Gets the required "minimum" value such that the value is only valid if
                         * the following is true:
                         * <pre>{@code if (getComparator().compare(getValue(), getMinValue()) <= 0)
                         * }</pre>.
                         * @return The supposed minimum value
                         */
                        // @ts-ignore
                        getMinValue(): E
                        /**
                         * Gets the required "maximum" value such that the value is only valid if
                         * the following is true:
                         * <pre>{@code if (getComparator().compare(getValue(), getMaxValue()) >= 0)
                         * }</pre>.
                         * @return The supposed maximum value
                         */
                        // @ts-ignore
                        getMaxValue(): E
                        /**
                         * The comparator used to compare a value of the proper type. Can be used
                         * for validation with the {@link #getMinValue()} and
                         * {@link #getMaxValue()}.
                         * @return The comparator used for this value
                         */
                        // @ts-ignore
                        getComparator(): java.util.Comparator<E>
                    }
                }
            }
        }
    }
}
