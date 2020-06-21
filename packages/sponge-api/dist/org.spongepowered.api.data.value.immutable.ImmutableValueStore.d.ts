declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * Represents a {@link ValueContainer} that is immutable once created and
                         * contains a various bundle of {@link ValueContainer}s of type declared by
                         * the extension that can be managed separately from this immutable value
                         * store.
                         * @param <I> The type of immutable value store, for self referencing
                         * @param <H> The type of {#link ValueContainer} to restrict accessing of
                         *      values to
                         */
                        // @ts-ignore
                        interface ImmutableValueStore<I extends org.spongepowered.api.data.value.immutable.ImmutableValueStore<I, H>, H extends org.spongepowered.api.data.value.ValueContainer<?>> extends org.spongepowered.api.data.value.ValueContainer<I> {
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. Since the return type is an
                             * {@link Optional}, a short way of checking compatibility and presence
                             * of the requested data is to mimic the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.get(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />&nbsp; &nbsp;
                             * // We know that we have a present DataManipulator and it's supported
                             * <br />&nbsp; &nbsp; System.out.println(
                             * displayOptional.get().displayName().get().toString());<br />
                             * }</code></blockquote>
                             * <p>This is the equivalent to performing the following:</p>
                             * <blockquote><code>
                             * MyCompositeValueStore valueStore;<br />
                             * if (valueStore.supports(DisplayNameData.class)) {<br />
                             * &nbsp; &nbsp;
                             * System.out.println(valueStore.getOrNull(DisplayNameData.class
                             * ).displayName().get().toString());<br />}</code></blockquote>
                             * <p>The advantage of this returning an {@link Optional} is that the
                             * {@link ValueContainer} may be unsupported, the required data missing
                             * and ignoring the possibility of {@code null}s, it is a guarantee that if
                             * the {@link Optional#isPresent()} is {@code true}, the
                             * {@link ValueContainer} not only is supported, but there is already pre-
                             * existing data for the {@link ValueContainer}.</p>
                             * <p>If it is necessary to ignore the {@link Optional},
                             * {@link Optional#orElse(Object)} can be used to return a potentially
                             * {@code null} {@link ValueContainer}.</p>
                             * @param containerClass The container class
                             * @param <T> The type of {#link ValueContainer}
                             * @return The value container, if available
                             */
                            // @ts-ignore
                            get<T extends H>(containerClass: java.lang.Class<T>): java.util.Optional<T>
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. If insufficient data is available
                             * to provide a {@link ValueContainer} with all {@link ImmutableValue}s
                             * preset, a new instance of the {@link ValueContainer} is returned with
                             * "default" values. Since the return type is an {@link Optional}, a short
                             * way of checking compatibility and presence of the requested data is to
                             * mimic the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />
                             * MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.getOrCreate(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />&nbsp; &nbsp; // We know that we
                             * have a present DataManipulator and it's supported<br />&nbsp; &nbsp;
                             * System.out.println(displayOptional.get().displayName().get().toString());
                             * <br />}</code></blockquote>
                             * <p>This is the equivalent to performing the following:</p>
                             * <blockquote><code>MyCompositeValueStore valueStore;<br />
                             * if (valueStore.supports(DisplayNameData.class)) {<br />&nbsp; &nbsp;
                             * System.out.println(valueStore.getOrNull(DisplayNameData.class
                             * ).displayName().get().toString());<br />}</code></blockquote>
                             * <p>The advantage of this returning an {@link Optional} is that the
                             * {@link ValueContainer} may be unsupported, the required data missing
                             * and ignoring the possibility of {@code null}s, it is a guarantee that if
                             * the {@link Optional#isPresent()} is {@code true}, the
                             * {@link ValueContainer} not only is supported, but there is already pre-
                             * existing data for the {@link ValueContainer}.</p>
                             * <p>If it is necessary to ignore the {@link Optional},
                             * {@link Optional#orElse(Object)} can be used to return a potentially
                             * {@code null} {@link ValueContainer}.</p>
                             * @param containerClass The container class
                             * @param <T> The type of {#link ValueContainer}
                             * @return The value container, if compatible
                             */
                            // @ts-ignore
                            getOrCreate<T extends H>(containerClass: java.lang.Class<T>): java.util.Optional<T>
                            /**
                             * Checks if the given {@link Class} of type {@link ValueContainer} is
                             * supported by this {@link ImmutableValueStore}.
                             * @param containerClass The container class
                             * @return True if the class is supported
                             */
                            // @ts-ignore
                            supports(containerClass: java.lang.Class<any>): boolean
                            /**
                             * Applies a transformation on the provided {@link BaseValue} such that
                             * the return value of {@link Function#apply(Object)} will become the end
                             * resulting value set into the newly created {@link ImmutableValueStore}.
                             * @param key The key linked to
                             * @param function The function to manipulate the value
                             * @param <E> The type of value
                             * @return The newly created immutable value store
                             */
                            // @ts-ignore
                            transform<E>(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Function<E, E>): java.util.Optional<I>
                            /**
                             * Creates a new {@link ImmutableValueStore} with the provided
                             * value by {@link Key}. If the key is supported by this value store,
                             * the returned value store will be present.
                             * @param key The key to the value to set
                             * @param value The value to set
                             * @param <E> The type of value
                             * @return The new immutable value store
                             */
                            // @ts-ignore
                            with<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): java.util.Optional<I>
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that if the {@link Key} is supported, a new
                             * {@link ImmutableValueStore} is created.
                             * @param value The value to set
                             * @return The new immutable value store
                             */
                            // @ts-ignore
                            with(value: org.spongepowered.api.data.value.BaseValue<any>): java.util.Optional<I>
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to the newly created {@link ImmutableValueStore}.
                             * @param valueContainer The value to set
                             * @return The transaction result
                             */
                            // @ts-ignore
                            with(valueContainer: H): java.util.Optional<I>
                            /**
                             * Gets an altered copy of this {@link ImmutableValueStore} with the given
                             * {@link DataManipulator} modified data. If the data is not compatible for
                             * any reason, {@link Optional#empty()} is returned.
                             * <p>This does not alter the current {@link ImmutableValueStore}.</p>
                             * @param valueContainers The new manipulator containing data
                             * @return A new immutable value store with the given value holders
                             */
                            // @ts-ignore
                            with(valueContainers: java.lang.Iterable<H>): java.util.Optional<I>
                            /**
                             * Gets an altered copy of this {@link ImmutableValueStore} without the
                             * given {@link ValueContainer} class. If the data represented by the
                             * manipulator can not exist without a "default state" of the
                             * {@link ValueContainer}, the {@link ValueContainer} is reset to the
                             * "default" state.
                             * @param containerClass The value holders to ignore
                             * @return A new immutable data holder without the given manipulator
                             */
                            // @ts-ignore
                            without(containerClass: java.lang.Class<any>): java.util.Optional<I>
                            /**
                             * Attempts to merge the {@link ImmutableValue}s from this
                             * {@link ImmutableValueStore} and the given {@link ImmutableValueStore} to
                             * produce a new instance of the merged result.
                             * @param that The other immutable value store to gather values from
                             * @return The new immutable value store instance
                             */
                            // @ts-ignore
                            merge(that: I): I
                            /**
                             * Attempts to merge the {@link ImmutableValue}s from this
                             * {@link ImmutableValueStore} and the given {@link ImmutableValueStore} to
                             * produce a new instance of the merged result. Any overlapping
                             * {@link ValueContainer}s are merged through the {@link MergeFunction}.
                             * @param that The other immutable value store to gather values from
                             * @param function The function to resolve merge conflicts
                             * @return The new immutable value store instance
                             */
                            // @ts-ignore
                            merge(that: I, func: org.spongepowered.api.data.merge.MergeFunction): I
                            /**
                             * Gets an copied collection of all known {@link ValueContainer}s
                             * belonging to this {@link ImmutableValueStore}. An individual
                             * {@link ValueContainer} can be used for data processing for various
                             * purposes.
                             * @return A collection of copied {#link ValueContainer}s originating
                             *      from this value store
                             */
                            // @ts-ignore
                            getContainers(): Array<H>
                        }
                    }
                }
            }
        }
    }
}
