declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link TextComponent}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface TextComponentPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Sets if the text component should be editable or not.
                 * @param editable {#code true} for editable text components,
                 *         {@code false} for non-editable text components
                 * @see TextComponent#setEditable(boolean)
                 */
                // @ts-ignore
                setEditable(editable: boolean): void
                /**
                 * Returns the current content of the text component.
                 * @return the current content of the text component
                 * @see TextComponent#getText()
                 */
                // @ts-ignore
                getText(): java.lang.String
                /**
                 * Sets the content for the text component.
                 * @param text the content to set
                 * @see TextComponent#setText(String)
                 */
                // @ts-ignore
                setText(text: string): void
                /**
                 * Returns the start index of the current selection.
                 * @return the start index of the current selection
                 * @see TextComponent#getSelectionStart()
                 */
                // @ts-ignore
                getSelectionStart(): int
                /**
                 * Returns the end index of the current selection.
                 * @return the end index of the current selection
                 * @see TextComponent#getSelectionEnd()
                 */
                // @ts-ignore
                getSelectionEnd(): int
                /**
                 * Selects an area of the text component.
                 * @param selStart the start index of the new selection
                 * @param selEnd the end index of the new selection
                 * @see TextComponent#select(int, int)
                 */
                // @ts-ignore
                select(selStart: number /*int*/, selEnd: number /*int*/): void
                /**
                 * Sets the caret position of the text component.
                 * @param pos the caret position to set
                 * @see TextComponent#setCaretPosition(int)
                 */
                // @ts-ignore
                setCaretPosition(pos: number /*int*/): void
                /**
                 * Returns the current caret position.
                 * @return the current caret position
                 * @see TextComponent#getCaretPosition()
                 */
                // @ts-ignore
                getCaretPosition(): int
                /**
                 * Returns the input method requests.
                 * @return the input method requests
                 */
                // @ts-ignore
                getInputMethodRequests(): java.awt.im.InputMethodRequests
            }
        }
    }
}
