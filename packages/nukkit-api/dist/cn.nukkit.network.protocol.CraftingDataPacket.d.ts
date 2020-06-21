declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class CraftingDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_CRAFTING_TABLE: java.lang.String | string
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_CARTOGRAPHY_TABLE: java.lang.String | string
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_STONECUTTER: java.lang.String | string
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_FURNACE: java.lang.String | string
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_CAMPFIRE: java.lang.String | string
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_BLAST_FURNACE: java.lang.String | string
                    // @ts-ignore
                    public static readonly CRAFTING_TAG_SMOKER: java.lang.String | string
                    // @ts-ignore
                    public cleanRecipes: boolean
                    // @ts-ignore
                    public addShapelessRecipe(...recipe: cn.nukkit.inventory.ShapelessRecipe[]): void
                    // @ts-ignore
                    public addShapedRecipe(...recipe: cn.nukkit.inventory.ShapedRecipe[]): void
                    // @ts-ignore
                    public addFurnaceRecipe(...recipe: cn.nukkit.inventory.FurnaceRecipe[]): void
                    // @ts-ignore
                    public addBrewingRecipe(...recipe: cn.nukkit.inventory.BrewingRecipe[]): void
                    // @ts-ignore
                    public addContainerRecipe(...recipe: cn.nukkit.inventory.ContainerRecipe[]): void
                    // @ts-ignore
                    public clean(): cn.nukkit.network.protocol.DataPacket
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
