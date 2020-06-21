declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    /**
                     * Filters out events which do not match the specified cancellation state
                     * (represented by a {@link Tristate}). If the state is set to undefined then
                     * the listener will be called regardless of the cancellation state.
                     * <p>If this annotation is not present then the behavior is as normal, which is
                     * to say that the listener is only called if the event is not cancelled.</p>
                     * <p> The event type of the annotated event listener <strong>MUST</strong> be
                     * cancellable (eg. must extend {@link Cancellable}). </p>
                     */
                    // @ts-ignore
                    abstract class IsCancelled implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
