declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                class CommandMessageFormatting extends java.lang.Object {
                    // @ts-ignore
                    public static readonly PIPE_TEXT: org.spongepowered.api.text.Text
                    // @ts-ignore
                    public static readonly SPACE_TEXT: org.spongepowered.api.text.Text
                    // @ts-ignore
                    public static readonly STAR_TEXT: org.spongepowered.api.text.Text
                    // @ts-ignore
                    public static readonly LT_TEXT: org.spongepowered.api.text.Text
                    // @ts-ignore
                    public static readonly GT_TEXT: org.spongepowered.api.text.Text
                    // @ts-ignore
                    public static readonly ELLIPSIS_TEXT: org.spongepowered.api.text.Text
                    /**
                     * Format text to be output as an error directly to a sender. Not necessary
                     * when creating an exception to be thrown
                     * @param error The error message
                     * @return The formatted error message.
                     */
                    // @ts-ignore
                    public static error(error: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text
                    /**
                     * Format text to be output as a debug message directly to a sender.
                     * @param debug The debug message
                     * @return The formatted debug message.
                     */
                    // @ts-ignore
                    public static debug(debug: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text
                }
            }
        }
    }
}
