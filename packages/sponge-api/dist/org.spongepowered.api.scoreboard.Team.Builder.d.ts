declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace Team {
                    /**
                     * Represents a builder tp create {@link Team} instances.
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.scoreboard.Team, org.spongepowered.api.scoreboard.Team.Builder> {
                        /**
                         * Sets the name of the {@link Team}.
                         * @param name The name to set
                         * @return This builder
                         */
                        // @ts-ignore
                        name(name: string): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the color of the {@link Team}.
                         * <p>The team's color is a distinct concept from its prefix or suffix.
                         * It is only used for colored sidebar display slots, and certain
                         * statistic criteria.</p>
                         * @param color The color to set
                         * @return This builder
                         */
                        // @ts-ignore
                        color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the name displayed to users for the {@link Team}.
                         * <p>Display names may be truncated in order to meet an
                         * implementation-defined length limit. In Vanilla, this is sixteen
                         * characters.</p>
                         * <p>By default, this is set to {@link #name(String)}</p>
                         * @param displayName The {#link Text} to set
                         * @return This builder
                         * @throws IllegalArgumentException If the name is longer than 16
                         *      characters
                         */
                        // @ts-ignore
                        displayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the prefix prepended to the display name of users on the
                         * {@link Team}.
                         * <p>Display names may be truncated in order to meet an
                         * implementation-defined length limit. In Vanilla, this is sixteen
                         * characters.</p>
                         * @param prefix The new prefix for the {#link Team}
                         * @return This builder
                         */
                        // @ts-ignore
                        prefix(prefix: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the suffix appended to the display name of users on the
                         * {@link Team}.
                         * <p>Display names may be truncated in order to meet an
                         * implementation-defined length limit. In Vanilla, this is sixteen
                         * characters.</p>
                         * @param suffix The new suffix for the {#link Team}.
                         * @return This builder
                         */
                        // @ts-ignore
                        suffix(suffix: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets whether friendly fire is enabled for the {@link Team}.
                         * @param enabled Whether friendly fire is enabled
                         * @return This builder
                         */
                        // @ts-ignore
                        allowFriendlyFire(enabled: boolean): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets whether invisible team members are shown for the
                         * {@link Team}.
                         * @param enabled Whether to show invisible teammates
                         * @return This builder
                         */
                        // @ts-ignore
                        canSeeFriendlyInvisibles(enabled: boolean): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the {@link Visibility} which controls to who nametags
                         * of players on the {@link Team} are visible to.
                         * @param visibility The {#link Visibility} for the {@link Team}'s
                         *      nametags
                         * @return This builder
                         */
                        // @ts-ignore
                        nameTagVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the {@link Visibility} which controls who death Texts
                         * of players on the {@link Team} are visible to.
                         * @param visibility The {#link Visibility} for the {@link Team}'s
                         *      death Texts
                         * @return This builder
                         */
                        // @ts-ignore
                        deathTextVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the {@link CollisionRule} for this team's members.
                         * @param rule The {#link CollisionRule} for the {@link Team}'s members
                         * @return This builder
                         */
                        // @ts-ignore
                        collisionRule(rule: org.spongepowered.api.scoreboard.CollisionRule): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Sets the set of {@link Text} members on the {@link Team}.
                         * <p>By default, this is the empty set.</p>
                         * @param users The set of {#link Text} members on the {@link Team}
                         * @return This builder
                         */
                        // @ts-ignore
                        members(users: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.scoreboard.Team.Builder
                        /**
                         * Builds an instance of a {@link Team}.
                         * @return A new instance of a {#link Team}
                         * @throws IllegalStateException if the {#link Team} is not complete
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.scoreboard.Team
                    }
                }
            }
        }
    }
}
