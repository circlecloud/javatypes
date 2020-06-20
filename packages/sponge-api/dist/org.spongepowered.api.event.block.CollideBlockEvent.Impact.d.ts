declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace CollideBlockEvent {
                        /**
                         * Fired when an {@link Entity} impacts another {@link BlockSnapshot}.
                         * <p>Note: this should only fire once after the first impact.</p>
                         */
                        // @ts-ignore
                        interface Impact extends org.spongepowered.api.event.block.CollideBlockEvent, org.spongepowered.api.event.action.CollideEvent.Impact {
                        }
                    }
                }
            }
        }
    }
}
