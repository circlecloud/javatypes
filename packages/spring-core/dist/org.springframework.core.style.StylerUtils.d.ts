declare namespace org {
    namespace springframework {
        namespace core {
            namespace style {
                /**
                 * Simple utility class to allow for convenient access to value
                 * styling logic, mainly to support descriptive logging messages.
                 * <p>For more sophisticated needs, use the {@link ValueStyler} abstraction
                 * directly. This class simply uses a shared {@link DefaultValueStyler}
                 * instance underneath.
                 * @author Keith Donald
                 * @since 1.2.2
                 * @see ValueStyler
                 * @see DefaultValueStyler
                 */
                // @ts-ignore
                class StylerUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Style the specified value according to default conventions.
                     * @param value the Object value to style
                     * @return the styled String
                     * @see DefaultValueStyler
                     */
                    // @ts-ignore
                    style(value: any): java.lang.String
                }
            }
        }
    }
}
