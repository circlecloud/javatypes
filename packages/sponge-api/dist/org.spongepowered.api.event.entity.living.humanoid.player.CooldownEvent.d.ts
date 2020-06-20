declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                /**
                                 * An event which handles items in a {@link Player}'s {@link CooldownTracker}
                                 * being given a cooldown or going off cooldown.
                                 */
                                // @ts-ignore
                                interface CooldownEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                                    /**
                                     * Gets the associated item type whose cooldown is being set or removed.
                                     * @return The associated item type
                                     */
                                    // @ts-ignore
                                    getItemType(): org.spongepowered.api.item.ItemType
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
