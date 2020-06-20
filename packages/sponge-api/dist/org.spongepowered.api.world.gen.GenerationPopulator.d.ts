declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    /**
                     * A populator which acts directly on the {@link MutableBlockVolume} during the
                     * generation phase rather than the population phase.
                     * <p>Unlike a normal {@link Populator}, a {@link GenerationPopulator} is
                     * restricted to the chunk that is currently being generated.</p>
                     */
                    // @ts-ignore
                    interface GenerationPopulator {
                        /**
                         * Operates on a {@link MutableBlockVolume} either forming the base terrain
                         * or performing modifications during the generation phase.
                         * @param world The world
                         * @param buffer The buffer to apply the changes to. The buffer can be of
                         *         any size.
                         * @param biomes The biomes for generation
                         */
                        // @ts-ignore
                        populate(world: org.spongepowered.api.world.World, buffer: org.spongepowered.api.world.extent.MutableBlockVolume, biomes: org.spongepowered.api.world.extent.ImmutableBiomeVolume): void
                    }
                }
            }
        }
    }
}
