declare namespace org {
    namespace bukkit {
        namespace attribute {
            /**
             * Concrete implementation of an attribute modifier.
             */
            // @ts-ignore
            class AttributeModifier extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                // @ts-ignore
                constructor(name: string, amount: number /*double*/, operation: org.bukkit.attribute.AttributeModifier.Operation)
                // @ts-ignore
                constructor(uuid: java.util.UUID, name: string, amount: number /*double*/, operation: org.bukkit.attribute.AttributeModifier.Operation)
                // @ts-ignore
                constructor(uuid: java.util.UUID, name: string, amount: number /*double*/, operation: org.bukkit.attribute.AttributeModifier.Operation, slot: org.bukkit.inventory.EquipmentSlot)
                /**
                 * Get the unique ID for this modifier.
                 * @return unique id
                 */
                // @ts-ignore
                getUniqueId(): java.util.UUID
                /**
                 * Get the name of this modifier.
                 * @return name
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Get the amount by which this modifier will apply its {@link Operation}.
                 * @return modification amount
                 */
                // @ts-ignore
                getAmount(): double
                /**
                 * Get the operation this modifier will apply.
                 * @return operation
                 */
                // @ts-ignore
                getOperation(): org.bukkit.attribute.AttributeModifier.Operation
                /**
                 * Get the {@link EquipmentSlot} this AttributeModifier is active on,
                 * or null if this modifier is applicable for any slot.
                 * @return the slot
                 */
                // @ts-ignore
                getSlot(): org.bukkit.inventory.EquipmentSlot
                // @ts-ignore
                serialize(): java.util.Map<java.lang.String, java.lang.Object>
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                deserialize(args: java.util.Map<java.lang.String, java.lang.Object>): org.bukkit.attribute.AttributeModifier
            }
        }
    }
}
