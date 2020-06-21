declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Visits a block given as its volume and coordinates.
                             */
                            // @ts-ignore
                            interface BlockVolumeVisitor<V extends org.spongepowered.api.world.extent.BlockVolume> {
                                /**
                                 * Visits a block given as its volume and coordinates.
                                 * @param volume The volume containing the block
                                 * @param x The x coordinate of the block
                                 * @param y The y coordinate of the block
                                 * @param z The z coordinate of the block
                                 */
                                // @ts-ignore
                                visit(volume: V, x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
