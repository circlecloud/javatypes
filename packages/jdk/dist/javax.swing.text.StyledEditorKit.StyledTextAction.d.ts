declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyledEditorKit {
                /**
                 * An action that assumes it's being fired on a JEditorPane
                 * with a StyledEditorKit (or subclass) installed.  This has
                 * some convenience methods for causing character or paragraph
                 * level attribute changes.  The convenience methods will
                 * throw an IllegalArgumentException if the assumption of
                 * a StyledDocument, a JEditorPane, or a StyledEditorKit
                 * fail to be true.
                 * <p>
                 * The component that gets acted upon by the action
                 * will be the source of the ActionEvent if the source
                 * can be narrowed to a JEditorPane type.  If the source
                 * can't be narrowed, the most recently focused text
                 * component is changed.  If neither of these are the
                 * case, the action cannot be performed.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 */
                // @ts-ignore
                abstract class StyledTextAction extends javax.swing.text.TextAction {
                    /**
                     * Creates a new StyledTextAction from a string action name.
                     * @param nm the name of the action
                     */
                    // @ts-ignore
                    constructor(nm: java.lang.String | string)
                    /**
                     * Gets the target editor for an action.
                     * @param e the action event
                     * @return the editor
                     */
                    // @ts-ignore
                    getEditor(e: java.awt.event.ActionEvent): javax.swing.JEditorPane
                    /**
                     * Gets the document associated with an editor pane.
                     * @param e the editor
                     * @return the document
                     * @exception IllegalArgumentException for the wrong document type
                     */
                    // @ts-ignore
                    getStyledDocument(e: javax.swing.JEditorPane): javax.swing.text.StyledDocument
                    /**
                     * Gets the editor kit associated with an editor pane.
                     * @param e the editor pane
                     * @return the kit
                     * @exception IllegalArgumentException for the wrong document type
                     */
                    // @ts-ignore
                    getStyledEditorKit(e: javax.swing.JEditorPane): javax.swing.text.StyledEditorKit
                    /**
                     * Applies the given attributes to character
                     * content.  If there is a selection, the attributes
                     * are applied to the selection range.  If there
                     * is no selection, the attributes are applied to
                     * the input attribute set which defines the attributes
                     * for any new text that gets inserted.
                     * @param editor the editor
                     * @param attr the attributes
                     * @param replace   if true, then replace the existing attributes first
                     */
                    // @ts-ignore
                    setCharacterAttributes(editor: javax.swing.JEditorPane, attr: javax.swing.text.AttributeSet, replace: boolean): void
                    /**
                     * Applies the given attributes to paragraphs.  If
                     * there is a selection, the attributes are applied
                     * to the paragraphs that intersect the selection.
                     * if there is no selection, the attributes are applied
                     * to the paragraph at the current caret position.
                     * @param editor the editor
                     * @param attr the attributes
                     * @param replace   if true, replace the existing attributes first
                     */
                    // @ts-ignore
                    setParagraphAttributes(editor: javax.swing.JEditorPane, attr: javax.swing.text.AttributeSet, replace: boolean): void
                }
            }
        }
    }
}
