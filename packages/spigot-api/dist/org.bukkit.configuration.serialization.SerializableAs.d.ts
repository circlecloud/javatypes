declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace serialization {
                /**
                 * Represents an "alias" that a {@link ConfigurationSerializable} may be
                 * stored as.
                 * If this is not present on a {@link ConfigurationSerializable} class, it
                 * will use the fully qualified name of the class.
                 * <p>
                 * This value will be stored in the configuration so that the configuration
                 * deserialization can determine what type it is.
                 * <p>
                 * Using this annotation on any other class than a {@link
                 * ConfigurationSerializable} will have no effect.
                 * @see ConfigurationSerialization#registerClass(Class, String)
                 */
                // @ts-ignore
                class SerializableAs implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
