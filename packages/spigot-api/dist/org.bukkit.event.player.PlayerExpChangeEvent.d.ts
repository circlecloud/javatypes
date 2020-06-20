declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a players experience changes naturally
                 */
                // @ts-ignore
                class PlayerExpChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, expAmount: number /*int*/)
                    /**
                     * Get the amount of experience the player will receive
                     * @return The amount of experience
                     */
                    // @ts-ignore
                    getAmount(): int
                    /**
                     * Set the amount of experience the player will receive
                     * @param amount The amount of experience to set
                     */
                    // @ts-ignore
                    setAmount(amount: number /*int*/): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
