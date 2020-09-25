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
                        /**
                         * The standard storage method used by the implementation. Not guaranteed to
                         * provide anything but single threaded capabilities.
                         */
                        // @ts-ignore
                        public static readonly STANDARD: org.spongepowered.api.world.extent.StorageType
                        /**
                         * A thread-safe storage solution. Reads and writes are atomic. Necessary
                         * for multi-threaded applications, but single threaded ones might suffer
                         * for extra overhead.
                         */
                        // @ts-ignore
                        public static readonly THREAD_SAFE: org.spongepowered.api.world.extent.StorageType
                        // @ts-ignore
                        public static values(): org.spongepowered.api.world.extent.StorageType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.spongepowered.api.world.extent.StorageType
                    }
                }
            }
        }
    }
}
