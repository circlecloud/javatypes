declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            // @ts-ignore
                            interface HandInteractEvent extends org.spongepowered.api.event.action.InteractEvent {
                                /**
                                 * Gets the {@link HandType} used for interaction.
                                 * @return The hand type
                                 */
                                // @ts-ignore
                                getHandType(): org.spongepowered.api.data.type.HandType
                            }
                        }
                    }
                }
            }
        }
    }
}
