declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            /**
                             * Fired when an item uis finished 'normally', e.g. used for the
                             * entire maximum duration. In contrast to {@link Stop}, this
                             * even will not fire if the item use was interrupted in any way.
                             * <p>Examples:</p>
                             * <ul>
                             * <li>Eating a piece of food</li>
                             * <li>Drinking a potion</li>
                             * </ul>
                             * <p>This event will always be fired with an original duration
                             * of 0. Setting the duration to an integer greater than 0
                             * will cause the entity to continue using the item.</p>
                             * <p>Cancelling this event prevents the 'finished' action
                             * from taking place. For example, this would prevent a Vanilla
                             * potion item from apply its effects to a player. {@link Reset}
                             * will then be fired, while {@link Replace} will be skipped.</p>
                             */
                            // @ts-ignore
                            interface Finish extends org.spongepowered.api.event.item.inventory.UseItemStackEvent, org.spongepowered.api.event.Cancellable {
                            }
                        }
                    }
                }
            }
        }
    }
}
