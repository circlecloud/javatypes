declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                /**
                 * A team on a scoreboard that has a common display theme and other
                 * properties.
                 * <p>A team is comprised of different members, represented by {@link Text} objects.
                 * While any {@link Text} can be added to a team, certain {@link Text}s convey a special
                 * meaning.</p>
                 * <p>Examples of this include players, whose names gain the prefix and suffix
                 * of the team they are on.</p>
                 * <p>With the exception of {@link #getNameTagVisibility()} (which is handled client-side),
                 * all of the team options require players to have the same team object (and by
                 * extension, the same scoreboard).
                 * For example, consider two players who each have different scoreboards set.
                 * Each scoreboard has a team registered with identical names, each containing
                 * the same players. Both players would always be able to attack each other,
                 * regardless of the value of {@link #allowFriendlyFire()}.
                 * For it to work, both players must have the same scoreboard, and be on a team
                 * registered to said scoreboard.</p>
                 */
                // @ts-ignore
                interface Team {
                    /**
                     * Creates a new {@link Builder} to build a {@link Team}.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.scoreboard.Team.Builder
                    /**
                     * Gets the name of this team.
                     * @return The name of this team
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Gets the name displayed to users for this team.
                     * @return The display name for this team
                     */
                    // @ts-ignore
                    getDisplayName(): org.spongepowered.api.text.Text
                    /**
                     * Sets the name displayed to users for this team.
                     * @param displayName The {#link Text} to use
                     * @throws IllegalArgumentException If displayName is longer than 32
                     *      characters (in its legacy representation)
                     */
                    // @ts-ignore
                    setDisplayName(displayName: org.spongepowered.api.text.Text): void
                    /**
                     * Gets the color of this team.
                     * <p>The team's color is a distinct concept from its prefix or suffix.
                     * It is only used for colored sidebar display slots, and certain statistic
                     * criteria.</p>
                     * @return The team color
                     */
                    // @ts-ignore
                    getColor(): org.spongepowered.api.text.format.TextColor
                    /**
                     * Sets the color of this team.
                     * <p>The team's color is a distinct concept from its prefix or suffix.
                     * It is only used for colored sidebar display slots, and certain statistic
                     * criteria.</p>
                     * @param color The team color
                     */
                    // @ts-ignore
                    setColor(color: org.spongepowered.api.text.format.TextColor): void
                    /**
                     * Gets the prefix prepended to the display name of users on this team.
                     * @return The prefix for this team
                     */
                    // @ts-ignore
                    getPrefix(): org.spongepowered.api.text.Text
                    /**
                     * Sets the prefix prepended to the display name of users on this team.
                     * @param prefix The new prefix for this team
                     * @throws IllegalArgumentException If prefix is longer than 16
                     *      characters
                     */
                    // @ts-ignore
                    setPrefix(prefix: org.spongepowered.api.text.Text): void
                    /**
                     * Gets the suffix appended to the display name of users on this team.
                     * @return The team's current suffix
                     */
                    // @ts-ignore
                    getSuffix(): org.spongepowered.api.text.Text
                    /**
                     * Sets the suffix appended to the display name of users on this team.
                     * @param suffix The new suffix for this team.
                     * @throws IllegalArgumentException If suffix is longer than 16
                     *      characters (in its legacy representation)
                     */
                    // @ts-ignore
                    setSuffix(suffix: org.spongepowered.api.text.Text): void
                    /**
                     * Gets whether friendly fire is enabled.
                     * <p>This option only controls players attacking other players. It has no
                     * affect other entities attacking other entities, or players attacking
                     * other entities (or vice-versa).</p>
                     * @return Whether friendly fire is enabled
                     */
                    // @ts-ignore
                    allowFriendlyFire(): boolean
                    /**
                     * Sets whether friendly fire is enabled.
                     * @param enabled Whether friendly fire is enabled
                     */
                    // @ts-ignore
                    setAllowFriendlyFire(enabled: boolean): void
                    /**
                     * Gets whether invisible team members are shown.
                     * @return Whether to show invisible team members
                     */
                    // @ts-ignore
                    canSeeFriendlyInvisibles(): boolean
                    /**
                     * Sets whether invisible team members are shown.
                     * @param enabled Whether to show invisible teammates
                     */
                    // @ts-ignore
                    setCanSeeFriendlyInvisibles(enabled: boolean): void
                    /**
                     * Gets the {@link Visibility} which controls to who nametags
                     * of players on this team are visible to.
                     * @return The {#link Visibility} for this team's nametags
                     */
                    // @ts-ignore
                    getNameTagVisibility(): org.spongepowered.api.scoreboard.Visibility
                    /**
                     * Sets the {@link Visibility} which controls to who nametags
                     * of players on this team are visible to.
                     * @param visibility The {#link Visibility} for this team's nametags
                     */
                    // @ts-ignore
                    setNameTagVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): void
                    /**
                     * Gets the {@link Visibility} which controls who death Texts
                     * for players on this team are visible to.
                     * @return The {#link Visibility} for this team's death Texts
                     */
                    // @ts-ignore
                    getDeathMessageVisibility(): org.spongepowered.api.scoreboard.Visibility
                    /**
                     * Sets the {@link Visibility} which controls who death Texts
                     * of players on this team are visible to.
                     * @param visibility The {#link Visibility} for this team's death Texts
                     */
                    // @ts-ignore
                    setDeathMessageVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): void
                    /**
                     * Gets the {@link CollisionRule} for entities on this team.
                     * @return The {#link CollisionRule} for entities on this team
                     */
                    // @ts-ignore
                    getCollisionRule(): org.spongepowered.api.scoreboard.CollisionRule
                    /**
                     * Sets the {@link CollisionRule} for entities on this team.
                     * @param rule The {#link CollisionRule} for entities on this team
                     */
                    // @ts-ignore
                    setCollisionRule(rule: org.spongepowered.api.scoreboard.CollisionRule): void
                    /**
                     * Gets the {@link Text}s representing the members of this team.
                     * @return the {#link Text}s for this team's members
                     */
                    // @ts-ignore
                    getMembers(): Array<org.spongepowered.api.text.Text>
                    /**
                     * Adds the specified {@link Text} to this team.
                     * <p>While any {@link Text} may be added, the {@link Text} to use should
                     * normally be obtained by calling
                     * {@link TeamMember#getTeamRepresentation()} on a {@link TeamMember}, such
                     * as a {@link Player}.</p>
                     * @param member the {#link Text} to add
                     */
                    // @ts-ignore
                    addMember(member: org.spongepowered.api.text.Text): void
                    /**
                     * Removes the specified {@link Text} from this team.
                     * <p>While any {@link Text} may be removed, the {@link Text}
                     * to use should normally be obtained by calling {@link TeamMember#getTeamRepresentation()}
                     * on a {@link TeamMember}, such as a {@link Player}.</p>
                     * @param member The {#link Text} to remove
                     * @return Whether the {#link Text} was on this team
                     */
                    // @ts-ignore
                    removeMember(member: org.spongepowered.api.text.Text): boolean
                    /**
                     * Returns the scoreboard this team is registered on, if available.
                     * <p>This will return {@link Optional#empty()} when a team has
                     * been removed from its {@link Scoreboard}, or has been created
                     * but not yet registered.</p>
                     * @return The scoreboard this team is registered on, if available.
                     */
                    // @ts-ignore
                    getScoreboard(): java.util.Optional<org.spongepowered.api.scoreboard.Scoreboard>
                    /**
                     * Unregisters this team from its {@link Scoreboard}, if present.
                     * <p>A team can still be fully used after being unregistered. However,
                     * it will not affect the game in any way until registered to a
                     * {@link Scoreboard} again, through
                     * {@link Scoreboard#registerTeam(Team)}.</p>
                     * @return Whether this team was registered to a {#link Scoreboard}.
                     */
                    // @ts-ignore
                    unregister(): boolean
                }
            }
        }
    }
}
