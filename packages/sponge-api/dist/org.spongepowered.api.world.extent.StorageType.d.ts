declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * Storage types that can be used for storing blocks and biomes. These are used
                     * when obtaining new copies. Storage obtained from the implementation should be
                     * assumed to be {@link #STANDARD} unless specified otherwise.
                     */
                    // @ts-ignore
                    class StorageType extends java.lang.Enum<org.spongepowered.api.world.extent.StorageType> {
                        // @ts-ignore
                        values(): org.spongepowered.api.world.extent.StorageType[]
                        // @ts-ignore
                        valueOf(name: string): org.spongepowered.api.world.extent.StorageType
                    }
                }
            }
        }
    }
}
