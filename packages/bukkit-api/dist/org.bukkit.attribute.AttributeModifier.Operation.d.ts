declare namespace org {
    namespace bukkit {
        namespace attribute {
            namespace AttributeModifier {
                /**
                 * Enumerable operation to be applied.
                 */
                // @ts-ignore
                class Operation extends java.lang.Enum<org.bukkit.attribute.AttributeModifier.Operation> {
                    /**
                     * Adds (or subtracts) the specified amount to the base value.
                     */
                    // @ts-ignore
                    public static readonly ADD_NUMBER: org.bukkit.attribute.AttributeModifier.Operation
                    /**
                     * Adds this scalar of amount to the base value.
                     */
                    // @ts-ignore
                    public static readonly ADD_SCALAR: org.bukkit.attribute.AttributeModifier.Operation
                    /**
                     * Multiply amount by this value, after adding 1 to it.
                     */
                    // @ts-ignore
                    public static readonly MULTIPLY_SCALAR_1: org.bukkit.attribute.AttributeModifier.Operation
                    // @ts-ignore
                    public static values(): org.bukkit.attribute.AttributeModifier.Operation[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.attribute.AttributeModifier.Operation
                }
            }
        }
    }
}
