declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * An agent that handles teleportation between {@link Location}'s. This can be
                 * understood as an agent that handles the creation of "portals" between
                 * {@link World}'s.
                 * <p>An example is the agent handling nether portals.</p>
                 */
                // @ts-ignore
                interface PortalAgent {
                    /**
                     * Gets the search radius before a new acceptable "portal" location is
                     * created.
                     * @return The search radius
                     */
                    // @ts-ignore
                    getSearchRadius(): int
                    /**
                     * Sets the search radius before a new acceptable "portal" location is
                     * created.
                     * @param radius The new radius
                     * @return This agent, for chaining
                     */
                    // @ts-ignore
                    setSearchRadius(radius: number /*int*/): org.spongepowered.api.world.PortalAgent
                    /**
                     * Gets the radius of where a "portal" can be created.
                     * @return The radius of where a portal can be created
                     */
                    // @ts-ignore
                    getCreationRadius(): int
                    /**
                     * Sets the creation radius of where a portal may be created.
                     * @param radius The new radius
                     * @return This agent, for chaining
                     */
                    // @ts-ignore
                    setCreationRadius(radius: number /*int*/): org.spongepowered.api.world.PortalAgent
                    /**
                     * Attempts to find a "portal" location, or if none are available, creates
                     * one. Returns {@link Optional#empty()} if none are found.
                     * @param targetLocation The suggested location
                     * @return The found location of the "portal", if available
                     */
                    // @ts-ignore
                    findOrCreatePortal(targetLocation: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Attempts to find a "portal" location. Returns {@link Optional#empty()} if
                     * none are found.
                     * @param targetLocation The suggested location
                     * @return The found location of the "portal", if available
                     */
                    // @ts-ignore
                    findPortal(targetLocation: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Tells this agent to create a new "portal" location at the suggested
                     * {@link Location}.
                     * If {@link org.spongepowered.api.event.block.ChangeBlockEvent.Place}
                     * is cancelled, {@link Optional#empty()} is returned.
                     * </p>Note: In order to adjust or prevent the {@link Location}'s of each
                     * {@link BlockState} set, listen to
                     * {@link org.spongepowered.api.event.block.ChangeBlockEvent.Place} and
                     * check for the root cause of this portal agent.
                     * @param targetLocation The targeted location
                     * @return The newly created "portal" location, if available
                     */
                    // @ts-ignore
                    createPortal(targetLocation: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Gets the type of {@link PortalAgent}.
                     * @return The type
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.world.PortalAgentType
                }
            }
        }
    }
}
