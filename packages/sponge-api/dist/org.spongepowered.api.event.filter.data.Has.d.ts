declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace data {
                        /**
                         * Filters out events where the annotated parameter does not have the specified
                         * data manipulator type.
                         * <p>The annotated parameter type <strong>MUST</strong> extend
                         * {@link DataHolder}.</p>
                         * @see DataHolder#get(Class)
                         */
                        // @ts-ignore
                        abstract class Has implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
