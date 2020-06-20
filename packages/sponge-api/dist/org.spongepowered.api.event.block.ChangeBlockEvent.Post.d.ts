declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace ChangeBlockEvent {
                        /**
                         * Called when there are multiple block changes due to a
                         * {@link BlockType} having "ticked", in which the {@link Cause} will
                         * have a {@link BlockSnapshot}, or, in the case that an {@link Entity}
                         * has "ticked", in which the {@link Cause} will have an {@link Entity},
                         * or, in the case that a {@link TileEntity} "ticked", the {@link Cause}
                         * will have the {@link TileEntity}.
                         * <p>The {@link Cause} may contain {@link Event}s, such as {@link Break},
                         * {@link Place}, and {@link Modify}. These events may be cancelled,
                         * or have their transactions modified, just like normal events.</p>
                         * <p>The idea is that  a block, entity, or tile entity "ticks" in which
                         * during that "tick", they make different types of block changes. If the
                         * block change is purely one type then the corresponding event is thrown
                         * instead. For example, If the block change is purely "placing" of
                         * blocks, the {@link Place} event would be thrown instead.</p>
                         * <p>For example, a piston extension would cause this event to be fired.
                         * A piston extension involves multiple distinct transactions -
                         * the piston head moving, and the adjacent block being set in a new
                         * position.</p>
                         * <p>>Note: This event is fired after processing all other
                         * ChangeBlockEvent's.</p>
                         */
                        // @ts-ignore
                        interface Post extends org.spongepowered.api.event.block.ChangeBlockEvent {
                        }
                    }
                }
            }
        }
    }
}
