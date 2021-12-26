declare namespace org {
    namespace bukkit {
        namespace attribute {
            /**
             * Represents a mutable instance of an attribute and its associated modifiers
             * and values.
             */
            // @ts-ignore
            interface AttributeInstance {
                /**
                 * The attribute pertaining to this instance.
                 * @return the attribute
                 */
                // @ts-ignore
                getAttribute(): org.bukkit.attribute.Attribute
                /**
                 * Base value of this instance before modifiers are applied.
                 * @return base value
                 */
                // @ts-ignore
                getBaseValue(): number /*double*/
                /**
                 * Set the base value of this instance.
                 * @param value new base value
                 */
                // @ts-ignore
                setBaseValue(value: number /*double*/): void
                /**
                 * Get all modifiers present on this instance.
                 * @return a copied collection of all modifiers
                 */
                // @ts-ignore
                getModifiers(): Array<org.bukkit.attribute.AttributeModifier>
                /**
                 * Add a modifier to this instance.
                 * @param modifier to add
                 */
                // @ts-ignore
                addModifier(modifier: org.bukkit.attribute.AttributeModifier): void
                /**
                 * Remove a modifier from this instance.
                 * @param modifier to remove
                 */
                // @ts-ignore
                removeModifier(modifier: org.bukkit.attribute.AttributeModifier): void
                /**
                 * Get the value of this instance after all associated modifiers have been
                 * applied.
                 * @return the total attribute value
                 */
                // @ts-ignore
                getValue(): number /*double*/
                /**
                 * Gets the default value of the Attribute attached to this instance.
                 * @return server default value
                 */
                // @ts-ignore
                getDefaultValue(): number /*double*/
            }
        }
    }
}
