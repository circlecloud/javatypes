declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code ConfirmationCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to ask for YES/NO,
                 * OK/CANCEL, YES/NO/CANCEL or other similar confirmations.
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class ConfirmationCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a {@code ConfirmationCallback} with a
                     * message type, an option type and a default option.
                     * <p> Underlying security services use this constructor if
                     * they require either a YES/NO, YES/NO/CANCEL or OK/CANCEL
                     * confirmation.
                     * <p>
                     * @param messageType the message type ({#code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR}). <p>
                     * @param optionType the option type ({#code YES_NO_OPTION},
                     *                   {@code YES_NO_CANCEL_OPTION} or
                     *                   {@code OK_CANCEL_OPTION}). <p>
                     * @param defaultOption the default option
                     *                   from the provided optionType ({#code YES},
                     *                   {@code NO}, {@code CANCEL} or
                     *                   {@code OK}).
                     * @exception IllegalArgumentException if messageType is not either
                     *                   {#code INFORMATION}, {@code WARNING},
                     *                   or {@code ERROR}, if optionType is not either
                     *                   {@code YES_NO_OPTION},
                     *                   {@code YES_NO_CANCEL_OPTION}, or
                     *                   {@code OK_CANCEL_OPTION},
                     *                   or if {@code defaultOption}
                     *                   does not correspond to one of the options in
                     *                   {@code optionType}.
                     */
                    // @ts-ignore
                    constructor(messageType: number /*int*/, optionType: number /*int*/, defaultOption: number /*int*/)
                    /**
                     * Construct a {@code ConfirmationCallback} with a
                     * message type, a list of options and a default option.
                     * <p> Underlying security services use this constructor if
                     * they require a confirmation different from the available preset
                     * confirmations provided (for example, CONTINUE/ABORT or STOP/GO).
                     * The confirmation options are listed in the {@code options} array,
                     * and are displayed by the {@code CallbackHandler} implementation
                     * in a manner consistent with the way preset options are displayed.
                     * <p>
                     * @param messageType the message type ({#code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR}). <p>
                     * @param options the list of confirmation options. <p>
                     * @param defaultOption the default option, represented as an index
                     *                   into the {#code options} array.
                     * @exception IllegalArgumentException if messageType is not either
                     *                   {#code INFORMATION}, {@code WARNING},
                     *                   or {@code ERROR}, if {@code options} is null,
                     *                   if {@code options} has a length of 0,
                     *                   if any element from {@code options} is null,
                     *                   if any element from {@code options}
                     *                   has a length of 0, or if {@code defaultOption}
                     *                   does not lie within the array boundaries of
                     *                   {@code options}.
                     */
                    // @ts-ignore
                    constructor(messageType: number /*int*/, options: java.lang.String[] | string[], defaultOption: number /*int*/)
                    /**
                     * Construct a {@code ConfirmationCallback} with a prompt,
                     * message type, an option type and a default option.
                     * <p> Underlying security services use this constructor if
                     * they require either a YES/NO, YES/NO/CANCEL or OK/CANCEL
                     * confirmation.
                     * <p>
                     * @param prompt the prompt used to describe the list of options. <p>
                     * @param messageType the message type ({#code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR}). <p>
                     * @param optionType the option type ({#code YES_NO_OPTION},
                     *                   {@code YES_NO_CANCEL_OPTION} or
                     *                   {@code OK_CANCEL_OPTION}). <p>
                     * @param defaultOption the default option
                     *                   from the provided optionType ({#code YES},
                     *                   {@code NO}, {@code CANCEL} or
                     *                   {@code OK}).
                     * @exception IllegalArgumentException if {#code prompt} is null,
                     *                   if {@code prompt} has a length of 0,
                     *                   if messageType is not either
                     *                   {@code INFORMATION}, {@code WARNING},
                     *                   or {@code ERROR}, if optionType is not either
                     *                   {@code YES_NO_OPTION},
                     *                   {@code YES_NO_CANCEL_OPTION}, or
                     *                   {@code OK_CANCEL_OPTION},
                     *                   or if {@code defaultOption}
                     *                   does not correspond to one of the options in
                     *                   {@code optionType}.
                     */
                    // @ts-ignore
                    constructor(prompt: java.lang.String | string, messageType: number /*int*/, optionType: number /*int*/, defaultOption: number /*int*/)
                    /**
                     * Construct a {@code ConfirmationCallback} with a prompt,
                     * message type, a list of options and a default option.
                     * <p> Underlying security services use this constructor if
                     * they require a confirmation different from the available preset
                     * confirmations provided (for example, CONTINUE/ABORT or STOP/GO).
                     * The confirmation options are listed in the {@code options} array,
                     * and are displayed by the {@code CallbackHandler} implementation
                     * in a manner consistent with the way preset options are displayed.
                     * <p>
                     * @param prompt the prompt used to describe the list of options. <p>
                     * @param messageType the message type ({#code INFORMATION},
                     *                   {@code WARNING} or {@code ERROR}). <p>
                     * @param options the list of confirmation options. <p>
                     * @param defaultOption the default option, represented as an index
                     *                   into the {#code options} array.
                     * @exception IllegalArgumentException if {#code prompt} is null,
                     *                   if {@code prompt} has a length of 0,
                     *                   if messageType is not either
                     *                   {@code INFORMATION}, {@code WARNING},
                     *                   or {@code ERROR}, if {@code options} is null,
                     *                   if {@code options} has a length of 0,
                     *                   if any element from {@code options} is null,
                     *                   if any element from {@code options}
                     *                   has a length of 0, or if {@code defaultOption}
                     *                   does not lie within the array boundaries of
                     *                   {@code options}.
                     */
                    // @ts-ignore
                    constructor(prompt: java.lang.String | string, messageType: number /*int*/, options: java.lang.String[] | string[], defaultOption: number /*int*/)
                    /**
                     * Unspecified option type.
                     * <p> The {@code getOptionType} method returns this
                     * value if this {@code ConfirmationCallback} was instantiated
                     * with {@code options} instead of an {@code optionType}.
                     */
                    // @ts-ignore
                    public static readonly UNSPECIFIED_OPTION: number /*int*/
                    /**
                     * YES/NO confirmation option.
                     * <p> An underlying security service specifies this as the
                     * {@code optionType} to a {@code ConfirmationCallback}
                     * constructor if it requires a confirmation which can be answered
                     * with either {@code YES} or {@code NO}.
                     */
                    // @ts-ignore
                    public static readonly YES_NO_OPTION: number /*int*/
                    /**
                     * YES/NO/CANCEL confirmation confirmation option.
                     * <p> An underlying security service specifies this as the
                     * {@code optionType} to a {@code ConfirmationCallback}
                     * constructor if it requires a confirmation which can be answered
                     * with either {@code YES}, {@code NO} or {@code CANCEL}.
                     */
                    // @ts-ignore
                    public static readonly YES_NO_CANCEL_OPTION: number /*int*/
                    /**
                     * OK/CANCEL confirmation confirmation option.
                     * <p> An underlying security service specifies this as the
                     * {@code optionType} to a {@code ConfirmationCallback}
                     * constructor if it requires a confirmation which can be answered
                     * with either {@code OK} or {@code CANCEL}.
                     */
                    // @ts-ignore
                    public static readonly OK_CANCEL_OPTION: number /*int*/
                    /**
                     * YES option.
                     * <p> If an {@code optionType} was specified to this
                     * {@code ConfirmationCallback}, this option may be specified as a
                     * {@code defaultOption} or returned as the selected index.
                     */
                    // @ts-ignore
                    public static readonly YES: number /*int*/
                    /**
                     * NO option.
                     * <p> If an {@code optionType} was specified to this
                     * {@code ConfirmationCallback}, this option may be specified as a
                     * {@code defaultOption} or returned as the selected index.
                     */
                    // @ts-ignore
                    public static readonly NO: number /*int*/
                    /**
                     * CANCEL option.
                     * <p> If an {@code optionType} was specified to this
                     * {@code ConfirmationCallback}, this option may be specified as a
                     * {@code defaultOption} or returned as the selected index.
                     */
                    // @ts-ignore
                    public static readonly CANCEL: number /*int*/
                    /**
                     * OK option.
                     * <p> If an {@code optionType} was specified to this
                     * {@code ConfirmationCallback}, this option may be specified as a
                     * {@code defaultOption} or returned as the selected index.
                     */
                    // @ts-ignore
                    public static readonly OK: number /*int*/
                    /**
                     * INFORMATION message type.
                     */
                    // @ts-ignore
                    public static readonly INFORMATION: number /*int*/
                    /**
                     * WARNING message type.
                     */
                    // @ts-ignore
                    public static readonly WARNING: number /*int*/
                    /**
                     * ERROR message type.
                     */
                    // @ts-ignore
                    public static readonly ERROR: number /*int*/
                    /**
                     * Get the prompt.
                     * <p>
                     * @return the prompt, or null if this {#code ConfirmationCallback}
                     *           was instantiated without a {@code prompt}.
                     */
                    // @ts-ignore
                    public getPrompt(): string
                    /**
                     * Get the message type.
                     * <p>
                     * @return the message type ({#code INFORMATION},
                     *           {@code WARNING} or {@code ERROR}).
                     */
                    // @ts-ignore
                    public getMessageType(): number /*int*/
                    /**
                     * Get the option type.
                     * <p> If this method returns {@code UNSPECIFIED_OPTION}, then this
                     * {@code ConfirmationCallback} was instantiated with
                     * {@code options} instead of an {@code optionType}.
                     * In this case, invoke the {@code getOptions} method
                     * to determine which confirmation options to display.
                     * <p>
                     * @return the option type ({#code YES_NO_OPTION},
                     *           {@code YES_NO_CANCEL_OPTION} or
                     *           {@code OK_CANCEL_OPTION}), or
                     *           {@code UNSPECIFIED_OPTION} if this
                     *           {@code ConfirmationCallback} was instantiated with
                     *           {@code options} instead of an {@code optionType}.
                     */
                    // @ts-ignore
                    public getOptionType(): number /*int*/
                    /**
                     * Get the confirmation options.
                     * <p>
                     * @return the list of confirmation options, or null if this
                     *           {#code ConfirmationCallback} was instantiated with
                     *           an {@code optionType} instead of {@code options}.
                     */
                    // @ts-ignore
                    public getOptions(): string[]
                    /**
                     * Get the default option.
                     * <p>
                     * @return the default option, represented as
                     *           {#code YES}, {@code NO}, {@code OK} or
                     *           {@code CANCEL} if an {@code optionType}
                     *           was specified to the constructor of this
                     *           {@code ConfirmationCallback}.
                     *           Otherwise, this method returns the default option as
                     *           an index into the
                     *           {@code options} array specified to the constructor
                     *           of this {@code ConfirmationCallback}.
                     */
                    // @ts-ignore
                    public getDefaultOption(): number /*int*/
                    /**
                     * Set the selected confirmation option.
                     * <p>
                     * @param selection the selection represented as {#code YES},
                     *           {@code NO}, {@code OK} or {@code CANCEL}
                     *           if an {@code optionType} was specified to the constructor
                     *           of this {@code ConfirmationCallback}.
                     *           Otherwise, the selection represents the index into the
                     *           {@code options} array specified to the constructor
                     *           of this {@code ConfirmationCallback}.
                     * @see #getSelectedIndex
                     */
                    // @ts-ignore
                    public setSelectedIndex(selection: number /*int*/): void
                    /**
                     * Get the selected confirmation option.
                     * <p>
                     * @return the selected confirmation option represented as
                     *           {#code YES}, {@code NO}, {@code OK} or
                     *           {@code CANCEL} if an {@code optionType}
                     *           was specified to the constructor of this
                     *           {@code ConfirmationCallback}.
                     *           Otherwise, this method returns the selected confirmation
                     *           option as an index into the
                     *           {@code options} array specified to the constructor
                     *           of this {@code ConfirmationCallback}.
                     * @see #setSelectedIndex
                     */
                    // @ts-ignore
                    public getSelectedIndex(): number /*int*/
                }
            }
        }
    }
}
