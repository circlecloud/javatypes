declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace type {
                        /**
                         * Filters out all specified event types. This allows listening for a supertype
                         * event and filtering to only receive events not from a specific subset of the
                         * annotated event's subtypes.
                         * <p>This annotation cannot be specified in addition to the {@link Include}
                         * annotation.</p>
                         */
                        // @ts-ignore
                        class Exclude implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
