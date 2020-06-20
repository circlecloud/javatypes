declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace trait {
                    /**
                     * Represents a type of {@link BlockTrait} that accepts an unknown {@link Enum}
                     * set of values. Due to type erasure and implementation, most all enum types
                     * may not be exposed in the API.
                     */
                    // @ts-ignore
                    interface EnumTrait<E extends java.lang.Enum<E>> extends org.spongepowered.api.block.trait.BlockTrait<E> {
                    }
                }
            }
        }
    }
}
