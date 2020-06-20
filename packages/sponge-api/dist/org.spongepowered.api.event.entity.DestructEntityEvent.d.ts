declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * An event where the {@link Entity} is being either removed usually due to
                     * the {@link Entity} being marked as "dead". Happens before
                     * {@link HarvestEntityEvent}.
                     */
                    // @ts-ignore
                    interface DestructEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.message.MessageChannelEvent {
                    }
                }
            }
        }
    }
}
