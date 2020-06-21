declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown whenever a {@link Player} dies
                 */
                // @ts-ignore
                class PlayerDeathEvent extends org.bukkit.event.entity.EntityDeathEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drops: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>, droppedExp: number /*int*/, deathMessage: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drops: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>, droppedExp: number /*int*/, newExp: number /*int*/, deathMessage: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drops: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>, droppedExp: number /*int*/, newExp: number /*int*/, newTotalExp: number /*int*/, newLevel: number /*int*/, deathMessage: java.lang.String | string)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Player
                    /**
                     * Set the death message that will appear to everyone on the server.
                     * @param deathMessage Message to appear to other players on the server.
                     */
                    // @ts-ignore
                    public setDeathMessage(deathMessage: java.lang.String | string): void
                    /**
                     * Get the death message that will appear to everyone on the server.
                     * @return Message to appear to other players on the server.
                     */
                    // @ts-ignore
                    public getDeathMessage(): string
                    /**
                     * Gets how much EXP the Player should have at respawn.
                     * <p>
                     * This does not indicate how much EXP should be dropped, please see
                     * {@link #getDroppedExp()} for that.
                     * @return New EXP of the respawned player
                     */
                    // @ts-ignore
                    public getNewExp(): number /*int*/
                    /**
                     * Sets how much EXP the Player should have at respawn.
                     * <p>
                     * This does not indicate how much EXP should be dropped, please see
                     * {@link #setDroppedExp(int)} for that.
                     * @param exp New EXP of the respawned player
                     */
                    // @ts-ignore
                    public setNewExp(exp: number /*int*/): void
                    /**
                     * Gets the Level the Player should have at respawn.
                     * @return New Level of the respawned player
                     */
                    // @ts-ignore
                    public getNewLevel(): number /*int*/
                    /**
                     * Sets the Level the Player should have at respawn.
                     * @param level New Level of the respawned player
                     */
                    // @ts-ignore
                    public setNewLevel(level: number /*int*/): void
                    /**
                     * Gets the Total EXP the Player should have at respawn.
                     * @return New Total EXP of the respawned player
                     */
                    // @ts-ignore
                    public getNewTotalExp(): number /*int*/
                    /**
                     * Sets the Total EXP the Player should have at respawn.
                     * @param totalExp New Total EXP of the respawned player
                     */
                    // @ts-ignore
                    public setNewTotalExp(totalExp: number /*int*/): void
                    /**
                     * Gets if the Player should keep all EXP at respawn.
                     * <p>
                     * This flag overrides other EXP settings
                     * @return True if Player should keep all pre-death exp
                     */
                    // @ts-ignore
                    public getKeepLevel(): boolean
                    /**
                     * Sets if the Player should keep all EXP at respawn.
                     * <p>
                     * This overrides all other EXP settings
                     * <p>
                     * <b>This doesn't prevent prevent the EXP from dropping.
                     * {@link #setDroppedExp(int)} should be used stop the
                     * EXP from dropping.</b>
                     * @param keepLevel True to keep all current value levels
                     */
                    // @ts-ignore
                    public setKeepLevel(keepLevel: boolean): void
                    /**
                     * Sets if the Player keeps inventory on death.
                     * <p>
                     * <b>This doesn't prevent prevent the items from dropping.
                     * {@code getDrops().clear()} should be used stop the
                     * items from dropping.</b>
                     * @param keepInventory True to keep the inventory
                     */
                    // @ts-ignore
                    public setKeepInventory(keepInventory: boolean): void
                    /**
                     * Gets if the Player keeps inventory on death.
                     * @return True if the player keeps inventory on death
                     */
                    // @ts-ignore
                    public getKeepInventory(): boolean
                }
            }
        }
    }
}
