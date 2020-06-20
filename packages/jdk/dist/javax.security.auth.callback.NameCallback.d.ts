declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code NameCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to retrieve name information.
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class NameCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a {@code NameCallback} with a prompt.
                     * <p>
                     * @param prompt the prompt used to request the name.
                     * @exception IllegalArgumentException if {#code prompt} is null
                     *                   or if {@code prompt} has a length of 0.
                     */
                    // @ts-ignore
                    constructor(prompt: string)
                    /**
                     * Construct a {@code NameCallback} with a prompt
                     * and default name.
                     * <p>
                     * @param prompt the prompt used to request the information. <p>
                     * @param defaultName the name to be used as the default name displayed
                     *                   with the prompt.
                     * @exception IllegalArgumentException if {#code prompt} is null,
                     *                   if {@code prompt} has a length of 0,
                     *                   if {@code defaultName} is null,
                     *                   or if {@code defaultName} has a length of 0.
                     */
                    // @ts-ignore
                    constructor(prompt: string, defaultName: string)
                    /**
                     * Get the prompt.
                     * <p>
                     * @return the prompt.
                     */
                    // @ts-ignore
                    getPrompt(): java.lang.String
                    /**
                     * Get the default name.
                     * <p>
                     * @return the default name, or null if this {#code NameCallback}
                     *           was not instantiated with a {@code defaultName}.
                     */
                    // @ts-ignore
                    getDefaultName(): java.lang.String
                    /**
                     * Set the retrieved name.
                     * <p>
                     * @param name the retrieved name (which may be null).
                     * @see #getName
                     */
                    // @ts-ignore
                    setName(name: string): void
                    /**
                     * Get the retrieved name.
                     * <p>
                     * @return the retrieved name (which may be null)
                     * @see #setName
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
