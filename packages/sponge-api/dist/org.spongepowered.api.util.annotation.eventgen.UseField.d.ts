declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        /**
                         * Used to mark fields which should be used by the class generator.
                         * <p>The class generator will reference the annotated field when
                         * generating methods, and set it from the constructor arguments</p>
                         * <p>Any field in an abstract class without this field will not be
                         * set automatically, even if it matches a property from the implemented
                         * event.</p>
                         */
                        // @ts-ignore
                        abstract class UseField implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
