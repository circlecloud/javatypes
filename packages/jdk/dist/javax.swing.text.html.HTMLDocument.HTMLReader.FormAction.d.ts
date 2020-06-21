declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLDocument {
                    namespace HTMLReader {
                        /**
                         * Action to support forms by building all of the elements
                         * used to represent form controls.  This will process
                         * the &lt;INPUT&gt;, &lt;TEXTAREA&gt;, &lt;SELECT&gt;,
                         * and &lt;OPTION&gt; tags.  The element created by
                         * this action is expected to have the attribute
                         * <code>StyleConstants.ModelAttribute</code> set to
                         * the model that holds the state for the form control.
                         * This enables multiple views, and allows document to
                         * be iterated over picking up the data of the form.
                         * The following are the model assignments for the
                         * various type of form elements.
                         * <table summary="model assignments for the various types of form elements">
                         * <tr>
                         * <th>Element Type
                         * <th>Model Type
                         * <tr>
                         * <td>input, type button
                         * <td>{@link DefaultButtonModel}
                         * <tr>
                         * <td>input, type checkbox
                         * <td>{@link javax.swing.JToggleButton.ToggleButtonModel}
                         * <tr>
                         * <td>input, type image
                         * <td>{@link DefaultButtonModel}
                         * <tr>
                         * <td>input, type password
                         * <td>{@link PlainDocument}
                         * <tr>
                         * <td>input, type radio
                         * <td>{@link javax.swing.JToggleButton.ToggleButtonModel}
                         * <tr>
                         * <td>input, type reset
                         * <td>{@link DefaultButtonModel}
                         * <tr>
                         * <td>input, type submit
                         * <td>{@link DefaultButtonModel}
                         * <tr>
                         * <td>input, type text or type is null.
                         * <td>{@link PlainDocument}
                         * <tr>
                         * <td>select
                         * <td>{@link DefaultComboBoxModel} or an {@link DefaultListModel}, with an item type of Option
                         * <tr>
                         * <td>textarea
                         * <td>{@link PlainDocument}
                         * </table>
                         */
                        // @ts-ignore
                        class FormAction extends javax.swing.text.html.HTMLDocument.HTMLReader.SpecialAction {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public start(t: javax.swing.text.html.HTML.Tag, attr: javax.swing.text.MutableAttributeSet): void
                            // @ts-ignore
                            public end(t: javax.swing.text.html.HTML.Tag): void
                        }
                    }
                }
            }
        }
    }
}
