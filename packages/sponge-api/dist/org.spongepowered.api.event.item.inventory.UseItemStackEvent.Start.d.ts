declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            /**
                             * Called before {@link UseItemStackEvent.Tick} when a player starts using an
                             * {@link ItemType}, typically when they hold right mouse.
                             * <p>Examples:</p>
                             * <ul>
                             * <li>Drawing a bow</li>
                             * <li>Eating food</li>
                             * <li>Drinking Potions/Milk</li>
                             * <li>Guarding with a sword</li>
                             * </ul>
                             * <p>Note: Cancelling the event, or setting the duration to <= 0
                             * prevents the {@link ItemType} from processing.</p>
                             */
                            // @ts-ignore
                            interface Start extends org.spongepowered.api.event.item.inventory.UseItemStackEvent, org.spongepowered.api.event.Cancellable {
                            }
                        }
                    }
                }
            }
        }
    }
}
