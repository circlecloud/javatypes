declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents a re-usable template that produces a formatted
                 * {@link Text.Builder}. Elements will be appended to the result builder in the
                 * order that they are specified in {@link #of(Object...)}.
                 */
                // @ts-ignore
                class TextTemplate extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable, java.lang.Iterable<java.lang.Object> {
                    /**
                     * Default "open" String for how arguments are contained within the
                     * template.
                     */
                    // @ts-ignore
                    readonly DEFAULT_OPEN_ARG: string
                    /**
                     * Default "close" String for how arguments are contained within the
                     * template.
                     */
                    // @ts-ignore
                    readonly DEFAULT_CLOSE_ARG: string
                    /**
                     * Empty representation of a {@link TextTemplate}. This is returned if the
                     * array supplied to {@link #of(Object...)} is empty.
                     */
                    // @ts-ignore
                    readonly EMPTY: org.spongepowered.api.text.TextTemplate
                    /**
                     * Returns the elements contained in this TextTemplate.
                     * @return The elements within the template
                     */
                    // @ts-ignore
                    getElements(): java.util.List<java.lang.Object>
                    /**
                     * Returns the arguments contained within the TextTemplate.
                     * @return The arguments within this TextTemplate
                     */
                    // @ts-ignore
                    getArguments(): java.util.Map<java.lang.String, org.spongepowered.api.text.TextTemplate.Arg>
                    /**
                     * Returns the string used for containing Args within the template.
                     * @return String containing args
                     */
                    // @ts-ignore
                    getOpenArgString(): java.lang.String
                    /**
                     * Returns the string used for containing Args within the template.
                     * @return String containing args
                     */
                    // @ts-ignore
                    getCloseArgString(): java.lang.String
                    /**
                     * Concatenates the specified {@link TextTemplate} to this template and
                     * returns the result. In the event that the two templates' open/close
                     * argument containers vary, this template's argument containers will be
                     * used.
                     * @param other To concatenate
                     * @return Concatenated template
                     */
                    // @ts-ignore
                    concat(other: org.spongepowered.api.text.TextTemplate): org.spongepowered.api.text.TextTemplate
                    /**
                     * Applies an empty map of parameters to this TextTemplate and returns the
                     * result in a {@link Text.Builder}.
                     * @return Text builder containing result
                     * @throws TextTemplateArgumentException if required parameters are missing
                     */
                    // @ts-ignore
                    apply(): org.spongepowered.api.text.Text.Builder
                    /**
                     * Applies the specified parameters to this TextTemplate and returns the
                     * result in a {@link Text.Builder}.
                     * @param params Parameters to apply
                     * @return Text builder containing result
                     * @throws TextTemplateArgumentException if required parameters are missing
                     */
                    // @ts-ignore
                    apply(params: java.util.Map<java.lang.String, any>): org.spongepowered.api.text.Text.Builder
                    /**
                     * Constructs a new TextTemplate for the given elements. The order of the
                     * elements is the order in which they will be appended to the result
                     * builder via {@link #apply(Map)}.
                     * <p>The provided elements may be of any type.</p>
                     * <p>In the case that an element is a {@link TextElement},
                     * {@link TextElement#applyTo(Text.Builder)} will be used to append the
                     * element to the builder.</p>
                     * <p>In the case that an element is an {@link Arg} the argument will be
                     * replaced with the {@link TextElement} provided by the corresponding
                     * parameter supplied by {@link #apply(Map)}</p>
                     * <p>In the case that an element is any other type, the parameter value's
                     * {@link Object#toString()} method will be used to create a {@link Text}
                     * object.</p>
                     * @param elements Elements to append to builder
                     * @param openArg String to use for beginning of Arg containers
                     * @param closeArg String to use for end of Arg containers
                     * @return Newly constructed TextTemplate
                     */
                    // @ts-ignore
                    of(openArg: string, closeArg: string, elements: any[]): org.spongepowered.api.text.TextTemplate
                    /**
                     * Constructs a new TextTemplate for the given elements. The order of the
                     * elements is the order in which they will be appended to the result
                     * builder via {@link #apply(Map)}.
                     * <p>The provided elements may be of any type.</p>
                     * <p>In the case that an element is a {@link TextElement},
                     * {@link TextElement#applyTo(Text.Builder)} will be used to append the
                     * element to the builder.</p>
                     * <p>In the case that an element is an {@link Arg} the argument will be
                     * replaced with the {@link TextElement} provided by the corresponding
                     * parameter supplied by {@link #apply(Map)}</p>
                     * <p>In the case that an element is any other type, the parameter value's
                     * {@link Object#toString()} method will be used to create a {@link Text}
                     * object.</p>
                     * @param elements Elements to append to builder
                     * @return Newly constructed TextTemplate
                     */
                    // @ts-ignore
                    of(...elements: any[]): org.spongepowered.api.text.TextTemplate
                    /**
                     * Returns the empty representation of a TextTemplate.
                     * @return Empty TextTemplate
                     */
                    // @ts-ignore
                    of(): org.spongepowered.api.text.TextTemplate
                    /**
                     * Constructs a new {@link Arg} to be supplied to {@link #of(Object...)}.
                     * This argument expects a {@link TextElement} parameter.
                     * @param name name of argument
                     * @return argument builder
                     */
                    // @ts-ignore
                    arg(name: string): org.spongepowered.api.text.TextTemplate.Arg.Builder
                    // @ts-ignore
                    toText(): org.spongepowered.api.text.Text
                    // @ts-ignore
                    iterator(): java.util.Iterator<java.lang.Object>
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(obj: any): boolean
                }
            }
        }
    }
}
