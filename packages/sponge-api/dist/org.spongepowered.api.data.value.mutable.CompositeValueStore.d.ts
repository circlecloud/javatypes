declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a {@link ValueContainer} that contains a various bundle of
                         * {@link ValueContainer}s of type declared by the extension that can be
                         * manipulated separately from this {@link CompositeValueStore}.
                         * @param <S> The type of composite store, for self referencing
                         * @param <H> The type of {#link ValueContainer} to restrict accessing of
                         *      values to
                         */
                        // @ts-ignore
                        interface CompositeValueStore<S extends org.spongepowered.api.data.value.mutable.CompositeValueStore<S, H>, H extends org.spongepowered.api.data.value.ValueContainer<?>> extends org.spongepowered.api.data.value.ValueContainer<S> {
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. Since the return type is an
                             * {@link Optional}, a short way of checking compatibility and presence
                             * of the requested data is to mimic the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />
                             * MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.get(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />
                             * &nbsp; &nbsp; // We know that we have a present DataManipulator and it's
                             * supported<br />&nbsp; &nbsp;
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
                             * <code>null</code> {@link ValueContainer}.</p>
                             * @param containerClass The container class
                             * @param <T> The type of {#link ValueContainer}
                             * @return The value container, if available
                             */
                            // @ts-ignore
                            get<T extends H>(containerClass: java.lang.Class<T>): java.util.Optional<T>
                            /**
                             * Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible.
                             * <p>If the container class is not supported or
                             * available, {@link NoSuchElementException} will be thrown.</p>
                             * @param containerClass The container class
                             * @param <T> The type of {#link ValueContainer}
                             * @return The value
                             * @throws NoSuchElementException If the value is not supported or present
                             */
                            // @ts-ignore
                            require<T extends H>(containerClass: java.lang.Class<T>): T
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. If insufficient data is available
                             * to provide a {@link ValueContainer} with all {@link Value}s preset, a
                             * new instance of the {@link ValueContainer} is returned with "default"
                             * values. Since the return type is an {@link Optional}, a short way of
                             * checking compatibility and presence of the requested data is to mimic
                             * the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />
                             * MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.getOrCreate(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />
                             * &nbsp; &nbsp; // We know that we have a present DataManipulator and it's
                             * supported<br />&nbsp; &nbsp;
                             * System.out.println(displayOptional.get().displayName().get().toString()
                             * );<br />}</code></blockquote>
                             * <p>This is the equivalent to performing the following:</p>
                             * <blockquote><code>MyCompositeValueStore valueStore;<br />
                             * if (valueStore.supports(DisplayNameData.class)) {<br />&nbsp; &nbsp;
                             * System.out.println(valueStore.get(DisplayNameData.class
                             * ).get().displayName().get().toString());<br />}</code></blockquote>
                             * <p>The advantage of this returning an {@link Optional} is that the
                             * {@link ValueContainer} may be unsupported, the required data missing
                             * and ignoring the possibility of {@code null}s, it is a guarantee that if
                             * the {@link Optional#isPresent()} is {@code true}, the
                             * {@link ValueContainer} not only is supported, but some default values
                             * can be generated to create the desired {@link ValueContainer}.</p>
                             * <p>If it is necessary to ignore the {@link Optional},
                             * {@link Optional#orElse(Object)} can be used to return a potentially
                             * <code>null</code> {@link ValueContainer}.</p>
                             * @param containerClass The container class
                             * @param <T> The type of {#link ValueContainer}
                             * @return The value container, if compatible
                             */
                            // @ts-ignore
                            getOrCreate<T extends H>(containerClass: java.lang.Class<T>): java.util.Optional<T>
                            /**
                             * Checks if the given {@link Class} of type {@link ValueContainer} is
                             * supported by this {@link CompositeValueStore}.
                             * @param holderClass The container class
                             * @return True if the class is supported
                             */
                            // @ts-ignore
                            supports(holderClass: java.lang.Class<any>): boolean
                            /**
                             * Applies a transformation on the provided {@link BaseValue} such that
                             * the return value of {@link Function#apply(Object)} will become the end
                             * resulting value set into this {@link CompositeValueStore}. It is not
                             * necessary that the input is actually present, in which case the
                             * {@link Key}ed data is compatible, but not necessarily present. Writing
                             * a {@link Function} to properly handle the potential for a null input
                             * is required for this method to execute without exception.
                             * @param key The key linked to
                             * @param function The function to manipulate the value
                             * @param <E> The type of value
                             * @return The end resulting value
                             */
                            // @ts-ignore
                            transform<E>(key: org.spongepowered.api.data.key.Key<any>, func: java.util.function$.Function<E, E>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that a {@link DataTransactionResult} is returned for any
                             * successful, rejected, and replaced {@link BaseValue}s from this
                             * {@link CompositeValueStore}.
                             * @param key The key to the value to set
                             * @param value The value to set
                             * @param <E> The type of value
                             * @return The transaction result
                             */
                            // @ts-ignore
                            offer<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@link BaseValue} as defined by the provided
                             * {@link Key} such that a {@link DataTransactionResult} is returned for
                             * any successful, rejected, and replaced {@link BaseValue}s from this
                             * {@link CompositeValueStore}.
                             * @param value The value to set
                             * @param <E> The type of the element wrapped by the value
                             * @return The transaction result
                             */
                            // @ts-ignore
                            offer<E>(value: org.spongepowered.api.data.value.BaseValue<E>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. The end result of the values
                             * successfully offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}.
                             * @param valueContainer The value to set
                             * @return The transaction result
                             */
                            // @ts-ignore
                            offer(valueContainer: H): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. The end result of the values
                             * successfully offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}. Any overlaps of data are merged via
                             * the {@link MergeFunction}.
                             * @param valueContainer The value to set
                             * @param function The merge function
                             * @return The transaction result
                             */
                            // @ts-ignore
                            offer(valueContainer: H, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers all provided {@link ValueContainer}s to this
                             * {@link CompositeValueStore} much like {@link #offer(ValueContainer)}
                             * except all in a single batch. The end result of the values successfully
                             * offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}.
                             * @param valueContainers The values to set
                             * @return The transaction result
                             */
                            // @ts-ignore
                            offer(valueContainers: java.lang.Iterable<H>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers all provided {@link ValueContainer}s to this
                             * {@link CompositeValueStore} much like {@link #offer(ValueContainer)}
                             * except all in a single batch. The end result of the values successfully
                             * offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}. Any merge conflicts are resolved through
                             * the {@link MergeFunction}.
                             * @param valueContainers The values to set
                             * @param function The function to resolve the values
                             * @return The transaction result
                             */
                            // @ts-ignore
                            offer(valueContainers: java.lang.Iterable<H>, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that a {@link DataTransactionResult} is returned for any
                             * successful {@link BaseValue}s from this {@link CompositeValueStore}.
                             * Intentionally, however, this differs from {@link #offer(Key, Object)}
                             * as it will intentionally throw an exception if the result was a failure.
                             * @param key The key to the value to set
                             * @param value The value to set
                             * @param <E> The type of value
                             * @return The transaction result
                             * @throws IllegalArgumentException If the result is a failure likely due to
                             *      incompatibility
                             */
                            // @ts-ignore
                            tryOffer<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that a {@link DataTransactionResult} is returned for any
                             * successful {@link BaseValue}s from this {@link CompositeValueStore}.
                             * Intentionally, however, this differs from {@link #offer(Key, Object)}
                             * as it will intentionally throw an exception if the result was a failure.
                             * @param value The value to set
                             * @param <E> The type of value
                             * @return The transaction result
                             * @throws IllegalArgumentException If the result is a failure likely due to
                             *      incompatibility
                             */
                            // @ts-ignore
                            tryOffer<E>(value: org.spongepowered.api.data.value.BaseValue<E>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. Intentionally, however, this differs
                             * from {@link #offer(ValueContainer)} as it will intentionally throw an
                             * exception if the result was a failure.
                             * @param valueContainer The value to set
                             * @return The transaction result
                             * @throws IllegalArgumentException If the result is a failure likely due to
                             *      incompatibility
                             */
                            // @ts-ignore
                            tryOffer(valueContainer: H): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. Any overlaps of data are merged via
                             * the {@link MergeFunction}. Intentionally, however, this differs
                             * from {@link #offer(ValueContainer)} as it will intentionally throw an
                             * exception if the result was a failure.
                             * @param valueContainer The value to set
                             * @param function The merge function
                             * @return The transaction result
                             * @throws IllegalArgumentException If the result is a failure likely due to
                             *      incompatibility
                             */
                            // @ts-ignore
                            tryOffer(valueContainer: H, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Attempts to remove all {@link Value}s associated with the class of the
                             * provided {@link ValueContainer} class. All values that were successfully
                             * removed will be provided in
                             * {@link DataTransactionResult#getReplacedData()}. If the data can not be
                             * removed, the result will be an expected
                             * {@link org.spongepowered.api.data.DataTransactionResult.Type#FAILURE}.
                             * @param containerClass The container class
                             * @return The transaction result
                             */
                            // @ts-ignore
                            remove(containerClass: java.lang.Class<any>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Attempts to remove the provided {@link BaseValue}. All values that were
                             * successfully removed will be provided in
                             * {@link DataTransactionResult#getReplacedData()}. If the data can not be
                             * removed, the result will be an expected
                             * {@link org.spongepowered.api.data.DataTransactionResult.Type#FAILURE}.
                             * @param value The value to remove
                             * @return The transaction result
                             */
                            // @ts-ignore
                            remove(value: org.spongepowered.api.data.value.BaseValue<any>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Attempts to remove the data associated with the provided {@link Key}.
                             * All values that were successfully removed will be provided in
                             * {@link DataTransactionResult#getReplacedData()}. If the data can not be
                             * removed, the result will be an expected
                             * {@link org.spongepowered.api.data.DataTransactionResult.Type#FAILURE}.
                             * @param key The key of the data
                             * @return The transaction result
                             */
                            // @ts-ignore
                            remove(key: org.spongepowered.api.data.key.Key<any>): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Attempts to "revert" a {@link DataTransactionResult} such that any
                             * of the {@link DataTransactionResult#getReplacedData()} are offered
                             * back, and any {@link DataTransactionResult#getSuccessfulData()} are
                             * removed if they were not the same types as any exising in the
                             * replaced values.
                             * @param result The result to undo
                             * @return The result of the undo
                             */
                            // @ts-ignore
                            undo(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Performs an absolute copy of all {@link Value}s and
                             * {@link ValueContainer}s to this {@link CompositeValueStore} such that
                             * any overlapping {@link Value}s are offered for replacement. The
                             * result is provided as a {@link DataTransactionResult}.
                             * @param that The other {#link CompositeValueStore} to copy values from
                             * @return The transaction result
                             */
                            // @ts-ignore
                            copyFrom(that: S): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Performs an absolute copy of all {@link Value}s and
                             * {@link ValueContainer}s to this {@link CompositeValueStore} such that
                             * any overlapping {@link Value}s are offered for replacement. The
                             * result is provided as a {@link DataTransactionResult}.
                             * @param that The other {#link CompositeValueStore} to copy values from
                             * @param function The function to resolve merge conflicts
                             * @return The transaction result
                             */
                            // @ts-ignore
                            copyFrom(that: S, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Gets an copied collection of all known {@link ValueContainer}s
                             * belonging to this {@link CompositeValueStore}. An individual
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
