declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * FormSubmitEvent is used to notify interested
                 * parties that a form was submitted.
                 * @since 1.5
                 * @author Denis Sharypov
                 */
                // @ts-ignore
                class FormSubmitEvent extends javax.swing.text.html.HTMLFrameHyperlinkEvent {
                    /**
                     * Gets the form method type.
                     * @return the form method type, either
                     *  <code>Method.GET</code> or <code>Method.POST</code>.
                     */
                    // @ts-ignore
                    getMethod(): javax.swing.text.html.FormSubmitEvent.MethodType
                    /**
                     * Gets the form submission data.
                     * @return the string representing the form submission data.
                     */
                    // @ts-ignore
                    getData(): java.lang.String
                }
            }
        }
    }
}
