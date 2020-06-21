declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace data {
                        /**
                         * Filters out events where the annotated parameter does not support the
                         * specified data manipulator type.
                         * <p>The annotated parameter type <strong>MUST</strong> extend
                         * {@link DataHolder}.</p>
                         * @see DataHolder#supports(Class)
                         */
                        // @ts-ignore
                        abstract class Supports implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
