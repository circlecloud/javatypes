declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    /**
                     * Represents an action happening as a response to an event on a {@link Text}.
                     * @param <R> The type of the result
                     * @see ClickAction
                     * @see HoverAction
                     * @see ShiftClickAction
                     */
                    // @ts-ignore
                    abstract class TextAction<R> extends java.lang.Object implements org.spongepowered.api.text.TextElement {
                        /**
                         * Constructs a new {@link TextAction} with the given result.
                         * @param result The result of the text action
                         */
                        // @ts-ignore
                        constructor(result: R)
                        // @ts-ignore
                        readonly result: R
                        /**
                         * Returns the result of this {@link TextAction}.
                         * @return The result
                         */
                        // @ts-ignore
                        public getResult(): R
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
