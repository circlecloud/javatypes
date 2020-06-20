declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace CollideEntityEvent {
                        /**
                         * Fired when an {@link Entity} impacts another {@link Entity}.
                         * <p>Note: this should only fire once after the first impact.</p>
                         */
                        // @ts-ignore
                        interface Impact extends org.spongepowered.api.event.entity.CollideEntityEvent, org.spongepowered.api.event.action.CollideEvent.Impact {
                        }
                    }
                }
            }
        }
    }
}
