declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace modifier {
                    namespace skylands {
                        /**
                         * A terrain generator for a Skylands look-alike.
                         * @deprecated Will be removed from the api
                         */
                        // @ts-ignore
                        class SkylandsTerrainGenerator extends java.lang.Object implements org.spongepowered.api.world.gen.GenerationPopulator {
                            /**
                             * Constructs a new Skylands terrain generator.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Maximum height of the basic terrain.
                             */
                            // @ts-ignore
                            readonly MAX_HEIGHT: number /*int*/
                            /**
                             * Minimum height of the basic terrain.
                             */
                            // @ts-ignore
                            readonly MIN_HEIGHT: number /*int*/
                            // @ts-ignore
                            populate(world: org.spongepowered.api.world.World, buffer: org.spongepowered.api.world.extent.MutableBlockVolume, biomes: org.spongepowered.api.world.extent.ImmutableBiomeVolume): void
                        }
                    }
                }
            }
        }
    }
}
