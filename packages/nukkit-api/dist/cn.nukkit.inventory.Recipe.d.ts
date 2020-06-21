declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface Recipe {
                // @ts-ignore
                getResult(): cn.nukkit.item.Item
                // @ts-ignore
                registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void
                // @ts-ignore
                getType(): cn.nukkit.inventory.RecipeType
            }
        }
    }
}
