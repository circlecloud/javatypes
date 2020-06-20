declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            /**
                             * Called after {@link Finish}, when the item in the entity's
                             * hand is replaced.
                             * <p>For example, this event is called to decrement the amount
                             * of food in the stack being eaten.</p>
                             * <p>In Vanilla, setting the remaining duration for this event
                             * is ignored.</p>
                             * <p>Cancelling the event, or marking the transaction as invalid,
                             * will leave the entity's hand untouched.</p>
                             */
                            // @ts-ignore
                            interface Replace extends org.spongepowered.api.event.item.inventory.UseItemStackEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the {@link ItemStack} that is placed in the player's
                                 * inventory in replacement of the stack that is currently being used.
                                 * @return The result {#link ItemStack}
                                 */
                                // @ts-ignore
                                getItemStackResult(): org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
