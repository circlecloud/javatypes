declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A type of {@link Location} based value store that can handle proxied data api
                     * related queries for specific positions.
                     */
                    // @ts-ignore
                    interface LocationCompositeValueStore {
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location.
                         * @param coordinates The position of the block
                         * @param key The key to the data
                         * @param <E> The type of element of data
                         * @return The data, if available
                         */
                        // @ts-ignore
                        get<E>(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): java.util.Optional<E>
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key to the data
                         * @param <E> The type of element of data
                         * @return The data, if available
                         */
                        // @ts-ignore
                        get<E>(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): java.util.Optional<E>
                        /**
                         * Gets an instance of the given data class for given block at the location.
                         * <p>If there is no pre-existing data that can be represented by the given
                         * {@link DataManipulator} class, {@link Optional#empty()} is returned. </p>
                         * @param coordinates The position of the block
                         * @param manipulatorClass The data class
                         * @param <T> The type of data
                         * @return An instance of the class, if not available
                         */
                        // @ts-ignore
                        get<T extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>(coordinates: Vector3i, manipulatorClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets an instance of the given data class for given block at the location.
                         * <p>If there is no pre-existing data that can be represented by the given
                         * {@link DataManipulator} class, {@link Optional#empty()} is returned. </p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulatorClass The data class
                         * @param <T> The type of data
                         * @return An instance of the class, if not available
                         */
                        // @ts-ignore
                        get<T extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulatorClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets or creates a new {@link DataManipulator} that can be accepted by the
                         * block at the location. In the event that there is no data that can be
                         * represented by the given {@link DataManipulator}, a new
                         * {@link DataManipulator} object is created with default values.
                         * <p>In the event the {@link DataManipulator} can not represent any data
                         * pertaining to the block at the location, {@link Optional#empty()} is
                         * returned.</p>
                         * @param coordinates The position of the block
                         * @param manipulatorClass The data class
                         * @param <T> The type of data
                         * @return An instance of the class, if not available
                         */
                        // @ts-ignore
                        getOrCreate<T extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>(coordinates: Vector3i, manipulatorClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets or creates a new {@link DataManipulator} that can be accepted by the
                         * block at the location. In the event that there is no data that can be
                         * represented by the given {@link DataManipulator}, a new
                         * {@link DataManipulator} object is created with default values.
                         * <p>In the event the {@link DataManipulator} can not represent any data
                         * pertaining to the block at the location, {@link Optional#empty()} is
                         * returned.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulatorClass The data class
                         * @param <T> The type of data
                         * @return An instance of the class, if not available
                         */
                        // @ts-ignore
                        getOrCreate<T extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulatorClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case <code>null</code> may be returned.
                         * @param coordinates The position of the block
                         * @param key The key to the data
                         * @param <E> The type of element of data
                         * @return The data or null
                         */
                        // @ts-ignore
                        getOrNull<E>(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): E
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case <code>null</code> may be returned.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key to the data
                         * @param <E> The type of element of data
                         * @return The data or null
                         */
                        // @ts-ignore
                        getOrNull<E>(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): E
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case the default value may be returned.
                         * @param coordinates The position of the block
                         * @param key The key to the data
                         * @param defaultValue The default value to be provided
                         * @param <E> The type of element of data
                         * @return The data or null
                         */
                        // @ts-ignore
                        getOrElse<E>(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, defaultValue: E): E
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case the default value may be returned.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key to the data
                         * @param defaultValue The default value to return
                         * @param <E> The type of element of data
                         * @return The data or null
                         */
                        // @ts-ignore
                        getOrElse<E>(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, defaultValue: E): E
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location. The data may not exist, or may not be compatible in
                         * which case <code>null</code> may be returned.
                         * @param coordinates The position of the block
                         * @param key The key to the data
                         * @param <E> The type of element of data
                         * @param <V> The type of value
                         * @return The base value, if available
                         */
                        // @ts-ignore
                        getValue<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<V>): java.util.Optional<V>
                        /**
                         * Gets the value of data that is keyed to the provided {@link Key} at the
                         * give block location.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key to the data
                         * @param <E> The type of element of data
                         * @param <V> The type of value
                         * @return The base value, if available
                         */
                        // @ts-ignore
                        getValue<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<V>): java.util.Optional<V>
                        /**
                         * Checks if the provided {@link Key} to the data is supported by the block
                         * at the provided location.
                         * @param coordinates The position of the block
                         * @param key The Key to the value of data
                         * @return True if the block supports the data
                         */
                        // @ts-ignore
                        supports(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<any>): boolean
                        /**
                         * Checks if the provided {@link Key} to the data is supported by the block
                         * at the provided location.
                         * @param x The X coordinate
                         * @param y The Y coordinate
                         * @param z The Z coordinate
                         * @param key The Key to the value of data
                         * @return True if the block supports the data
                         */
                        // @ts-ignore
                        supports(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<any>): boolean
                        /**
                         * Checks if the provided {@link BaseValue} is supported by the block at the
                         * provided location.
                         * @param coordinates The position of the block
                         * @param value The value of data
                         * @return True if the block supports the data
                         */
                        // @ts-ignore
                        supports(coordinates: Vector3i, value: org.spongepowered.api.data.value.BaseValue<any>): boolean
                        /**
                         * Checks if the provided {@link BaseValue} is supported by the block at the
                         * provided location.
                         * @param x The X coordinate
                         * @param y The Y coordinate
                         * @param z The Z coordinate
                         * @param value The value of data
                         * @return True if the block supports the data
                         */
                        // @ts-ignore
                        supports(x: number /*int*/, y: number /*int*/, z: number /*int*/, value: org.spongepowered.api.data.value.BaseValue<any>): boolean
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         * @param coordinates The position of the block
                         * @param manipulatorClass The data class
                         * @return True if the block at the given position can accept the
                         *          {#link DataManipulator} object
                         */
                        // @ts-ignore
                        supports(coordinates: Vector3i, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): boolean
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulatorClass The data class
                         * @return True if the block at the given position can accept the
                         *          {#link DataManipulator} object
                         */
                        // @ts-ignore
                        supports(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): boolean
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         * @param coordinates The position of the block
                         * @param manipulator The manipulator
                         * @return True if the block at the given position can accept the
                         *          {#link DataManipulator} object
                         */
                        // @ts-ignore
                        supports(coordinates: Vector3i, manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): boolean
                        /**
                         * Checks if the given {@link DataManipulator} class is able to represent
                         * data within the block at the given position.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulator The manipulator
                         * @return True if the block at the given position can accept the
                         *          {#link DataManipulator} object
                         */
                        // @ts-ignore
                        supports(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): boolean
                        /**
                         * Gets an {@link ImmutableSet} of {@link Key}s for the block at the given
                         * location.
                         * @param coordinates The position of the block
                         * @return The immutable set of values for the block
                         */
                        // @ts-ignore
                        getKeys(coordinates: Vector3i): java.util.Set<org.spongepowered.api.data.key.Key<?>>
                        /**
                         * Gets an {@link ImmutableSet} of {@link Key}s for the block at the given
                         * location.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The immutable set of values for the block
                         */
                        // @ts-ignore
                        getKeys(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Set<org.spongepowered.api.data.key.Key<?>>
                        /**
                         * Gets an {@link ImmutableSet} of {@link ImmutableValue}s for the block at
                         * the given location.
                         * @param coordinates The position of the block
                         * @return The immutable set of values for the block
                         */
                        // @ts-ignore
                        getValues(coordinates: Vector3i): java.util.Set<org.spongepowered.api.data.value.immutable.ImmutableValue<?>>
                        /**
                         * Gets an {@link ImmutableSet} of {@link ImmutableValue}s for the block at
                         * the given location.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The immutable set of values for the block
                         */
                        // @ts-ignore
                        getValues(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Set<org.spongepowered.api.data.value.immutable.ImmutableValue<?>>
                        /**
                         * Applies a transformation on the pre-existing value of the data keyed by
                         * the provided {@link Key} and returns a {@link DataTransactionResult} of
                         * said transformation.
                         * @param coordinates The position of the block
                         * @param key The key to the data
                         * @param function The function applying the transformation
                         * @param <E> The type of data
                         * @return The transaction result
                         */
                        // @ts-ignore
                        transform<E>(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, func: java.util.function.Function<E, E> | java.util.function$.Function<E, E>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Applies a transformation on the pre-existing value of the data keyed by
                         * the provided {@link Key} and returns a {@link DataTransactionResult} of
                         * said transformation.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key to the data
                         * @param function The function applying the transformation
                         * @param <E> The type of data
                         * @return The transaction result
                         */
                        // @ts-ignore
                        transform<E>(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, func: java.util.function.Function<E, E> | java.util.function$.Function<E, E>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given <code>E</code> value that is keyed by the provided
                         * {@link Key} to the block at the provided location.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param coordinates The position of the block
                         * @param key The key for the data
                         * @param value The value to offer
                         * @param <E> The type of data being offered
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer<E>(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, value: E): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given <code>E</code> value that is keyed by the provided
                         * {@link Key} to the block at the provided location.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key for the data
                         * @param value The value to offer
                         * @param <E> The type of data being offered
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer<E>(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, value: E): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given {@link BaseValue} to the block at the given position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param coordinates The position of the block
                         * @param value The value to offer
                         * @param <E> The type of the element wrapped by the value
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer<E>(coordinates: Vector3i, value: org.spongepowered.api.data.value.BaseValue<E>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given {@link BaseValue} to the block at the given position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param value The value to offer
                         * @param <E> The type of the element wrapped by the value
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer<E>(x: number /*int*/, y: number /*int*/, z: number /*int*/, value: org.spongepowered.api.data.value.BaseValue<E>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param coordinates The position of the block
                         * @param manipulator The manipulator data to offer
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(coordinates: Vector3i, manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulator The manipulator data to offer
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param coordinates The position of the block
                         * @param manipulator The manipulator data to offer
                         * @param function The merge function to resolve conflicts
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(coordinates: Vector3i, manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the given {@link DataManipulator} to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected and replaced
                         * data.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulator The manipulator data to offer
                         * @param function The merge function to resolve conflicts
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the provided {@link DataManipulator}s to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected, replaced, and
                         * successfully offered data.</p>
                         * @param coordinates The position of the block
                         * @param manipulators The values to offer
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(coordinates: Vector3i, manipulators: java.lang.Iterable<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the provided {@link DataManipulator}s to the block at the given
                         * position.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected, replaced, and
                         * successfully offered data.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulators The values to offer
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulators: java.lang.Iterable<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Offers the provided {@link DataManipulator}s to the block at the given
                         * position. If there's any overlaps of data, the provided
                         * {@link MergeFunction} is used to delegate the merges. It is possible to
                         * recycle {@link MergeFunction}s provided that the {@link MergeFunction} is
                         * aware of being usable in multiple environments.
                         * <p>If any data is rejected or existing data is replaced, the
                         * {@link DataTransactionResult} will retain the rejected, replaced, and
                         * successfully offered data.</p>
                         * @param blockPosition The block position
                         * @param values The values to offer
                         * @param function The merge function to resolve conflicts
                         * @return The transaction result
                         */
                        // @ts-ignore
                        offer(blockPosition: Vector3i, values: java.lang.Iterable<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to remove the given {@link DataManipulator} represented by the
                         * block at the given location if possible.
                         * <p>Certain {@link DataManipulator}s can not be removed due to certain
                         * dependencies relying on the particular data to function.</p>
                         * @param coordinates The position of the block
                         * @param manipulatorClass The data class
                         * @return If the manipulator was removed
                         */
                        // @ts-ignore
                        remove(coordinates: Vector3i, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to remove the given {@link DataManipulator} represented by the
                         * block at the given location if possible.
                         * <p>Certain {@link DataManipulator}s can not be removed due to certain
                         * dependencies relying on the particular data to function.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param manipulatorClass The data class
                         * @return If the manipulator was removed
                         */
                        // @ts-ignore
                        remove(x: number /*int*/, y: number /*int*/, z: number /*int*/, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to remove the data associated with the provided {@link Key} from
                         * the block at the provided location.
                         * @param coordinates The position of the block
                         * @param key The key to the data to remove
                         * @return The transaction result
                         */
                        // @ts-ignore
                        remove(coordinates: Vector3i, key: org.spongepowered.api.data.key.Key<any>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to remove the data associated with the provided {@link Key} from
                         * the block at the provided location.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param key The key of the data to remove
                         * @return The transaction result
                         */
                        // @ts-ignore
                        remove(x: number /*int*/, y: number /*int*/, z: number /*int*/, key: org.spongepowered.api.data.key.Key<any>): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to undo a {@link DataTransactionResult}. Specifically, all
                         * {@link ImmutableValue}s that were successfully added are removed, and all
                         * replaced {@link ImmutableValue}s are offered.
                         * @param coordinates The position of the block
                         * @param result The transaction result to undo
                         * @return The transaction result
                         */
                        // @ts-ignore
                        undo(coordinates: Vector3i, result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to undo a {@link DataTransactionResult}. Specifically, all
                         * {@link ImmutableValue}s that were successfully added are removed, and all
                         * replaced {@link ImmutableValue}s are offered.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param result The transaction result to undo
                         * @return The transaction result
                         */
                        // @ts-ignore
                        undo(x: number /*int*/, y: number /*int*/, z: number /*int*/, result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all the relevant data from the provided
                         * {@link DataHolder} to the block at the provided coordinates.
                         * @param to The coordinates of the block
                         * @param from The data holder to copy data from
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(to: Vector3i, from: org.spongepowered.api.data.DataHolder): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all the relevant data from the provided
                         * {@link DataHolder} to the block at the provided coordinates.
                         * @param xTo The X pos
                         * @param yTo The Y pos
                         * @param zTo The Z pos
                         * @param from The data holder to copy data from
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(xTo: number /*int*/, yTo: number /*int*/, zTo: number /*int*/, from: org.spongepowered.api.data.DataHolder): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all the relevant data from the provided
                         * {@link DataHolder} to the block at the provided coordinates.
                         * @param coordinatesTo The coordinates of the block
                         * @param coordinatesFrom The coordinates of the block to copy data from
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(coordinatesTo: Vector3i, coordinatesFrom: Vector3i): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates.
                         * @param xTo The X position of the block to copy data to
                         * @param yTo The Y position of the block to copy data to
                         * @param zTo The Z position of the block to copy data to
                         * @param xFrom The X position of the block to copy data from
                         * @param yFrom The Y position of the block to copy data from
                         * @param zFrom The Z position of the block to copy data from
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(xTo: number /*int*/, yTo: number /*int*/, zTo: number /*int*/, xFrom: number /*int*/, yFrom: number /*int*/, zFrom: number /*int*/): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         * @param to The block coordinates to copy to
                         * @param from the data holder to copy data from
                         * @param function The merge function to resolve conflicts
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(to: Vector3i, from: org.spongepowered.api.data.DataHolder, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         * @param xTo The X pos of the block to copy data to
                         * @param yTo The Y pos of the block to copy data to
                         * @param zTo The Z pos of the block to copy data to
                         * @param from The data holder to copy data from
                         * @param function The merge function to resolve conflicts
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(xTo: number /*int*/, yTo: number /*int*/, zTo: number /*int*/, from: org.spongepowered.api.data.DataHolder, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         * @param coordinatesTo The coordinates of the block copying data to
                         * @param coordinatesFrom The coordinates of the block to copy data from
                         * @param function The merge function to resolve conflicts
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(coordinatesTo: Vector3i, coordinatesFrom: Vector3i, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Attempts to copy all {@link ImmutableValue}s from the provided block to
                         * provided block to the provided block coordinates. Any conflicting data is
                         * handled through the provided {@link MergeFunction}.
                         * @param xTo The X position
                         * @param yTo The Y position
                         * @param zTo The Z position
                         * @param xFrom The X position
                         * @param yFrom The Y position
                         * @param zFrom The Z position
                         * @param function The merge resolving function
                         * @return The transaction result
                         */
                        // @ts-ignore
                        copyFrom(xTo: number /*int*/, yTo: number /*int*/, zTo: number /*int*/, xFrom: number /*int*/, yFrom: number /*int*/, zFrom: number /*int*/, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                        /**
                         * Gets an copied collection of all known {@link DataManipulator}s belonging
                         * to the block at the given position. An individual {@link DataManipulator}
                         * can be used for creating new data to replace on the block at the given
                         * position.
                         * @param coordinates The position of the block
                         * @return A collection of copied data manipulators belonging to the block
                         *          at the given position
                         */
                        // @ts-ignore
                        getManipulators(coordinates: Vector3i): java.util.Collection<org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>
                        /**
                         * Gets an copied collection of all known {@link DataManipulator}s belonging
                         * to the block at the given position. An individual {@link DataManipulator}
                         * can be used for creating new data to replace on the block at the given
                         * position.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return A collection of copied data manipulators belonging to the block
                         *          at the given position
                         */
                        // @ts-ignore
                        getManipulators(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Collection<org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>
                        /**
                         * Validates the container with known data required to set the raw data to
                         * the block at the given position. If the container is incomplete or
                         * contains invalid data, <code>false</code> is returned.
                         * <p>This validation should be checked prior to calling
                         * {@link #setRawData(Vector3i, DataView)} to avoid exceptions.</p>
                         * @param position The position of the block
                         * @param container The raw data to validate
                         * @return True if the data is valid
                         */
                        // @ts-ignore
                        validateRawData(position: Vector3i, container: org.spongepowered.api.data.DataView): boolean
                        /**
                         * Validates the container with known data required to set the raw data to
                         * the block at the given position. If the container is incomplete or
                         * contains invalid data, <code>false</code> is returned.
                         * <p>This validation should be checked prior to calling
                         * {@link #setRawData(Vector3i, DataView)} to avoid exceptions.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param container The raw data to validate
                         * @return True if the data is valid
                         */
                        // @ts-ignore
                        validateRawData(x: number /*int*/, y: number /*int*/, z: number /*int*/, container: org.spongepowered.api.data.DataView): boolean
                        /**
                         * Attempts to set all data of the block at the given position according to
                         * the {@link DataContainer}'s held information. Using this to modify known
                         * {@link DataManipulator}s is unsupported and if the data is invalid, an
                         * {@link InvalidDataException} is thrown.
                         * <p>This setter is used to provide setting custom data that is not
                         * represented by the Data API, including forge mods and other unknown data.
                         * Attempts at validating known {@link DataManipulator}s contained in the
                         * data container are made with the assumption that all necessary data
                         * exists.</p>
                         * @param position The position of the block
                         * @param container A container containing all raw data to set on the block
                         *         at the given position
                         * @throws InvalidDataException If the container is missing or has invalid
                         *          data that this holder will refuse
                         */
                        // @ts-ignore
                        setRawData(position: Vector3i, container: org.spongepowered.api.data.DataView): void
                        /**
                         * Attempts to set all data of the block at the given position according to
                         * the {@link DataContainer}'s held information. Using this to modify known
                         * {@link DataManipulator}s is unsupported and if the data is invalid, an
                         * {@link InvalidDataException} is thrown.
                         * <p>This setter is used to provide setting custom data that is not
                         * represented by the Data API, including forge mods and other unknown data.
                         * Attempts at validating known {@link DataManipulator}s contained in the
                         * data container are made with the assumption that all necessary data
                         * exists.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param container A container containing all raw data to set on the block
                         *         at the given position
                         * @throws InvalidDataException If the container is missing or has invalid
                         *          data that this holder will refuse
                         */
                        // @ts-ignore
                        setRawData(x: number /*int*/, y: number /*int*/, z: number /*int*/, container: org.spongepowered.api.data.DataView): void
                    }
                }
            }
        }
    }
}
