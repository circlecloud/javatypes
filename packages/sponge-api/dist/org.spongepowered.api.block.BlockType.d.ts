declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                /**
                 * Describes a base type of block.
                 * <p>Blocks are further differentiated using a {@link BlockState}. Complex
                 * data, such as inventory contents, are considered data, which is provided
                 * via {@link DataHolder}.</p>
                 */
                // @ts-ignore
                interface BlockType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable, org.spongepowered.api.data.property.PropertyHolder {
                    /**
                     * Return the internal ID for the block.
                     * <p>The format of the internal ID may vary between implementations
                     * but in Minecraft, it follows the format of {@code domain:type}, an
                     * example being {@code minecraft:stone}.</p>
                     * @return The id
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Return the default state for this block.
                     * @return The default state
                     */
                    // @ts-ignore
                    getDefaultState(): org.spongepowered.api.block.BlockState
                    /**
                     * Gets a {@link Collection} of all {@link BlockState}s for this
                     * {@link BlockType}.
                     * @return An immutable collection of all block states for this block type
                     */
                    // @ts-ignore
                    getAllBlockStates(): Array<org.spongepowered.api.block.BlockState>
                    /**
                     * Return the {@link ItemType} that represents this block.
                     * @return The item type or {#link Optional#empty()} otherwise
                     */
                    // @ts-ignore
                    getItem(): java.util.Optional<org.spongepowered.api.item.ItemType>
                    /**
                     * Gets if this BlockType is set to receive random block ticks.
                     * <p>Random block ticks are most commonly used for growth of plants.</p>
                     * @return If the BlockType ticks randomly.
                     */
                    // @ts-ignore
                    getTickRandomly(): boolean
                    /**
                     * Sets if the BlockType should receive random block ticks.
                     * <p>Random block ticks are most commonly used for growth of plants.</p>
                     * @param tickRandomly If the BlockType should tick randomly.
                     */
                    // @ts-ignore
                    setTickRandomly(tickRandomly: boolean): void
                    /**
                     * Gets an immutable {@link Collection} of all applicable
                     * {@link BlockTrait}s for this {@link BlockType}.
                     * @return An immutable collection of all applicable block traits
                     */
                    // @ts-ignore
                    getTraits(): Array<org.spongepowered.api.block.trait.BlockTrait<any>>
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
                     * Gets the {@link BlockSoundGroup} for this block.
                     * @return This block's sound group.
                     */
                    // @ts-ignore
                    getSoundGroup(): org.spongepowered.api.block.BlockSoundGroup
                }
            }
        }
    }
}
