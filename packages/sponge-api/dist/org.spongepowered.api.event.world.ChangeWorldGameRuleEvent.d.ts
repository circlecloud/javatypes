declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    /**
                     * Called when a GameRule is changed.
                     */
                    // @ts-ignore
                    interface ChangeWorldGameRuleEvent extends org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original value of the GameRule.
                         * @return The original value.
                         */
                        // @ts-ignore
                        getOriginalValue(): string
                        /**
                         * Gets the new value of the GameRule.
                         * @return The new value.
                         */
                        // @ts-ignore
                        getValue(): string
                        /**
                         * Gets the name of this GameRule.
                         * @return The name of the GameRule.
                         */
                        // @ts-ignore
                        getName(): string
                    }
                }
            }
        }
    }
}
