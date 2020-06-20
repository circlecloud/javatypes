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
                    constructor(choices: Array<org.bukkit.inventory.ItemStack>)
                    // @ts-ignore
                    getItemStack(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    getChoices(): java.util.List<org.bukkit.inventory.ItemStack>
                    // @ts-ignore
                    clone(): org.bukkit.inventory.RecipeChoice.ExactChoice
                    // @ts-ignore
                    test(t: org.bukkit.inventory.ItemStack): boolean
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
