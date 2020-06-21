declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                /**
                 * Represents a particular "state" that can exist at a {@link Location} with
                 * a particular {@link BlockType} and various {@link ImmutableValue}s defining
                 * the information for the "block". Note that normally, there may exist only
                 * a single instance of a particular {@link BlockState} as they are immutable,
                 * a particular instance may be cached for various uses.
                 */
                // @ts-ignore
                interface BlockState extends org.spongepowered.api.data.ImmutableDataHolder<org.spongepowered.api.block.BlockState>, org.spongepowered.api.data.property.DirectionRelativePropertyHolder, org.spongepowered.api.CatalogType {
                    /**
                     * Creates a new {@link Builder} for building {@link BlockState}s.
                     * @return The builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.block.BlockState.Builder
                    /**
                     * Constructs a new {@link MatcherBuilder} to construct a {@link StateMatcher}.
                     * @param type The block type
                     * @return The builder
                     */
                    // @ts-ignore
                    matcher(type: org.spongepowered.api.block.BlockType): org.spongepowered.api.block.BlockState.MatcherBuilder
                    /**
                     * Gets the base type of block.
                     * <p>The type does not include block data such as the contents of
                     * inventories.</p>
                     * @return The type of block
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.block.BlockType
                    /**
                     * Applies extended properties for the current @{link BlockType} if any to
                     * the current {@link BlockState}. This usually is gathered from surrounding
                     * {@link BlockState}'s.
                     * <p>Note: This should only be called for live {@link BlockState}'s at
                     * a specific {@link Location} for accurate results.</p>
                     * <p>
                     * Examples of some extended properties are:
                     * </p>
                     * <ul>
                     * <li>snow on podzul dirt block</li>
                     * <li>occupied status for beds</li>
                     * <li>fence connections</li>
                     * </ul>
                     * @param location The location used to search for extended properties
                     * @return The blockstate with extended properties included if any
                     */
                    // @ts-ignore
                    withExtendedProperties(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.block.BlockState
                    /**
                     * Gets the associated {@link BlockState} with the cycled
                     * {@link BaseValue}. Note that only {@link Cycleable} values can be
                     * cycled. To change a particular {@link Key}'ed {@link Value}, usage
                     * of the {@link BlockState#with(Key, Object)} is recommended.
                     * @param key The key to cycle
                     * @return The blockstate instance with the cycled value
                     */
                    // @ts-ignore
                    cycleValue(key: org.spongepowered.api.data.key.Key<any>): org.spongepowered.api.block.BlockState
                    /**
                     * Creates a new {@link BlockSnapshot} with this current {@link BlockState}
                     * at the desired {@link Location}. If the {@link Location} has the same
                     * {@link BlockState}, and the {@link BlockType} can house a
                     * {@link TileEntity}, the data from the tile entity may be included in the
                     * returned  {@link BlockSnapshot}.
                     * @param location The location for the snapshot
                     * @return The newly created snapshot
                     */
                    // @ts-ignore
                    snapshotFor(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.block.BlockSnapshot
                    /**
                     * Gets the {@link Comparable} value for the specific {@link BlockTrait}
                     * such that if the {@link BlockState} does not support the
                     * {@link BlockTrait}, {@link Optional#empty()} is returned.
                     * @param blockTrait The block trait instance
                     * @param <T> The generic type of block trait
                     * @return The comparable value, if available and compatible
                     */
                    // @ts-ignore
                    getTraitValue<T extends java.lang.Comparable<T>>(blockTrait: org.spongepowered.api.block.trait.BlockTrait<T>): java.util.Optional<T>
                    /**
                     * Attempts to retrieve the {@link BlockTrait} instance associated with
                     * this {@link BlockState}s {@link BlockType} by string id. If there is no
                     * {@link BlockTrait} available, {@link Optional#empty()} is returned.
                     * @param blockTrait The block trait id
                     * @return The block trait, if available
                     */
                    // @ts-ignore
                    getTrait(blockTrait: java.lang.String | string): java.util.Optional<org.spongepowered.api.block.trait.BlockTrait<any>>
                    /**
                     * Gets the {@link BlockState} with the appropriate value for the given
                     * {@link BlockTrait}. If the {@link BlockTrait} is not supported,
                     * {@link Optional#empty()} is returned. If the object is not either
                     * an instance contained in {@link BlockTrait#getPossibleValues()} or
                     * an instance {@link Object#toString()}, {@link Optional#empty()} may be
                     * returned.
                     * @param trait The trait
                     * @param value The value
                     * @return The blockstate, if supported
                     */
                    // @ts-ignore
                    withTrait(trait: org.spongepowered.api.block.trait.BlockTrait<any>, value: java.lang.Object | any): java.util.Optional<org.spongepowered.api.block.BlockState>
                    /**
                     * Gets an immutable {@link Collection} of all applicable
                     * {@link BlockTrait}s for this {@link BlockState}.
                     * @return An immutable collection of all applicable block traits
                     */
                    // @ts-ignore
                    getTraits(): Array<org.spongepowered.api.block.trait.BlockTrait<any>>
                    /**
                     * Gets an immutable {@link Collection} of all the values for all
                     * {@link BlockTrait}s for this {@link BlockState}.
                     * @return An immutable collection of all the values for all applicable
                     *      traits
                     */
                    // @ts-ignore
                    getTraitValues(): Array<any>
                    /**
                     * Gets an immutable or unmodifiable {@link Map} of the known {@link BlockTrait}s
                     * to their current values for this {@link BlockState}.
                     * @return The immutable map of block traits to their values representing
                     *      this block state
                     */
                    // @ts-ignore
                    getTraitMap(): java.util.Map<org.spongepowered.api.block.trait.BlockTrait<any>, any>
                }
            }
        }
    }
}
