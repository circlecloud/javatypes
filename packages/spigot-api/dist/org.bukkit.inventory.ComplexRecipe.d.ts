declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a complex recipe which has imperative server-defined behavior, eg
             * armor dyeing.
             * Note: Since a complex recipe has dynamic outputs, {@link #getResult()} will
             * sometimes return an AIR ItemStack.
             */
            // @ts-ignore
            interface ComplexRecipe extends org.bukkit.inventory.Recipe, org.bukkit.Keyed {
            }
        }
    }
}
