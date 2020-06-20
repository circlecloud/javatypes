declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace displayslot {
                    /**
                     * Represents an area to display an objective.
                     */
                    // @ts-ignore
                    interface DisplaySlot extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link Team} color that this objective will display for, if set.
                         * @return The {#link Team} color that this objective will display for, if set
                         */
                        // @ts-ignore
                        getTeamColor(): java.util.Optional<org.spongepowered.api.text.format.TextColor>
                    }
                }
            }
        }
    }
}
