declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    /**
                     * Represents a {@link TextAction} that responds to clicks.
                     * @param <R> The type of the result of the action
                     */
                    // @ts-ignore
                    abstract class ClickAction<R> extends org.spongepowered.api.text.action.TextAction<R> {
                        // @ts-ignore
                        public applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                    }
                }
            }
        }
    }
}
