declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    /**
                     * Represents an object placed in the world during terrain population. Populator
                     * objects typically fit in a single chunk.
                     */
                    // @ts-ignore
                    interface PopulatorObject extends org.spongepowered.api.CatalogType {
                        /**
                         * Returns whether this object can be placed into the world at the given
                         * position.
                         * @param world The world
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return Whether the placement is valid
                         */
                        // @ts-ignore
                        canPlaceAt(world: org.spongepowered.api.world.World, x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                        /**
                         * Places the object into the world at the given location.
                         * @param world The world
                         * @param random Random number generator based on the world seed and
                         *         position.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         */
                        // @ts-ignore
                        placeObject(world: org.spongepowered.api.world.World, random: java.util.Random, x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                    }
                }
            }
        }
    }
}
