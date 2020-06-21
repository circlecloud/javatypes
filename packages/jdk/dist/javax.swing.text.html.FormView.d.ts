declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Component decorator that implements the view interface
                 * for form elements, &lt;input&gt;, &lt;textarea&gt;,
                 * and &lt;select&gt;.  The model for the component is stored
                 * as an attribute of the the element (using StyleConstants.ModelAttribute),
                 * and is used to build the component of the view.  The type
                 * of the model is assumed to of the type that would be set by
                 * <code>HTMLDocument.HTMLReader.FormAction</code>.  If there are
                 * multiple views mapped over the document, they will share the
                 * embedded component models.
                 * <p>
                 * The following table shows what components get built
                 * by this view.
                 * <table summary="shows what components get built by this view">
                 * <tr>
                 * <th>Element Type</th>
                 * <th>Component built</th>
                 * </tr>
                 * <tr>
                 * <td>input, type button</td>
                 * <td>JButton</td>
                 * </tr>
                 * <tr>
                 * <td>input, type checkbox</td>
                 * <td>JCheckBox</td>
                 * </tr>
                 * <tr>
                 * <td>input, type image</td>
                 * <td>JButton</td>
                 * </tr>
                 * <tr>
                 * <td>input, type password</td>
                 * <td>JPasswordField</td>
                 * </tr>
                 * <tr>
                 * <td>input, type radio</td>
                 * <td>JRadioButton</td>
                 * </tr>
                 * <tr>
                 * <td>input, type reset</td>
                 * <td>JButton</td>
                 * </tr>
                 * <tr>
                 * <td>input, type submit</td>
                 * <td>JButton</td>
                 * </tr>
                 * <tr>
                 * <td>input, type text</td>
                 * <td>JTextField</td>
                 * </tr>
                 * <tr>
                 * <td>select, size &gt; 1 or multiple attribute defined</td>
                 * <td>JList in a JScrollPane</td>
                 * </tr>
                 * <tr>
                 * <td>select, size unspecified or 1</td>
                 * <td>JComboBox</td>
                 * </tr>
                 * <tr>
                 * <td>textarea</td>
                 * <td>JTextArea in a JScrollPane</td>
                 * </tr>
                 * <tr>
                 * <td>input, type file</td>
                 * <td>JTextField</td>
                 * </tr>
                 * </table>
                 * @author Timothy Prinzing
                 * @author Sunita Mani
                 */
                // @ts-ignore
                class FormView extends javax.swing.text.ComponentView implements java.awt.event.ActionListener {
                    /**
                     * Creates a new FormView object.
                     * @param elem the element to decorate
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * If a value attribute is not specified for a FORM input element
                     * of type "submit", then this default string is used.
                     * @deprecated As of 1.3, value now comes from UIManager property
                     *              FormView.submitButtonText
                     */
                    // @ts-ignore
                    public static readonly SUBMIT: java.lang.String | string
                    /**
                     * If a value attribute is not specified for a FORM input element
                     * of type "reset", then this default string is used.
                     * @deprecated As of 1.3, value comes from UIManager UIManager property
                     *              FormView.resetButtonText
                     */
                    // @ts-ignore
                    public static readonly RESET: java.lang.String | string
                    /**
                     * Create the component.  This is basically a
                     * big switch statement based upon the tag type
                     * and html attributes of the associated element.
                     */
                    // @ts-ignore
                    createComponent(): java.awt.Component
                    /**
                     * Determines the maximum span for this view along an
                     * axis. For certain components, the maximum and preferred span are the
                     * same. For others this will return the value
                     * returned by Component.getMaximumSize along the
                     * axis of interest.
                     * @param axis may be either View.X_AXIS or View.Y_AXIS
                     * @return the span the view would like to be rendered into &gt;= 0.
                     *            Typically the view is told to render into the span
                     *            that is returned, although there is no guarantee.
                     *            The parent may choose to resize or break the view.
                     * @exception IllegalArgumentException for an invalid axis
                     */
                    // @ts-ignore
                    public getMaximumSpan(axis: number /*int*/): number /*float*/
                    /**
                     * Responsible for processing the ActionEvent.
                     * If the element associated with the FormView,
                     * has a type of "submit", "reset", "text" or "password"
                     * then the action is processed.  In the case of a "submit"
                     * the form is submitted.  In the case of a "reset"
                     * the form is reset to its original state.
                     * In the case of "text" or "password", if the
                     * element is the last one of type "text" or "password",
                     * the form is submitted.  Otherwise, focus is transferred
                     * to the next component in the form.
                     * @param evt the ActionEvent.
                     */
                    // @ts-ignore
                    public actionPerformed(evt: java.awt.event.ActionEvent): void
                    /**
                     * This method is responsible for submitting the form data.
                     * A thread is forked to undertake the submission.
                     */
                    // @ts-ignore
                    submitData(data: java.lang.String | string): void
                    /**
                     * This method is called to submit a form in response
                     * to a click on an image -- an &lt;INPUT&gt; form
                     * element of type "image".
                     * @param imageData the mouse click coordinates.
                     */
                    // @ts-ignore
                    imageSubmit(imageData: java.lang.String | string): void
                }
            }
        }
    }
}
