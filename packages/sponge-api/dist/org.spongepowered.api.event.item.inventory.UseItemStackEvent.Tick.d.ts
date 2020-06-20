declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            /**
                             * Called after {@link UseItemStackEvent.Start} during each tick as an
                             * {@link ItemType} is being used.
                             * <p>In Vanilla, tick actions are used to play eating particles and
                             * sounds.</p>
                             * <p>In Vanilla, items only perform an action every 4 ticks, and only
                             * when 25 or fewer ticks remaining. Cancelling this event on other
                             * ticks will have no effect in Vanilla.</p>
                             * <p>Cancelling the event will cause no action to be taken for the
                             * particular item for the tick being processed.</p>
                             * <p>Note: Setting the duration 0 will cause the player to finish using
                             * the item.</p>
                             */
                            // @ts-ignore
                            interface Tick extends org.spongepowered.api.event.item.inventory.UseItemStackEvent, org.spongepowered.api.event.Cancellable {
                            }
                        }
                    }
                }
            }
        }
    }
}
