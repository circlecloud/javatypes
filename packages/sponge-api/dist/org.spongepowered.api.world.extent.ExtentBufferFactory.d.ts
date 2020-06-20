declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A factory for creating buffers to store extent data.
                     */
                    // @ts-ignore
                    interface ExtentBufferFactory {
                        /**
                         * Returns a new biome buffer of the desired size.
                         * @param size The size of the buffer on x, y, and z.
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createBiomeBuffer(size: Vector3i): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size and minimum position.
                         * @param min The minimum point of the buffer.
                         * @param size The size of the buffer on x, y, and z.
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createBiomeBuffer(min: Vector3i, size: Vector3i): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size.
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createBiomeBuffer(xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size and minimum position.
                         * @param xMin The minimum point of the buffer on x
                         * @param yMin The minimum point of the buffer on y
                         * @param zMin The minimum point of the buffer on z
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createBiomeBuffer(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size. This buffer is thread
                         * safe.
                         * @param size The size of the buffer on x, y, and z.
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createThreadSafeBiomeBuffer(size: Vector3i): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size an minimum position. This
                         * buffer is thread safe.
                         * @param min The minimum point of the buffer.
                         * @param size The size of the buffer on x, y, and z.
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createThreadSafeBiomeBuffer(min: Vector3i, size: Vector3i): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size. This buffer is thread
                         * safe.
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createThreadSafeBiomeBuffer(xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new biome buffer of the desired size. This buffer is thread
                         * safe.
                         * @param xMin The minimum point of the buffer on x
                         * @param yMin The minimum point of the buffer on y
                         * @param zMin The minimum point of the buffer on z
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new biome buffer
                         */
                        // @ts-ignore
                        createThreadSafeBiomeBuffer(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new block buffer of the desired size.
                         * @param size The size of the buffer on x, y, and z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createBlockBuffer(size: Vector3i): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size and minimum position.
                         * @param min The minimum point of the buffer.
                         * @param size The size of the buffer on x, y, and z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createBlockBuffer(min: Vector3i, size: Vector3i): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size.
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createBlockBuffer(xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size and minimum position.
                         * @param xMin The minimum point of the buffer on x
                         * @param yMin The minimum point of the buffer on y
                         * @param zMin The minimum point of the buffer on z
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createBlockBuffer(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size. This buffer is thread
                         * safe.
                         * @param size The size of the buffer on x, y, and z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createThreadSafeBlockBuffer(size: Vector3i): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size and minimum position. This
                         * buffer is thread safe.
                         * @param min The minimum point of the buffer.
                         * @param size The size of the buffer on x, y, and z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createThreadSafeBlockBuffer(min: Vector3i, size: Vector3i): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size. This buffer is thread
                         * safe.
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createThreadSafeBlockBuffer(xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new block buffer of the desired size and minimum position. This
                         * buffer is thread safe.
                         * @param xMin The minimum point of the buffer on x
                         * @param yMin The minimum point of the buffer on y
                         * @param zMin The minimum point of the buffer on z
                         * @param xSize The size of the buffer on x
                         * @param ySize The size of the buffer on y
                         * @param zSize The size of the buffer on z
                         * @return A new block buffer
                         */
                        // @ts-ignore
                        createThreadSafeBlockBuffer(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xSize: number /*int*/, ySize: number /*int*/, zSize: number /*int*/): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new archetype volume of the desired size.
                         * @param size The size of the volume
                         * @param origin The origin of the buffer
                         * @return A new archetype volume
                         */
                        // @ts-ignore
                        createArchetypeVolume(size: Vector3i, origin: Vector3i): org.spongepowered.api.world.extent.ArchetypeVolume
                        /**
                         * Returns a new archetype volume of the desired size.
                         * @param size The size of the volume
                         * @return A new archetype volume
                         */
                        // @ts-ignore
                        createArchetypeVolume(size: Vector3i): org.spongepowered.api.world.extent.ArchetypeVolume
                    }
                }
            }
        }
    }
}
