declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            /**
                             * Called after {@link UseItemStackEvent.Tick} when an {@link ItemType} has finished being
                             * used.
                             * <p>Examples:</p>
                             * <ul>
                             * <li>Stop eating halfway through</li>
                             * <li>Stop defending with sword</li>
                             * <li>Stop drawing bow. This case would fire the arrow</li>
                             * </ul>
                             * <p>Duration on this event is how long the item had left in its countdown
                             * before 'finishing'.</p>
                             * <p>In Vanilla, this is only fired for players, not other entities.</p>
                             * <p>In Vanilla, setting the duration on this event will have no
                             * effect.</p>
                             * <p>Cancelling this event will prevent the {@link ItemType} from being
                             * notified that it has stopped being used. The only vanilla
                             * {@link ItemType} this would affect are bows, and it would cause the bow
                             * to NOT fire.</p>
                             */
                            // @ts-ignore
                            interface Stop extends org.spongepowered.api.event.item.inventory.UseItemStackEvent, org.spongepowered.api.event.Cancellable {
                            }
                        }
                    }
                }
            }
        }
    }
}
