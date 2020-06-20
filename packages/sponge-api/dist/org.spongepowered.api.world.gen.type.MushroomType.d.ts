declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace type {
                        /**
                         * Represents the various types of mushrooms which may be spawned into the
                         * world.
                         */
                        // @ts-ignore
                        interface MushroomType extends org.spongepowered.api.CatalogType {
                            /**
                             * Gets the {@link PopulatorObject} which is used to generate the large
                             * variant of this mushroom into the world.
                             * @return The populator object
                             */
                            // @ts-ignore
                            getPopulatorObject(): org.spongepowered.api.world.gen.PopulatorObject
                            /**
                             * Sets the {@link PopulatorObject} which is used to generate the large
                             * variant of this mushroom into the world.
                             * @param object The new populator object
                             */
                            // @ts-ignore
                            setPopulatorObject(object: org.spongepowered.api.world.gen.PopulatorObject): void
                        }
                    }
                }
            }
        }
    }
}
