declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code PasswordCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to retrieve password information.
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class PasswordCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a {@code PasswordCallback} with a prompt
                     * and a boolean specifying whether the password should be displayed
                     * as it is being typed.
                     * <p>
                     * @param prompt the prompt used to request the password. <p>
                     * @param echoOn true if the password should be displayed
                     *                   as it is being typed.
                     * @exception IllegalArgumentException if {#code prompt} is null or
                     *                   if {@code prompt} has a length of 0.
                     */
                    // @ts-ignore
                    constructor(prompt: java.lang.String | string, echoOn: boolean)
                    /**
                     * Get the prompt.
                     * <p>
                     * @return the prompt.
                     */
                    // @ts-ignore
                    public getPrompt(): string
                    /**
                     * Return whether the password
                     * should be displayed as it is being typed.
                     * <p>
                     * @return the whether the password
                     *           should be displayed as it is being typed.
                     */
                    // @ts-ignore
                    public isEchoOn(): boolean
                    /**
                     * Set the retrieved password.
                     * <p> This method makes a copy of the input <i>password</i>
                     * before storing it.
                     * <p>
                     * @param password the retrieved password, which may be null.
                     * @see #getPassword
                     */
                    // @ts-ignore
                    public setPassword(password: string[]): void
                    /**
                     * Get the retrieved password.
                     * <p> This method returns a copy of the retrieved password.
                     * <p>
                     * @return the retrieved password, which may be null.
                     * @see #setPassword
                     */
                    // @ts-ignore
                    public getPassword(): string[]
                    /**
                     * Clear the retrieved password.
                     */
                    // @ts-ignore
                    public clearPassword(): void
                }
            }
        }
    }
}
