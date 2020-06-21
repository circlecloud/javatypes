declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class ShapelessRecipe extends java.lang.Object implements cn.nukkit.inventory.CraftingRecipe {
                // @ts-ignore
                constructor(result: cn.nukkit.item.Item, ingredients: java.util.Collection<cn.nukkit.item.Item> | Array<cn.nukkit.item.Item>)
                // @ts-ignore
                constructor(recipeId: java.lang.String | string, priority: number /*int*/, result: cn.nukkit.item.Item, ingredients: java.util.Collection<cn.nukkit.item.Item> | Array<cn.nukkit.item.Item>)
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item
                // @ts-ignore
                public getRecipeId(): string
                // @ts-ignore
                public getId(): java.util.UUID
                // @ts-ignore
                public setId(uuid: java.util.UUID): void
                // @ts-ignore
                public getIngredientList(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                public getIngredientCount(): number /*int*/
                // @ts-ignore
                public registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void
                // @ts-ignore
                public getType(): cn.nukkit.inventory.RecipeType
                // @ts-ignore
                public requiresCraftingTable(): boolean
                // @ts-ignore
                public getExtraResults(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                public getAllResults(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                public getPriority(): number /*int*/
                // @ts-ignore
                public matchItems(input: cn.nukkit.item.Item[][], output: cn.nukkit.item.Item[][]): boolean
            }
        }
    }
}
