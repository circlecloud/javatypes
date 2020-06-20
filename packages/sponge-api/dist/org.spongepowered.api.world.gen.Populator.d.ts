declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    /**
                     * After the initial terrain has been generated, the populators step in to add
                     * trees, grass, flowers, ores, etc.
                     * <p>A populator has access to some nearby chunks, so it can more easily place
                     * objects that cross chunk boundaries.</p>
                     * <p>Instead of directly implementing this interface, it may be easier to
                     * implement {@link PopulatorObject} instead, and use the {@link RandomObject}
                     * populator to get a populator that spawns that object.</p>
                     * <p>Note that blocks are not captured, nor are events thrown for block changes
                     * from a populator performing block changes.</p>
                     * @see PopulatorObject
                     */
                    // @ts-ignore
                    interface Populator {
                        /**
                         * Gets the type of this populator.
                         * <p>It should be noted that the relationship of classes implementing
                         * {@link Populator} and {@link PopulatorType}s is not a one-to-one
                         * relationship. That is to say that multiple different populators could
                         * return the same {@link PopulatorType} for the purposes of grouping (A
                         * plugin populator creating custom glowstone clusters may want to return
                         * {@link PopulatorTypes#GLOWSTONE} so that other plugins can recognize
                         * changes that it makes as being part of the generation of glowstone).</p>
                         * @return The populator type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.world.gen.PopulatorType
                        /**
                         * Applies the populator to the given {@link Extent} volume. The entire volume
                         * of the given extent should be populated.
                         * <p>Due to their transitive nature virtual biomes cannot be fetched from
                         * the given extent, instead your populator should override
                         * {@link #populate(World, Extent, Random, ImmutableBiomeVolume)} to make use
                         * of the ImmutableBiomeArea which does contain virtual biome types.</p>
                         * @param world The World within which the generation in happening
                         * @param volume The volume to be populated
                         * @param random A random number generator. This random number generator is
                         *         based on the world seed and the chunk position. It is shared with
                         *         with other populators
                         */
                        // @ts-ignore
                        populate(world: org.spongepowered.api.world.World, volume: org.spongepowered.api.world.extent.Extent, random: java.util.Random): void
                        /**
                         * Applies the populator to the given {@link Extent} volume. The entire volume
                         * of the given extent should be populated.
                         * @param world The World within which the generation in happening
                         * @param volume The volume to be populated
                         * @param random A random number generator. This random number generator is
                         *         based on the world seed and the chunk position. It is shared with
                         *         with other populators
                         * @param virtualBiomes A biome volume for the extent being populated which
                         *         includes any virtual biomes not persisted to the world
                         */
                        // @ts-ignore
                        populate(world: org.spongepowered.api.world.World, volume: org.spongepowered.api.world.extent.Extent, random: java.util.Random, virtualBiomes: org.spongepowered.api.world.extent.ImmutableBiomeVolume): void
                    }
                }
            }
        }
    }
}
