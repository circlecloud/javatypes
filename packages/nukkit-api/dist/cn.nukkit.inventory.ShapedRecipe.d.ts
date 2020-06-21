declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class ShapedRecipe extends java.lang.Object implements cn.nukkit.inventory.CraftingRecipe {
                // @ts-ignore
                constructor(primaryResult: cn.nukkit.item.Item, shape: java.lang.String[] | string[], ingredients: java.util.Map<java.lang.Character, cn.nukkit.item.Item>, extraResults: java.util.List<cn.nukkit.item.Item> | Array<cn.nukkit.item.Item>)
                /**
                 * Constructs a ShapedRecipe instance.
                 * @param primaryResult    Primary result of the recipe
                 * @param shape<br>        Array of 1, 2, or 3 strings representing the rows of the recipe.
                 *                          This accepts an array of 1, 2 or 3 strings. Each string should be of the same length and must be at most 3
                 *                          characters long. Each character represents a unique type of ingredient. Spaces are interpreted as air.
                 * @param ingredients<br>  Char =&gt; Item map of items to be set into the shape.
                 *                          This accepts an array of Items, indexed by character. Every unique character (except space) in the shape
                 *                          array MUST have a corresponding item in this list. Space character is automatically treated as air.
                 * @param extraResults<br> List of additional result items to leave in the crafting grid afterwards. Used for things like cake recipe
                 *                          empty buckets.
                 *                          <p>
                 *                          Note: Recipes **do not** need to be square. Do NOT add padding for empty rows/columns.
                 */
                // @ts-ignore
                constructor(recipeId: java.lang.String | string, priority: number /*int*/, primaryResult: cn.nukkit.item.Item, shape: java.lang.String[] | string[], ingredients: java.util.Map<java.lang.Character, cn.nukkit.item.Item>, extraResults: java.util.List<cn.nukkit.item.Item> | Array<cn.nukkit.item.Item>)
                // @ts-ignore
                public getWidth(): number /*int*/
                // @ts-ignore
                public getHeight(): number /*int*/
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item
                // @ts-ignore
                public getRecipeId(): string
                // @ts-ignore
                public getId(): java.util.UUID
                // @ts-ignore
                public setId(uuid: java.util.UUID): void
                // @ts-ignore
                public setIngredient(key: java.lang.String | string, item: cn.nukkit.item.Item): cn.nukkit.inventory.ShapedRecipe
                // @ts-ignore
                public setIngredient(key: string, item: cn.nukkit.item.Item): cn.nukkit.inventory.ShapedRecipe
                // @ts-ignore
                public getIngredientList(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                public getIngredientMap(): java.util.Map<java.lang.Integer | number, java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>>
                // @ts-ignore
                public getIngredient(x: number /*int*/, y: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public getShape(): string[]
                // @ts-ignore
                public registerToCraftingManager(manager: cn.nukkit.inventory.CraftingManager): void
                // @ts-ignore
                public getType(): cn.nukkit.inventory.RecipeType
                // @ts-ignore
                public getExtraResults(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                public getAllResults(): Array<cn.nukkit.item.Item>
                // @ts-ignore
                public getPriority(): number /*int*/
                // @ts-ignore
                public matchItems(input: cn.nukkit.item.Item[][], output: cn.nukkit.item.Item[][]): boolean
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public requiresCraftingTable(): boolean
            }
        }
    }
}
