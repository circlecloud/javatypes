declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class CraftingManager extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public readonly recipes: java.util.Collection<cn.nukkit.inventory.Recipe> | Array<cn.nukkit.inventory.Recipe>
                // @ts-ignore
                public static packet: cn.nukkit.network.protocol.BatchPacket
                // @ts-ignore
                readonly shapedRecipes: java.util.Map<java.lang.Integer | number, java.util.Map<java.util.UUID, cn.nukkit.inventory.ShapedRecipe>>
                // @ts-ignore
                public readonly furnaceRecipes: java.util.Map<java.lang.Integer | number, cn.nukkit.inventory.FurnaceRecipe>
                // @ts-ignore
                public readonly brewingRecipes: java.util.Map<java.lang.Integer | number, cn.nukkit.inventory.BrewingRecipe>
                // @ts-ignore
                public readonly containerRecipes: java.util.Map<java.lang.Integer | number, cn.nukkit.inventory.ContainerRecipe>
                // @ts-ignore
                readonly shapelessRecipes: java.util.Map<java.lang.Integer | number, java.util.Map<java.util.UUID, cn.nukkit.inventory.ShapelessRecipe>>
                // @ts-ignore
                public static readonly recipeComparator: java.util.Comparator<cn.nukkit.item.Item>
                // @ts-ignore
                public rebuildPacket(): void
                // @ts-ignore
                public getRecipes(): Array<cn.nukkit.inventory.Recipe>
                // @ts-ignore
                public getFurnaceRecipes(): java.util.Map<java.lang.Integer | number, cn.nukkit.inventory.FurnaceRecipe>
                // @ts-ignore
                public matchFurnaceRecipe(input: cn.nukkit.item.Item): cn.nukkit.inventory.FurnaceRecipe
                // @ts-ignore
                public registerFurnaceRecipe(recipe: cn.nukkit.inventory.FurnaceRecipe): void
                // @ts-ignore
                public registerShapedRecipe(recipe: cn.nukkit.inventory.ShapedRecipe): void
                // @ts-ignore
                public registerRecipe(recipe: cn.nukkit.inventory.Recipe): void
                // @ts-ignore
                public registerShapelessRecipe(recipe: cn.nukkit.inventory.ShapelessRecipe): void
                // @ts-ignore
                public registerBrewingRecipe(recipe: cn.nukkit.inventory.BrewingRecipe): void
                // @ts-ignore
                public registerContainerRecipe(recipe: cn.nukkit.inventory.ContainerRecipe): void
                // @ts-ignore
                public matchBrewingRecipe(input: cn.nukkit.item.Item, potion: cn.nukkit.item.Item): cn.nukkit.inventory.BrewingRecipe
                // @ts-ignore
                public matchContainerRecipe(input: cn.nukkit.item.Item, potion: cn.nukkit.item.Item): cn.nukkit.inventory.ContainerRecipe
                // @ts-ignore
                public matchRecipe(inputMap: cn.nukkit.item.Item[][], primaryOutput: cn.nukkit.item.Item, extraOutputMap: cn.nukkit.item.Item[][]): cn.nukkit.inventory.CraftingRecipe
            }
        }
    }
}
