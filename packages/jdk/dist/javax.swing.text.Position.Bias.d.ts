declare namespace javax {
    namespace swing {
        namespace text {
            namespace Position {
                /**
                 * A typesafe enumeration to indicate bias to a position
                 * in the model.  A position indicates a location between
                 * two characters.  The bias can be used to indicate an
                 * interest toward one of the two sides of the position
                 * in boundary conditions where a simple offset is
                 * ambiguous.
                 */
                // @ts-ignore
                class Bias extends java.lang.Object {
                    /**
                     * Indicates to bias toward the next character
                     * in the model.
                     */
                    // @ts-ignore
                    public static readonly Forward: javax.swing.text.Position.Bias
                    /**
                     * Indicates a bias toward the previous character
                     * in the model.
                     */
                    // @ts-ignore
                    public static readonly Backward: javax.swing.text.Position.Bias
                    /**
                     * string representation
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
