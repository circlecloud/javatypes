declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    /**
                     * The abstract base interface for all of the "Value API". In short, a
                     * {@link BaseValue} is a "wrapper" around an actual value from a
                     * {@link ValueContainer}. The actual value may come from various sources of
                     * the {@link ValueContainer}, but usually it's a generic dynamic system for
                     * being able to fetch values from object fields without having to know the
                     * type of {@link Class} of the {@link ValueContainer}, the getters and
                     * setters for that particular value. The driving force behind this is that
                     * instead of having a traditional hierarchical structure of data that is
                     * possible to be retrieved from an {@link Entity}, {@link Living}, etc.,
                     * all that is required is <pre>{@code container.supports(Keys.HEALTH) ?
                     * container.get(Keys.HEALTH).get() : 0 }</pre> where the container is simply
                     * a {@link ValueContainer}, nothing more, nothing less.
                     * <p>The advantage of this is that now, these various known and unknown
                     * {@link Value}s can be retrieved by simple java generics:
                     * {@link ValueContainer#getValue(Key)}. While having a {@link Value} for
                     * something so primitive as the current health of a {@link Living} entity,
                     * the power is wielded when a {@link Value} can be offered up to multiple
                     * {@link ValueContainer}s without worrying about whether it's supported or not,
                     * or getting the right cast information.</p>
                     * @param <E> The type of element wrapped by this value
                     */
                    // @ts-ignore
                    interface BaseValue<E> {
                        /**
                         * Gets the held value. Usually all held values are "filled" and not
                         * "defaulted"; however, in the case that the actual value is not set or
                         * {@link #exists()} returns false, the {@link #getDefault()} value is
                         * returned.
                         * @return The held value
                         */
                        // @ts-ignore
                        get(): E
                        /**
                         * Checks that the underlying value exists (or "set").
                         * @return True if the value exists or was set
                         */
                        // @ts-ignore
                        exists(): boolean
                        /**
                         * Gets the default value. There is always a default value, however,
                         * usability of the default value may be questionable in certain
                         * circumstances.
                         * @return The default value
                         */
                        // @ts-ignore
                        getDefault(): E
                        /**
                         * Gets the direct value. Since some values may be absent for various
                         * reasons, the {@link #get()} would return the {@link #getDefault()} when
                         * necessary.
                         * @return The direct value, if available
                         */
                        // @ts-ignore
                        getDirect(): java.util.Optional<E>
                        /**
                         * Gets the key for this {@link BaseValue}.
                         * @return The key for this value
                         */
                        // @ts-ignore
                        getKey(): org.spongepowered.api.data.key.Key<? extends org.spongepowered.api.data.value.BaseValue<E>>
                    }
                }
            }
        }
    }
}
