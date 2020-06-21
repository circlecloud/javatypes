declare namespace javax {
    namespace swing {
        namespace text {
            namespace JTextComponent {
                /**
                 * Represents a drop location for <code>JTextComponent</code>s.
                 * @see #getDropLocation
                 * @since 1.6
                 */
                // @ts-ignore
                class DropLocation extends javax.swing.TransferHandler.DropLocation {
                    /**
                     * Returns the index where dropped data should be inserted into the
                     * associated component. This index represents a position between
                     * characters, as would be interpreted by a caret.
                     * @return the drop index
                     */
                    // @ts-ignore
                    public getIndex(): number /*int*/
                    /**
                     * Returns the bias for the drop index.
                     * @return the drop bias
                     */
                    // @ts-ignore
                    public getBias(): javax.swing.text.Position.Bias
                    /**
                     * Returns a string representation of this drop location.
                     * This method is intended to be used for debugging purposes,
                     * and the content and format of the returned string may vary
                     * between implementations.
                     * @return a string representation of this drop location
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
