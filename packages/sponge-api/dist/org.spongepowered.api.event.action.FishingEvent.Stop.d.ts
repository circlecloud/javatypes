declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    namespace FishingEvent {
                        /**
                         * A specific {@link FishingEvent} where the {@link FishHook} is retracted
                         * or "reeled in".
                         * <p>If the {@link FishHook} was cast into water, an {@link ItemStack} may
                         * be hooked when it is retracted. If the event is not cancelled, Vanilla
                         * will send one or more {@link ItemStack} by spawning {@link Item}s, and
                         * sending them moving towards the player.</p>
                         * <p>If the {@link FishHook} has an entity hooked, Vanilla will pull
                         * the hooked entity towards the caster, if the event is not cancelled.</p>
                         */
                        // @ts-ignore
                        interface Stop extends org.spongepowered.api.event.action.FishingEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets a list of {@link Transaction}s for each {@link ItemStackSnapshot}
                             * that will be spawned if this event is not cancelled.
                             * @return The transactions
                             */
                            // @ts-ignore
                            getTransactions(): Array<org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                            /**
                             * Gets a list of {@link Transaction}s for each {@link ItemStackSnapshot}
                             * that will be spawned if this event is not cancelled.
                             * @return The transactions
                             * @deprecated Use {#link #getTransactions()}
                             */
                            // @ts-ignore
                            getItemStackTransaction(): Array<org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                        }
                    }
                }
            }
        }
    }
}
