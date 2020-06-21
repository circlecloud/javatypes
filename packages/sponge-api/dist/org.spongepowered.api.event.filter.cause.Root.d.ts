declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace cause {
                        /**
                         * Sets the parameter to the root object in the cause chain, an additional check
                         * is done to ensure that the root object is of the correct type and the filter
                         * fails if this is not the case.
                         * @see Cause#root()
                         */
                        // @ts-ignore
                        abstract class Root implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
