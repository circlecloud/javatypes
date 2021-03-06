declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    /**
                     * Represents a {@link TextAction} that responds to shift-clicks.
                     * @param <R> the type of the result of the action
                     */
                    // @ts-ignore
                    abstract class ShiftClickAction<R> extends org.spongepowered.api.text.action.TextAction<R> {
                        // @ts-ignore
                        public applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                    }
                }
            }
        }
    }
}
