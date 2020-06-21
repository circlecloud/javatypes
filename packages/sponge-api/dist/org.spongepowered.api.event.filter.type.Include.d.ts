declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace type {
                        /**
                         * Filters out all event types which are not in the specified array of event
                         * classes. This allows listening for a supertype event and filtering to only
                         * receive events for a specific subset of the annotated event's subtypes.
                         * <p>This annotation cannot be specified in addition to the {@link Exclude}
                         * annotation.</p>
                         */
                        // @ts-ignore
                        abstract class Include implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
