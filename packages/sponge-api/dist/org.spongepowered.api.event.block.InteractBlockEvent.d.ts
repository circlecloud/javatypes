declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    /**
                     * Base event for all interactions involving a {@link BlockSnapshot} at a
                     * {@link Location}.
                     * <p>Note: Any interaction that occurs within {@link BlockTypes#AIR} where the
                     * {@link Location} is not known, will contain a {@link BlockSnapshot#NONE}.</p>
                     */
                    // @ts-ignore
                    interface InteractBlockEvent extends org.spongepowered.api.event.action.InteractEvent, org.spongepowered.api.event.block.TargetBlockEvent {
                        /**
                         * Gets the target "side" of the {@link BlockState} being interacted with
                         * or {@link Direction#NONE} if not known.
                         * @return An optional containing the side being interacted with or
                         *      {#link Direction#NONE}
                         */
                        // @ts-ignore
                        getTargetSide(): org.spongepowered.api.util.Direction
                    }
                }
            }
        }
    }
}
