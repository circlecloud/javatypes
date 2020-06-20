declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Produces a new block from two original blocks given as their volumes and
                             * their coordinates.
                             */
                            // @ts-ignore
                            interface BlockVolumeMerger {
                                /**
                                 * Produces a new block from two original blocks given as their volumes and
                                 * their coordinates.
                                 * @param firstVolume The volume for the first block
                                 * @param xFirst The x coordinate for the first block
                                 * @param yFirst The y coordinate for the first block
                                 * @param zFirst The z coordinate for the first block
                                 * @param secondVolume The volume for the second block
                                 * @param xSecond The x coordinate for the second block
                                 * @param ySecond The y coordinate for the second block
                                 * @param zSecond The z coordinate for the second block
                                 * @return The produced block
                                 */
                                // @ts-ignore
                                merge(firstVolume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, xFirst: number /*int*/, yFirst: number /*int*/, zFirst: number /*int*/, secondVolume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, xSecond: number /*int*/, ySecond: number /*int*/, zSecond: number /*int*/): org.spongepowered.api.block.BlockState
                            }
                        }
                    }
                }
            }
        }
    }
}
