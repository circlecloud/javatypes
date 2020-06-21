declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player discovers a new recipe in the recipe book.
                 */
                // @ts-ignore
                class PlayerRecipeDiscoverEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, recipe: org.bukkit.NamespacedKey)
                    /**
                     * Get the namespaced key of the discovered recipe.
                     * @return the discovered recipe
                     */
                    // @ts-ignore
                    public getRecipe(): org.bukkit.NamespacedKey
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
