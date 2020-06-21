declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * An enumeration of the possible {@link BlockChangeFlag}s.
                 * <p>{@link BlockChangeFlag}s can be combined using the
                 * {@link BlockChangeFlag#andFlag(BlockChangeFlag)} and
                 * {@link BlockChangeFlag#andNotFlag(BlockChangeFlag)} operators.</p>
                 */
                // @ts-ignore
                class BlockChangeFlags extends java.lang.Object {
                    /**
                     * All the available flags are applied through the AND operator.
                     */
                    // @ts-ignore
                    public static readonly ALL: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * A flag that defines whether a block change should notify
                     * neighboring blocks.
                     */
                    // @ts-ignore
                    public static readonly NEIGHBOR: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * The {@link #NEIGHBOR} and {@link #OBSERVER} flags combined
                     * with the AND operator.
                     */
                    // @ts-ignore
                    public static readonly NEIGHBOR_OBSERVER: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * The {@link #NEIGHBOR} and {@link #PHYSICS} flags combined
                     * with the AND operator.
                     */
                    // @ts-ignore
                    public static readonly NEIGHBOR_PHYSICS: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * The {@link #NEIGHBOR}, {@link #PHYSICS} and {@link #OBSERVER} flags
                     * combined with the AND operator.
                     */
                    // @ts-ignore
                    public static readonly NEIGHBOR_PHYSICS_OBSERVER: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * No flags are set, triggers nothing.
                     */
                    // @ts-ignore
                    public static readonly NONE: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * A flag that defines whether to update observer blocks, different
                     * from notifying neighbors in that neighbor notifications
                     * can cause further block notification loops (like redstone),
                     * whereas this focuses on {@link BlockTypes#OBSERVER} blocks
                     * being told of updates.
                     */
                    // @ts-ignore
                    public static readonly OBSERVER: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * A flag that defines whether a block change should
                     * perform block physics checks or not. If not, no checks
                     * are performed.
                     */
                    // @ts-ignore
                    public static readonly PHYSICS: org.spongepowered.api.world.BlockChangeFlag
                    /**
                     * The {@link #PHYSICS} and {@link #OBSERVER} flags combined with
                     * the AND operator.
                     */
                    // @ts-ignore
                    public static readonly PHYSICS_OBSERVER: org.spongepowered.api.world.BlockChangeFlag
                }
            }
        }
    }
}
