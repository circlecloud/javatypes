declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace DestructEntityEvent {
                        /**
                         * A derivative of {@link DestructEntityEvent} where the removal of the
                         * {@link Living}, the {@link TargetLivingEvent#getTargetEntity()},
                         * is due to it losing its health.
                         * <p>Note that cancelling this event will have the implication that the
                         * entity will have restored health and not enter a "death" state to
                         * play a dying animation, drop items, and drop experience. It is highly
                         * encouraged to keep the cancellation of this event at a mimium as in modded
                         * environments, cancelling this event may have other implications that mods
                         * may not consider and cause bugs.</p>
                         */
                        // @ts-ignore
                        interface Death extends org.spongepowered.api.event.entity.DestructEntityEvent, org.spongepowered.api.event.entity.living.TargetLivingEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Applies the {@link DefaultGameRules#KEEP_INVENTORY} gamerule to this
                             * entity alone.
                             * <p>This only works for players</p>
                             * @param keepInventory Whether to keep the inventory on death
                             */
                            // @ts-ignore
                            setKeepInventory(keepInventory: boolean): void
                            /**
                             * Returns whether the inventory is kept after death.
                             * <p>By default this is the same as the
                             * {@link DefaultGameRules#KEEP_INVENTORY} gamerule.</p>
                             * @return Whether the inventory is kept after death.
                             */
                            // @ts-ignore
                            getKeepInventory(): boolean
                        }
                    }
                }
            }
        }
    }
}
