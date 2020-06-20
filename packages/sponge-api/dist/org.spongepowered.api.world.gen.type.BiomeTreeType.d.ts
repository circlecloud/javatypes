declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace type {
                        /**
                         * Represents the various types of trees which may be spawned into the world.
                         */
                        // @ts-ignore
                        interface BiomeTreeType extends org.spongepowered.api.CatalogType {
                            /**
                             * Gets the {@link PopulatorObject} which is used to generate this tree into
                             * the world.
                             * @return The populator object
                             */
                            // @ts-ignore
                            getPopulatorObject(): org.spongepowered.api.world.gen.PopulatorObject
                            /**
                             * Sets the {@link PopulatorObject} which is used to generate this tree into
                             * the world.
                             * @param object The new populator object
                             */
                            // @ts-ignore
                            setPopulatorObject(object: org.spongepowered.api.world.gen.PopulatorObject): void
                            /**
                             * Gets whether this tree type has a larger equivalent.
                             * @return Has large equivalent
                             */
                            // @ts-ignore
                            hasLargeEquivalent(): boolean
                            /**
                             * Gets the {@link PopulatorObject} which is used to generate the larger
                             * equivalent of this tree into the world.
                             * @return The populator object
                             */
                            // @ts-ignore
                            getLargePopulatorObject(): java.util.Optional<org.spongepowered.api.world.gen.PopulatorObject>
                            /**
                             * Sets the {@link PopulatorObject} which is used to generate the larger
                             * equivalent of this tree into the world.
                             * @param object The new populator object
                             */
                            // @ts-ignore
                            setLargePopulatorObject(object: org.spongepowered.api.world.gen.PopulatorObject): void
                        }
                    }
                }
            }
        }
    }
}
