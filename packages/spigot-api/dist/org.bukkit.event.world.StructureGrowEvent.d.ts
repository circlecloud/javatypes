declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Event that is called when an organic structure attempts to grow (Sapling {@literal ->}
                 * Tree), (Mushroom {@literal ->} Huge Mushroom), naturally or using bonemeal.
                 */
                // @ts-ignore
                class StructureGrowEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(location: org.bukkit.Location, species: org.bukkit.TreeType, bonemeal: boolean, player: org.bukkit.entity.Player, blocks: Array<org.bukkit.block.BlockState>)
                    /**
                     * Gets the location of the structure.
                     * @return Location of the structure
                     */
                    // @ts-ignore
                    getLocation(): org.bukkit.Location
                    /**
                     * Gets the species type (birch, normal, pine, red mushroom, brown
                     * mushroom)
                     * @return Structure species
                     */
                    // @ts-ignore
                    getSpecies(): org.bukkit.TreeType
                    /**
                     * Checks if structure was grown using bonemeal.
                     * @return True if the structure was grown using bonemeal.
                     */
                    // @ts-ignore
                    isFromBonemeal(): boolean
                    /**
                     * Gets the player that created the structure.
                     * @return Player that created the structure, null if was not created
                     *      manually
                     */
                    // @ts-ignore
                    getPlayer(): org.bukkit.entity.Player
                    /**
                     * Gets a list of all blocks associated with the structure.
                     * @return list of all blocks associated with the structure.
                     */
                    // @ts-ignore
                    getBlocks(): java.util.List<org.bukkit.block.BlockState>
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
