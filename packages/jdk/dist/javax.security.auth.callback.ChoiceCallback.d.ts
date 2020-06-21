declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code ChoiceCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to display a list of choices
                 * and to retrieve the selected choice(s).
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class ChoiceCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a {@code ChoiceCallback} with a prompt,
                     * a list of choices, a default choice, and a boolean specifying
                     * whether or not multiple selections from the list of choices are allowed.
                     * <p>
                     * @param prompt the prompt used to describe the list of choices. <p>
                     * @param choices the list of choices. <p>
                     * @param defaultChoice the choice to be used as the default choice
                     *                   when the list of choices are displayed.  This value
                     *                   is represented as an index into the
                     *                   {#code choices} array. <p>
                     * @param multipleSelectionsAllowed boolean specifying whether or
                     *                   not multiple selections can be made from the
                     *                   list of choices.
                     * @exception IllegalArgumentException if {#code prompt} is null,
                     *                   if {@code prompt} has a length of 0,
                     *                   if {@code choices} is null,
                     *                   if {@code choices} has a length of 0,
                     *                   if any element from {@code choices} is null,
                     *                   if any element from {@code choices}
                     *                   has a length of 0 or if {@code defaultChoice}
                     *                   does not fall within the array boundaries of
                     *                   {@code choices}.
                     */
                    // @ts-ignore
                    constructor(prompt: java.lang.String | string, choices: java.lang.String[] | string[], defaultChoice: number /*int*/, multipleSelectionsAllowed: boolean)
                    /**
                     * Get the prompt.
                     * <p>
                     * @return the prompt.
                     */
                    // @ts-ignore
                    public getPrompt(): string
                    /**
                     * Get the list of choices.
                     * <p>
                     * @return the list of choices.
                     */
                    // @ts-ignore
                    public getChoices(): string[]
                    /**
                     * Get the defaultChoice.
                     * <p>
                     * @return the defaultChoice, represented as an index into
                     *           the {#code choices} list.
                     */
                    // @ts-ignore
                    public getDefaultChoice(): number /*int*/
                    /**
                     * Get the boolean determining whether multiple selections from
                     * the {@code choices} list are allowed.
                     * <p>
                     * @return whether multiple selections are allowed.
                     */
                    // @ts-ignore
                    public allowMultipleSelections(): boolean
                    /**
                     * Set the selected choice.
                     * <p>
                     * @param selection the selection represented as an index into the
                     *           {#code choices} list.
                     * @see #getSelectedIndexes
                     */
                    // @ts-ignore
                    public setSelectedIndex(selection: number /*int*/): void
                    /**
                     * Set the selected choices.
                     * <p>
                     * @param selections the selections represented as indexes into the
                     *           {#code choices} list.
                     * @exception UnsupportedOperationException if multiple selections are
                     *           not allowed, as determined by
                     *           {#code allowMultipleSelections}.
                     * @see #getSelectedIndexes
                     */
                    // @ts-ignore
                    public setSelectedIndexes(selections: number /*int*/[]): void
                    /**
                     * Get the selected choices.
                     * <p>
                     * @return the selected choices, represented as indexes into the
                     *           {#code choices} list.
                     * @see #setSelectedIndexes
                     */
                    // @ts-ignore
                    public getSelectedIndexes(): number /*int*/[]
                }
            }
        }
    }
}
