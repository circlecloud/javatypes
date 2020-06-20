declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    /**
                     * A base event for {@link Advancement} related events.
                     */
                    // @ts-ignore
                    interface AdvancementEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                        /**
                         * Gets the {@link Advancement} that is being targeted.
                         * @return The advancement
                         */
                        // @ts-ignore
                        getAdvancement(): org.spongepowered.api.advancement.Advancement
                    }
                }
            }
        }
    }
}
