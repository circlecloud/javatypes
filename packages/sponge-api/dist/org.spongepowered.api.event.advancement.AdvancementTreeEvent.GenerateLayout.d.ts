declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace AdvancementTreeEvent {
                        /**
                         * Is called when the layout of a {@link AdvancementTree} gets
                         * updated, this is done after the vanilla game generates the
                         * layout. You can safely move elements in the {@link TreeLayout}
                         * within this event.
                         */
                        // @ts-ignore
                        interface GenerateLayout extends org.spongepowered.api.event.advancement.AdvancementTreeEvent {
                            /**
                             * Gets the {@link TreeLayout} that got generated.
                             * @return The tree layout
                             */
                            // @ts-ignore
                            getLayout(): org.spongepowered.api.advancement.TreeLayout
                        }
                    }
                }
            }
        }
    }
}
