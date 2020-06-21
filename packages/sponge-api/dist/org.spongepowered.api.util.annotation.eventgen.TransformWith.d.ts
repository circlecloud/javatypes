declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        /**
                         * Used to indicate a method that will be called from the method with the
                         * corresponding {@link TransformResult} annotation.
                         * <p>This annotation should be placed on the method with the least specific
                         * return type, if covariant return types are used.</p>
                         * <p>The method annotated with this annotation <bold>must</bold> either return
                         * an instance of the method's class, or Object (for compatibility with
                         * generics).</p>
                         */
                        // @ts-ignore
                        abstract class TransformWith implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
