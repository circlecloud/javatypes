declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * This is the set of things needed by a text component
             * to be a reasonably functioning editor for some <em>type</em>
             * of text document.  This implementation provides a default
             * implementation which treats text as styled text and
             * provides a minimal set of actions for editing styled text.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class StyledEditorKit extends javax.swing.text.DefaultEditorKit {
                /**
                 * Creates a new EditorKit used for styled documents.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the input attributes for the pane.  When
                 * the caret moves and there is no selection, the
                 * input attributes are automatically mutated to
                 * reflect the character attributes of the current
                 * caret location.  The styled editing actions
                 * use the input attributes to carry out their
                 * actions.
                 * @return the attribute set
                 */
                // @ts-ignore
                getInputAttributes(): javax.swing.text.MutableAttributeSet
                /**
                 * Fetches the element representing the current
                 * run of character attributes for the caret.
                 * @return the element
                 */
                // @ts-ignore
                getCharacterAttributeRun(): javax.swing.text.Element
                /**
                 * Fetches the command list for the editor.  This is
                 * the list of commands supported by the superclass
                 * augmented by the collection of commands defined
                 * locally for style operations.
                 * @return the command list
                 */
                // @ts-ignore
                getActions(): javax.swing.Action[]
                /**
                 * Creates an uninitialized text storage model
                 * that is appropriate for this type of editor.
                 * @return the model
                 */
                // @ts-ignore
                createDefaultDocument(): javax.swing.text.Document
                /**
                 * Called when the kit is being installed into
                 * a JEditorPane.
                 * @param c the JEditorPane
                 */
                // @ts-ignore
                install(c: javax.swing.JEditorPane): void
                /**
                 * Called when the kit is being removed from the
                 * JEditorPane.  This is used to unregister any
                 * listeners that were attached.
                 * @param c the JEditorPane
                 */
                // @ts-ignore
                deinstall(c: javax.swing.JEditorPane): void
                /**
                 * Fetches a factory that is suitable for producing
                 * views of any models that are produced by this
                 * kit.  This is implemented to return View implementations
                 * for the following kinds of elements:
                 * <ul>
                 * <li>AbstractDocument.ContentElementName
                 * <li>AbstractDocument.ParagraphElementName
                 * <li>AbstractDocument.SectionElementName
                 * <li>StyleConstants.ComponentElementName
                 * <li>StyleConstants.IconElementName
                 * </ul>
                 * @return the factory
                 */
                // @ts-ignore
                getViewFactory(): javax.swing.text.ViewFactory
                /**
                 * Creates a copy of the editor kit.
                 * @return the copy
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Copies the key/values in <code>element</code>s AttributeSet into
                 * <code>set</code>. This does not copy component, icon, or element
                 * names attributes. Subclasses may wish to refine what is and what
                 * isn't copied here. But be sure to first remove all the attributes that
                 * are in <code>set</code>.<p>
                 * This is called anytime the caret moves over a different location.
                 */
                // @ts-ignore
                createInputAttributes(element: javax.swing.text.Element, set: javax.swing.text.MutableAttributeSet): void
            }
        }
    }
}
