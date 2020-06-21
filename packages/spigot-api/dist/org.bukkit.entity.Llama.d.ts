declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Llama.
             */
            // @ts-ignore
            interface Llama extends org.bukkit.entity.ChestedHorse {
                /**
                 * Gets the llama's color.
                 * @return a {#link Color} representing the llama's color
                 */
                // @ts-ignore
                getColor(): org.bukkit.entity.Llama.Color
                /**
                 * Sets the llama's color.
                 * @param color a {#link Color} for this llama
                 */
                // @ts-ignore
                setColor(color: org.bukkit.entity.Llama.Color): void
                /**
                 * Gets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities.
                 * @return llama strength [1,5]
                 */
                // @ts-ignore
                getStrength(): number /*int*/
                /**
                 * Sets the llama's strength. A higher strength llama will have more
                 * inventory slots and be more threatening to entities. Inventory slots are
                 * equal to strength * 3.
                 * @param strength llama strength [1,5]
                 */
                // @ts-ignore
                setStrength(strength: number /*int*/): void
                // @ts-ignore
                getInventory(): org.bukkit.inventory.LlamaInventory
            }
        }
    }
}
