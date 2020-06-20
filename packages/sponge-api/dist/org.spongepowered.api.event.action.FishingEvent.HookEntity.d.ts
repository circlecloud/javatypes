declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    namespace FishingEvent {
                        /**
                         * Fired when an {@link org.spongepowered.api.entity.Entity} is hooked.
                         * <p>{@link CollideBlockEvent} is fired when a {@link FishHook}
                         * becomes stuck in a block. This may be called multiple times
                         * before {@link Stop} is fired, such as in the case where
                         * the block the {@link FishHook} is stuck in is broken.</p>
                         */
                        // @ts-ignore
                        interface HookEntity extends org.spongepowered.api.event.action.FishingEvent, org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        }
                    }
                }
            }
        }
    }
}
