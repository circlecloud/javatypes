declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        /**
                         * Used to indicate that the return type of a method should be transformed by
                         * calling a method on it, indicated by the {@link TransformWith} annotation.
                         * <p>This annotation should be placed on the method with the least specific
                         * return type, if covariant return types are used.</p>
                         * <p>The return type of the annotation, or a superclass/superinterface of it,
                         * must have a method annotated with {@link TransformWith}, with a matching
                         * {@link #value()}.</p>
                         */
                        // @ts-ignore
                        abstract class TransformResult implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
