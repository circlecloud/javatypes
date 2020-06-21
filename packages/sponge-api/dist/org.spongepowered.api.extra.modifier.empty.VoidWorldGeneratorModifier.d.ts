declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace modifier {
                    namespace empty {
                        /**
                         * A modifier that causes a {@link World} to generate with empty chunks. Useful for "lobby-like" worlds.
                         */
                        // @ts-ignore
                        class VoidWorldGeneratorModifier extends java.lang.Object implements org.spongepowered.api.world.gen.WorldGeneratorModifier {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public modifyWorldGenerator(world: org.spongepowered.api.world.storage.WorldProperties, settings: org.spongepowered.api.data.DataContainer, worldGenerator: org.spongepowered.api.world.gen.WorldGenerator): void
                            // @ts-ignore
                            public getId(): string
                            // @ts-ignore
                            public getName(): string
                        }
                    }
                }
            }
        }
    }
}
