declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Called when an {@link Entity} has been killed and is being "harvested" (drops/etc). Happens
                     * after {@link DestructEntityEvent}.
                     */
                    // @ts-ignore
                    interface HarvestEntityEvent extends org.spongepowered.api.event.entity.ChangeEntityExperienceEvent {
                    }
                }
            }
        }
    }
}
