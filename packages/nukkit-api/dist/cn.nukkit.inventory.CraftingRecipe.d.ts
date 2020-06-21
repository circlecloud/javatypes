declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            interface CraftingRecipe extends cn.nukkit.inventory.Recipe {
                // @ts-ignore
                getRecipeId(): string
                // @ts-ignore
                getId(): java.util.UUID
                // @ts-ignore
                setId(id: java.util.UUID): void
                // @ts-ignore
                requiresCraftingTable(): boolean
                // @ts-ignore
                getExtraResults(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                getAllResults(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                getPriority(): number /*int*/
                /**
                 * Returns whether the specified list of crafting grid inputs and outputs matches this recipe. Outputs DO NOT
                 * include the primary result item.
                 * @param input  2D array of items taken from the crafting grid
                 * @param output 2D array of items put back into the crafting grid (secondary results)
                 * @return bool
                 */
                // @ts-ignore
                matchItems(input: cn.nukkit.item.Item[][], output: cn.nukkit.item.Item[][]): boolean
            }
        }
    }
}
