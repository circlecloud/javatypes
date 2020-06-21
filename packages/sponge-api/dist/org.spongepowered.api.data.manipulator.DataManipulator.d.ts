declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    /**
                     * Represents a changelist of data that can be applied to a {@link DataHolder}.
                     * With a {@link DataManipulator}, specific sets of mutable data can be
                     * represented and changed outside the live state of the {@link DataHolder}.
                     * <p>{@link DataManipulator}s are serializable such that they can be serialized
                     * and deserialized from persistence, and applied to {@link DataHolder}s, even
                     * with specialized {@link Function}s to use {@link #transform(Key, Function)}
                     * such that the {@link DataManipulator} is always returned.</p>
                     * @param <M> The type of {#link DataManipulator} for comparisons
                     */
                    // @ts-ignore
                    interface DataManipulator<M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.value.ValueContainer<M> {
                        /**
                         * Attempts to read data from the given {@link DataHolder} and fills the
                         * associated data onto this {@link DataManipulator}.
                         * <p>Any data that overlaps existing data from the {@link DataHolder} will
                         * take priority and be overwritten from the pre-existing data from the
                         * {@link DataHolder}. It is recommended that a call from
                         * {@link DataHolder#supports(Class)} is checked prior to using this
                         * method on any {@link DataHolder}.</p>
                         * @param dataHolder The {#link DataHolder} to extract data
                         * @return This {#link DataManipulator} with relevant data filled from the
                         *      given {@link DataHolder}, if compatible
                         */
                        // @ts-ignore
                        fill(dataHolder: org.spongepowered.api.data.DataHolder): java.util.Optional<M>
                        /**
                         * Attempts to read data from the given {@link DataHolder} and fills the
                         * associated data onto this {@link DataManipulator}. Any data that
                         * overlaps between this and the given {@link DataHolder} will be resolved
                         * using the given {@link MergeFunction}.
                         * <p>Any data that overlaps existing data from the {@link DataHolder} will
                         * take priority and be overwritten from the pre-existing data from the
                         * {@link DataHolder}. It is recommended that a call from
                         * {@link DataHolder#supports(Class)} is checked prior to using this
                         * method on any {@link DataHolder}.</p>
                         * @param dataHolder The {#link DataHolder} to extract data
                         * @param overlap The overlap resolver to decide which data to retain
                         * @return This {#link DataManipulator} with relevant data filled from the
                         *      given {@link DataHolder}, if compatible
                         */
                        // @ts-ignore
                        fill(dataHolder: org.spongepowered.api.data.DataHolder, overlap: org.spongepowered.api.data.merge.MergeFunction): java.util.Optional<M>
                        /**
                         * Attempts to read the raw data from the provided {@link DataContainer}.
                         * This manipulator should be "reset" to a default state and apply all data
                         * from the given {@link DataContainer}. If data is missing from the
                         * {@link DataContainer}, {@link Optional#empty()} can be returned.
                         * @param container The container of raw data
                         * @return This {#link DataManipulator} with relevant data filled from the
                         *      given {@link DataContainer}, if compatible
                         */
                        // @ts-ignore
                        from(container: org.spongepowered.api.data.DataContainer): java.util.Optional<M>
                        /**
                         * Sets the supported {@link Key}'s value such that the value is set on
                         * this {@link DataManipulator} without having to directly set the
                         * {@link Value} and {@link #set(BaseValue)} afterwards. The requirement
                         * for this to succeed is that the {@link Key} must be checked that it is
                         * supported via {@link #supports(BaseValue)} or {@link #supports(Key)}
                         * otherwise an {@link IllegalArgumentException} may be thrown. For
                         * fluency, after setting, this {@link DataManipulator} is returned.
                         * @param key The key of the value to set
                         * @param value The actual value to set
                         * @param <E> The type of value
                         * @return This manipulator, for chaining
                         */
                        // @ts-ignore
                        set<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): M
                        /**
                         * Sets the supported {@link BaseValue} onto this {@link DataManipulator}.
                         * The requirement for this to succeed is that the {@link BaseValue} is
                         * checked for support via {@link #supports(BaseValue)} or
                         * {@link #supports(Key)} otherwise an {@link IllegalArgumentException}
                         * may be thrown. For fluency, after setting, this {@link DataManipulator}
                         * is returned.
                         * @param value The actual value to set
                         * @return This manipulator, for chaining
                         */
                        // @ts-ignore
                        set(value: org.spongepowered.api.data.value.BaseValue<any>): M
                        /**
                         * Sets the supported {@link BaseValue}s onto this {@link DataManipulator}.
                         * The requirement for this to succeed is that the {@link BaseValue} is
                         * checked for support via {@link #supports(BaseValue)} or
                         * {@link #supports(Key)} otherwise an {@link IllegalArgumentException}
                         * may be thrown. For fluency, after setting, this {@link DataManipulator}
                         * is returned.
                         * @param values The actual values to set
                         * @return This manipulator, for chaining
                         */
                        // @ts-ignore
                        set(...values: org.spongepowered.api.data.value.BaseValue<any>[]): M
                        /**
                         * Sets the supported {@link BaseValue}s onto this {@link DataManipulator}.
                         * The requirement for this to succeed is that the {@link BaseValue} is
                         * checked for support via {@link #supports(BaseValue)} or
                         * {@link #supports(Key)} otherwise an {@link IllegalArgumentException}
                         * may be thrown. For fluency, after setting, this {@link DataManipulator}
                         * is returned.
                         * @param values The actual values to set
                         * @return This manipulator, for chaining
                         */
                        // @ts-ignore
                        set(values: java.lang.Iterable<any>): M
                        /**
                         * Applies a transformation on the provided value if available. This is
                         * the same as {@link CompositeValueStore#transform(Key, Function)}.
                         * @param key The key to use
                         * @param function The function to apply
                         * @param <E> The type of element
                         * @return This manipulator, for chaining
                         */
                        // @ts-ignore
                        transform<E>(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Function<E, E>): M
                        // @ts-ignore
                        copy(): M
                        /**
                         * Gets an {@link ImmutableDataManipulator} copy of this
                         * {@link DataManipulator} such that all backed {@link Value}s are copied
                         * into {@link ImmutableValue} counterparts. Any changes to this
                         * {@link DataManipulator} will NOT be reflected on the returned
                         * {@link ImmutableDataManipulator} and vice versa.
                         * @return This {#link DataManipulator}'s data copied into a
                         *      {@link ImmutableDataManipulator}
                         */
                        // @ts-ignore
                        asImmutable(): I
                    }
                }
            }
        }
    }
}
