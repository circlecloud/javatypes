declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    /**
                     * A base interface for all the {@link AdvancementTree} events.
                     */
                    // @ts-ignore
                    interface AdvancementTreeEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link AdvancementTree}.
                         * @return The advancement tree
                         */
                        // @ts-ignore
                        getTree(): org.spongepowered.api.advancement.AdvancementTree
                    }
                }
            }
        }
    }
}
