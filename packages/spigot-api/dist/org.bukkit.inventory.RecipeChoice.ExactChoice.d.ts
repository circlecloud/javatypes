declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace RecipeChoice {
                /**
                 * Represents a choice that will be valid only one of the stacks is exactly
                 * matched (aside from stack size).
                 * <br>
                 * <b>Only valid for shaped recipes</b>
                 * @deprecated draft API
                 */
                // @ts-ignore
                class ExactChoice extends java.lang.Object implements org.bukkit.inventory.RecipeChoice {
                    // @ts-ignore
                    constructor(stack: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    constructor(...stacks: org.bukkit.inventory.ItemStack[])
                    // @ts-ignore
                    constructor(choices: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>)
                    // @ts-ignore
                    public getItemStack(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    public getChoices(): Array<org.bukkit.inventory.ItemStack>
                    // @ts-ignore
                    public clone(): org.bukkit.inventory.RecipeChoice.ExactChoice
                    // @ts-ignore
                    public test(t: org.bukkit.inventory.ItemStack): boolean
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
