declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace displayslot {
                    namespace DisplaySlot {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.scoreboard.displayslot.DisplaySlot, org.spongepowered.api.scoreboard.displayslot.DisplaySlot.Builder> {
                            /**
                             * Sets the {@link TextColor} of the display slot.
                             * @param color The color to set
                             * @return This builder
                             */
                            // @ts-ignore
                            sidebarTeamColor(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.scoreboard.displayslot.DisplaySlot.Builder
                            /**
                             * Builds an instance of a {@link DisplaySlot}.
                             * @return A new instance of an {#link DisplaySlot}
                             * @throws IllegalStateException if the {#link DisplaySlot} is not completed
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.scoreboard.displayslot.DisplaySlot
                        }
                    }
                }
            }
        }
    }
}
