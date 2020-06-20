declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace RecipeChoice {
                /**
                 * Represents a choice of multiple matching Materials.
                 */
                // @ts-ignore
                class MaterialChoice extends java.lang.Object implements org.bukkit.inventory.RecipeChoice {
                    // @ts-ignore
                    constructor(choice: org.bukkit.Material)
                    // @ts-ignore
                    constructor(...choices: org.bukkit.Material[])
                    /**
                     * Constructs a MaterialChoice with the current values of the specified
                     * tag.
                     * @param choices the tag
                     */
                    // @ts-ignore
                    constructor(choices: org.bukkit.Tag<org.bukkit.Material>)
                    // @ts-ignore
                    constructor(choices: Array<org.bukkit.Material>)
                    // @ts-ignore
                    test(t: org.bukkit.inventory.ItemStack): boolean
                    // @ts-ignore
                    getItemStack(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    getChoices(): java.util.List<org.bukkit.Material>
                    // @ts-ignore
                    clone(): org.bukkit.inventory.RecipeChoice.MaterialChoice
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(obj: any): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
