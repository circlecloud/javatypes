declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Player {
                // @ts-ignore
                class Spigot extends org.bukkit.entity.Entity.Spigot {
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the connection address of this player, regardless of whether it
                     * has been spoofed or not.
                     * @return the player's connection address
                     */
                    // @ts-ignore
                    getRawAddress(): java.net.InetSocketAddress
                    /**
                     * Gets whether the player collides with entities
                     * @return the player's collision toggle state
                     * @deprecated see {#link LivingEntity#isCollidable()}
                     */
                    // @ts-ignore
                    getCollidesWithEntities(): boolean
                    /**
                     * Sets whether the player collides with entities
                     * @param collides whether the player should collide with entities or
                     *  not.
                     * @deprecated {#link LivingEntity#setCollidable(boolean)}
                     */
                    // @ts-ignore
                    setCollidesWithEntities(collides: boolean): void
                    /**
                     * Respawns the player if dead.
                     */
                    // @ts-ignore
                    respawn(): void
                    /**
                     * Gets all players hidden with {@link #hidePlayer(org.bukkit.entity.Player)}.
                     * @return a Set with all hidden players
                     */
                    // @ts-ignore
                    getHiddenPlayers(): java.util.Set<org.bukkit.entity.Player>
                    // @ts-ignore
                    sendMessage(component: net.md_5.bungee.api.chat.BaseComponent): void
                    // @ts-ignore
                    sendMessage(...components: net.md_5.bungee.api.chat.BaseComponent[]): void
                    /**
                     * Sends the component to the specified screen position of this player
                     * @param position the screen position
                     * @param component the components to send
                     */
                    // @ts-ignore
                    sendMessage(position: net.md_5.bungee.api.ChatMessageType, component: net.md_5.bungee.api.chat.BaseComponent): void
                    /**
                     * Sends an array of components as a single message to the specified screen position of this player
                     * @param position the screen position
                     * @param components the components to send
                     */
                    // @ts-ignore
                    sendMessage(position: net.md_5.bungee.api.ChatMessageType, ...components: net.md_5.bungee.api.chat.BaseComponent[]): void
                }
            }
        }
    }
}
