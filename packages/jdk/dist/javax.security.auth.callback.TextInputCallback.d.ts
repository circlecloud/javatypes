declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code TextInputCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to retrieve generic text
                 * information.
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class TextInputCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a {@code TextInputCallback} with a prompt.
                     * <p>
                     * @param prompt the prompt used to request the information.
                     * @exception IllegalArgumentException if {#code prompt} is null
                     *                   or if {@code prompt} has a length of 0.
                     */
                    // @ts-ignore
                    constructor(prompt: string)
                    /**
                     * Construct a {@code TextInputCallback} with a prompt
                     * and default input value.
                     * <p>
                     * @param prompt the prompt used to request the information. <p>
                     * @param defaultText the text to be used as the default text displayed
                     *                   with the prompt.
                     * @exception IllegalArgumentException if {#code prompt} is null,
                     *                   if {@code prompt} has a length of 0,
                     *                   if {@code defaultText} is null
                     *                   or if {@code defaultText} has a length of 0.
                     */
                    // @ts-ignore
                    constructor(prompt: string, defaultText: string)
                    /**
                     * Get the prompt.
                     * <p>
                     * @return the prompt.
                     */
                    // @ts-ignore
                    getPrompt(): java.lang.String
                    /**
                     * Get the default text.
                     * <p>
                     * @return the default text, or null if this {#code TextInputCallback}
                     *           was not instantiated with {@code defaultText}.
                     */
                    // @ts-ignore
                    getDefaultText(): java.lang.String
                    /**
                     * Set the retrieved text.
                     * <p>
                     * @param text the retrieved text, which may be null.
                     * @see #getText
                     */
                    // @ts-ignore
                    setText(text: string): void
                    /**
                     * Get the retrieved text.
                     * <p>
                     * @return the retrieved text, which may be null.
                     * @see #setText
                     */
                    // @ts-ignore
                    getText(): java.lang.String
                }
            }
        }
    }
}
