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
                    constructor(choices: java.util.List<org.bukkit.Material> | Array<org.bukkit.Material>)
                    // @ts-ignore
                    public test(t: org.bukkit.inventory.ItemStack): boolean
                    // @ts-ignore
                    public getItemStack(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    public getChoices(): Array<org.bukkit.Material>
                    // @ts-ignore
                    public clone(): org.bukkit.inventory.RecipeChoice.MaterialChoice
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
