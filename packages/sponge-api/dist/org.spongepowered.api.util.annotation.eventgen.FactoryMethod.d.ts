declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        /**
                         * Marks the annotated method as a factory method.
                         * A matching method will be generated in the factory class, which forwards
                         * to this method.
                         * <p>This annotation can be used to make backwards-compatible
                         * changes to an event class. By creating a method matching the old
                         * factory method signature, code expecting the old event signature
                         * will continue to function.</p>
                         */
                        // @ts-ignore
                        class FactoryMethod implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
