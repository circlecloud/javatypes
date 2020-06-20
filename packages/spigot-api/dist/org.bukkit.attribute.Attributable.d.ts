declare namespace org {
    namespace bukkit {
        namespace attribute {
            /**
             * Represents an object which may contain attributes.
             */
            // @ts-ignore
            interface Attributable {
                /**
                 * Gets the specified attribute instance from the object. This instance will
                 * be backed directly to the object and any changes will be visible at once.
                 * @param attribute the attribute to get
                 * @return the attribute instance or null if not applicable to this object
                 */
                // @ts-ignore
                getAttribute(attribute: org.bukkit.attribute.Attribute): org.bukkit.attribute.AttributeInstance
            }
        }
    }
}
