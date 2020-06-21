declare namespace javax {
    namespace swing {
        /**
         * <code>JOptionPane</code> makes it easy to pop up a standard dialog box that
         * prompts users for a value or informs them of something.
         * For information about using <code>JOptionPane</code>, see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/dialog.html">How to Make Dialogs</a>,
         * a section in <em>The Java Tutorial</em>.
         * <p>
         * While the <code>JOptionPane</code>
         * class may appear complex because of the large number of methods, almost
         * all uses of this class are one-line calls to one of the static
         * <code>showXxxDialog</code> methods shown below:
         * <blockquote>
         * <table border=1 summary="Common JOptionPane method names and their descriptions">
         * <tr>
         * <th>Method Name</th>
         * <th>Description</th>
         * </tr>
         * <tr>
         * <td>showConfirmDialog</td>
         * <td>Asks a confirming question, like yes/no/cancel.</td>
         * </tr>
         * <tr>
         * <td>showInputDialog</td>
         * <td>Prompt for some input.</td>
         * </tr>
         * <tr>
         * <td>showMessageDialog</td>
         * <td>Tell the user about something that has happened.</td>
         * </tr>
         * <tr>
         * <td>showOptionDialog</td>
         * <td>The Grand Unification of the above three.</td>
         * </tr>
         * </table>
         * </blockquote>
         * Each of these methods also comes in a <code>showInternalXXX</code>
         * flavor, which uses an internal frame to hold the dialog box (see
         * {@link JInternalFrame}).
         * Multiple convenience methods have also been defined -- overloaded
         * versions of the basic methods that use different parameter lists.
         * <p>
         * All dialogs are modal. Each <code>showXxxDialog</code> method blocks
         * the caller until the user's interaction is complete.
         * <table cellspacing=6 cellpadding=4 border=0 style="float:right" summary="layout">
         * <tr>
         * <td style="background-color:#FFe0d0" rowspan=2>icon</td>
         * <td style="background-color:#FFe0d0">message</td>
         * </tr>
         * <tr>
         * <td style="background-color:#FFe0d0">input value</td>
         * </tr>
         * <tr>
         * <td style="background-color:#FFe0d0" colspan=2>option buttons</td>
         * </tr>
         * </table>
         * The basic appearance of one of these dialog boxes is generally
         * similar to the picture at the right, although the various
         * look-and-feels are
         * ultimately responsible for the final result.  In particular, the
         * look-and-feels will adjust the layout to accommodate the option pane's
         * <code>ComponentOrientation</code> property.
         * <br style="clear:all">
         * <p>
         * <b>Parameters:</b><br>
         * The parameters to these methods follow consistent patterns:
         * <blockquote>
         * <dl compact>
         * <dt>parentComponent<dd>
         * Defines the <code>Component</code> that is to be the parent of this
         * dialog box.
         * It is used in two ways: the <code>Frame</code> that contains
         * it is used as the <code>Frame</code>
         * parent for the dialog box, and its screen coordinates are used in
         * the placement of the dialog box. In general, the dialog box is placed
         * just below the component. This parameter may be <code>null</code>,
         * in which case a default <code>Frame</code> is used as the parent,
         * and the dialog will be
         * centered on the screen (depending on the {@literal L&F}).
         * <dt><a name=message>message</a><dd>
         * A descriptive message to be placed in the dialog box.
         * In the most common usage, message is just a <code>String</code> or
         * <code>String</code> constant.
         * However, the type of this parameter is actually <code>Object</code>. Its
         * interpretation depends on its type:
         * <dl compact>
         * <dt>Object[]<dd>An array of objects is interpreted as a series of
         * messages (one per object) arranged in a vertical stack.
         * The interpretation is recursive -- each object in the
         * array is interpreted according to its type.
         * <dt>Component<dd>The <code>Component</code> is displayed in the dialog.
         * <dt>Icon<dd>The <code>Icon</code> is wrapped in a <code>JLabel</code>
         * and displayed in the dialog.
         * <dt>others<dd>The object is converted to a <code>String</code> by calling
         * its <code>toString</code> method. The result is wrapped in a
         * <code>JLabel</code> and displayed.
         * </dl>
         * <dt>messageType<dd>Defines the style of the message. The Look and Feel
         * manager may lay out the dialog differently depending on this value, and
         * will often provide a default icon. The possible values are:
         * <ul>
         * <li><code>ERROR_MESSAGE</code>
         * <li><code>INFORMATION_MESSAGE</code>
         * <li><code>WARNING_MESSAGE</code>
         * <li><code>QUESTION_MESSAGE</code>
         * <li><code>PLAIN_MESSAGE</code>
         * </ul>
         * <dt>optionType<dd>Defines the set of option buttons that appear at
         * the bottom of the dialog box:
         * <ul>
         * <li><code>DEFAULT_OPTION</code>
         * <li><code>YES_NO_OPTION</code>
         * <li><code>YES_NO_CANCEL_OPTION</code>
         * <li><code>OK_CANCEL_OPTION</code>
         * </ul>
         * You aren't limited to this set of option buttons.  You can provide any
         * buttons you want using the options parameter.
         * <dt>options<dd>A more detailed description of the set of option buttons
         * that will appear at the bottom of the dialog box.
         * The usual value for the options parameter is an array of
         * <code>String</code>s. But
         * the parameter type is an array of <code>Objects</code>.
         * A button is created for each object depending on its type:
         * <dl compact>
         * <dt>Component<dd>The component is added to the button row directly.
         * <dt>Icon<dd>A <code>JButton</code> is created with this as its label.
         * <dt>other<dd>The <code>Object</code> is converted to a string using its
         * <code>toString</code> method and the result is used to
         * label a <code>JButton</code>.
         * </dl>
         * <dt>icon<dd>A decorative icon to be placed in the dialog box. A default
         * value for this is determined by the <code>messageType</code> parameter.
         * <dt>title<dd>The title for the dialog box.
         * <dt>initialValue<dd>The default selection (input value).
         * </dl>
         * </blockquote>
         * <p>
         * When the selection is changed, <code>setValue</code> is invoked,
         * which generates a <code>PropertyChangeEvent</code>.
         * <p>
         * If a <code>JOptionPane</code> has configured to all input
         * <code>setWantsInput</code>
         * the bound property <code>JOptionPane.INPUT_VALUE_PROPERTY</code>
         * can also be listened
         * to, to determine when the user has input or selected a value.
         * <p>
         * When one of the <code>showXxxDialog</code> methods returns an integer,
         * the possible values are:
         * <ul>
         * <li><code>YES_OPTION</code>
         * <li><code>NO_OPTION</code>
         * <li><code>CANCEL_OPTION</code>
         * <li><code>OK_OPTION</code>
         * <li><code>CLOSED_OPTION</code>
         * </ul>
         * <b>Examples:</b>
         * <dl>
         * <dt>Show an error dialog that displays the message, 'alert':
         * <dd><code>
         * JOptionPane.showMessageDialog(null, "alert", "alert", JOptionPane.ERROR_MESSAGE);
         * </code>
         * <dt>Show an internal information dialog with the message, 'information':
         * <dd><pre>
         * JOptionPane.showInternalMessageDialog(frame, "information",
         * "information", JOptionPane.INFORMATION_MESSAGE);
         * </pre>
         * <dt>Show an information panel with the options yes/no and message 'choose one':
         * <dd><pre>JOptionPane.showConfirmDialog(null,
         * "choose one", "choose one", JOptionPane.YES_NO_OPTION);
         * </pre>
         * <dt>Show an internal information dialog with the options yes/no/cancel and
         * message 'please choose one' and title information:
         * <dd><pre>JOptionPane.showInternalConfirmDialog(frame,
         * "please choose one", "information",
         * JOptionPane.YES_NO_CANCEL_OPTION, JOptionPane.INFORMATION_MESSAGE);
         * </pre>
         * <dt>Show a warning dialog with the options OK, CANCEL, title 'Warning', and
         * message 'Click OK to continue':
         * <dd><pre>
         * Object[] options = { "OK", "CANCEL" };
         * JOptionPane.showOptionDialog(null, "Click OK to continue", "Warning",
         * JOptionPane.DEFAULT_OPTION, JOptionPane.WARNING_MESSAGE,
         * null, options, options[0]);
         * </pre>
         * <dt>Show a dialog asking the user to type in a String:
         * <dd><code>
         * String inputValue = JOptionPane.showInputDialog("Please input a value");
         * </code>
         * <dt>Show a dialog asking the user to select a String:
         * <dd><pre>
         * Object[] possibleValues = { "First", "Second", "Third" };<br>
         * Object selectedValue = JOptionPane.showInputDialog(null,
         * "Choose one", "Input",
         * JOptionPane.INFORMATION_MESSAGE, null,
         * possibleValues, possibleValues[0]);
         * </pre><p>
         * </dl>
         * <b>Direct Use:</b><br>
         * To create and use an <code>JOptionPane</code> directly, the
         * standard pattern is roughly as follows:
         * <pre>
         * JOptionPane pane = new JOptionPane(<i>arguments</i>);
         * pane.set<i>.Xxxx(...); // Configure</i>
         * JDialog dialog = pane.createDialog(<i>parentComponent, title</i>);
         * dialog.show();
         * Object selectedValue = pane.getValue();
         * if(selectedValue == null)
         * return CLOSED_OPTION;
         * <i>//If there is <b>not</b> an array of option buttons:</i>
         * if(options == null) {
         * if(selectedValue instanceof Integer)
         * return ((Integer)selectedValue).intValue();
         * return CLOSED_OPTION;
         * }
         * <i>//If there is an array of option buttons:</i>
         * for(int counter = 0, maxCounter = options.length;
         * counter &lt; maxCounter; counter++) {
         * if(options[counter].equals(selectedValue))
         * return counter;
         * }
         * return CLOSED_OPTION;
         * </pre>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see JInternalFrame
         * @beaninfo attribute: isContainer true
         *     description: A component which implements standard dialog box controls.
         * @author James Gosling
         * @author Scott Violet
         */
        // @ts-ignore
        class JOptionPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            /**
             * Creates a <code>JOptionPane</code> with a test message.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a instance of <code>JOptionPane</code> to display a
             * message using the
             * plain-message message type and the default options delivered by
             * the UI.
             * @param message the <code>Object</code> to display
             */
            // @ts-ignore
            constructor(message: java.lang.Object | any)
            /**
             * Creates an instance of <code>JOptionPane</code> to display a message
             * with the specified message type and the default options,
             * @param message the <code>Object</code> to display
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             */
            // @ts-ignore
            constructor(message: java.lang.Object | any, messageType: number /*int*/)
            /**
             * Creates an instance of <code>JOptionPane</code> to display a message
             * with the specified message type and options.
             * @param message the <code>Object</code> to display
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param optionType the options to display in the pane:
             *                   <code>DEFAULT_OPTION</code>, <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   <code>OK_CANCEL_OPTION</code>
             */
            // @ts-ignore
            constructor(message: java.lang.Object | any, messageType: number /*int*/, optionType: number /*int*/)
            /**
             * Creates an instance of <code>JOptionPane</code> to display a message
             * with the specified message type, options, and icon.
             * @param message the <code>Object</code> to display
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param optionType the options to display in the pane:
             *                   <code>DEFAULT_OPTION</code>, <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   <code>OK_CANCEL_OPTION</code>
             * @param icon the <code>Icon</code> image to display
             */
            // @ts-ignore
            constructor(message: java.lang.Object | any, messageType: number /*int*/, optionType: number /*int*/, icon: javax.swing.Icon)
            /**
             * Creates an instance of <code>JOptionPane</code> to display a message
             * with the specified message type, icon, and options.
             * None of the options is initially selected.
             * <p>
             * The options objects should contain either instances of
             * <code>Component</code>s, (which are added directly) or
             * <code>Strings</code> (which are wrapped in a <code>JButton</code>).
             * If you provide <code>Component</code>s, you must ensure that when the
             * <code>Component</code> is clicked it messages <code>setValue</code>
             * in the created <code>JOptionPane</code>.
             * @param message the <code>Object</code> to display
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param optionType the options to display in the pane:
             *                   <code>DEFAULT_OPTION</code>,
             *                   <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   <code>OK_CANCEL_OPTION</code>
             * @param icon the <code>Icon</code> image to display
             * @param options  the choices the user can select
             */
            // @ts-ignore
            constructor(message: java.lang.Object | any, messageType: number /*int*/, optionType: number /*int*/, icon: javax.swing.Icon, options: java.lang.Object[] | any[])
            /**
             * Creates an instance of <code>JOptionPane</code> to display a message
             * with the specified message type, icon, and options, with the
             * initially-selected option specified.
             * @param message the <code>Object</code> to display
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param optionType the options to display in the pane:
             *                   <code>DEFAULT_OPTION</code>,
             *                   <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   <code>OK_CANCEL_OPTION</code>
             * @param icon the Icon image to display
             * @param options  the choices the user can select
             * @param initialValue the choice that is initially selected; if
             *                   <code>null</code>, then nothing will be initially selected;
             *                   only meaningful if <code>options</code> is used
             */
            // @ts-ignore
            constructor(message: java.lang.Object | any, messageType: number /*int*/, optionType: number /*int*/, icon: javax.swing.Icon, options: java.lang.Object[] | any[], initialValue: java.lang.Object | any)
            /**
             * Indicates that the user has not yet selected a value.
             */
            // @ts-ignore
            public static readonly UNINITIALIZED_VALUE: java.lang.Object | any
            /**
             * Type meaning Look and Feel should not supply any options -- only
             * use the options from the <code>JOptionPane</code>.
             */
            // @ts-ignore
            public static readonly DEFAULT_OPTION: number /*int*/
            /**
             * Type used for <code>showConfirmDialog</code>.
             */
            // @ts-ignore
            public static readonly YES_NO_OPTION: number /*int*/
            /**
             * Type used for <code>showConfirmDialog</code>.
             */
            // @ts-ignore
            public static readonly YES_NO_CANCEL_OPTION: number /*int*/
            /**
             * Type used for <code>showConfirmDialog</code>.
             */
            // @ts-ignore
            public static readonly OK_CANCEL_OPTION: number /*int*/
            /**
             * Return value from class method if YES is chosen.
             */
            // @ts-ignore
            public static readonly YES_OPTION: number /*int*/
            /**
             * Return value from class method if NO is chosen.
             */
            // @ts-ignore
            public static readonly NO_OPTION: number /*int*/
            /**
             * Return value from class method if CANCEL is chosen.
             */
            // @ts-ignore
            public static readonly CANCEL_OPTION: number /*int*/
            /**
             * Return value form class method if OK is chosen.
             */
            // @ts-ignore
            public static readonly OK_OPTION: number /*int*/
            /**
             * Return value from class method if user closes window without selecting
             * anything, more than likely this should be treated as either a
             * <code>CANCEL_OPTION</code> or <code>NO_OPTION</code>.
             */
            // @ts-ignore
            public static readonly CLOSED_OPTION: number /*int*/
            /**
             * Used for error messages.
             */
            // @ts-ignore
            public static readonly ERROR_MESSAGE: number /*int*/
            /**
             * Used for information messages.
             */
            // @ts-ignore
            public static readonly INFORMATION_MESSAGE: number /*int*/
            /**
             * Used for warning messages.
             */
            // @ts-ignore
            public static readonly WARNING_MESSAGE: number /*int*/
            /**
             * Used for questions.
             */
            // @ts-ignore
            public static readonly QUESTION_MESSAGE: number /*int*/
            /**
             * No icon is used.
             */
            // @ts-ignore
            public static readonly PLAIN_MESSAGE: number /*int*/
            /**
             * Bound property name for <code>icon</code>.
             */
            // @ts-ignore
            public static readonly ICON_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>message</code>.
             */
            // @ts-ignore
            public static readonly MESSAGE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>value</code>.
             */
            // @ts-ignore
            public static readonly VALUE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>option</code>.
             */
            // @ts-ignore
            public static readonly OPTIONS_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>initialValue</code>.
             */
            // @ts-ignore
            public static readonly INITIAL_VALUE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>type</code>.
             */
            // @ts-ignore
            public static readonly MESSAGE_TYPE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>optionType</code>.
             */
            // @ts-ignore
            public static readonly OPTION_TYPE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>selectionValues</code>.
             */
            // @ts-ignore
            public static readonly SELECTION_VALUES_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>initialSelectionValue</code>.
             */
            // @ts-ignore
            public static readonly INITIAL_SELECTION_VALUE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>inputValue</code>.
             */
            // @ts-ignore
            public static readonly INPUT_VALUE_PROPERTY: java.lang.String | string
            /**
             * Bound property name for <code>wantsInput</code>.
             */
            // @ts-ignore
            public static readonly WANTS_INPUT_PROPERTY: java.lang.String | string
            /**
             * Icon used in pane.
             */
            // @ts-ignore
            icon: javax.swing.Icon
            /**
             * Message to display.
             */
            // @ts-ignore
            message: java.lang.Object | any
            /**
             * Options to display to the user.
             */
            // @ts-ignore
            options: java.lang.Object[] | any[]
            /**
             * Value that should be initially selected in <code>options</code>.
             */
            // @ts-ignore
            initialValue: java.lang.Object | any
            /**
             * Message type.
             */
            // @ts-ignore
            messageType: number /*int*/
            /**
             * Option type, one of <code>DEFAULT_OPTION</code>,
             * <code>YES_NO_OPTION</code>,
             * <code>YES_NO_CANCEL_OPTION</code> or
             * <code>OK_CANCEL_OPTION</code>.
             */
            // @ts-ignore
            optionType: number /*int*/
            /**
             * Currently selected value, will be a valid option, or
             * <code>UNINITIALIZED_VALUE</code> or <code>null</code>.
             */
            // @ts-ignore
            value: java.lang.Object | any
            /**
             * Array of values the user can choose from. Look and feel will
             * provide the UI component to choose this from.
             */
            // @ts-ignore
            selectionValues: java.lang.Object[] | any[]
            /**
             * Value the user has input.
             */
            // @ts-ignore
            inputValue: java.lang.Object | any
            /**
             * Initial value to select in <code>selectionValues</code>.
             */
            // @ts-ignore
            initialSelectionValue: java.lang.Object | any
            /**
             * If true, a UI widget will be provided to the user to get input.
             */
            // @ts-ignore
            wantsInput: boolean
            /**
             * Shows a question-message dialog requesting input from the user. The
             * dialog uses the default frame, which usually means it is centered on
             * the screen.
             * @param message the <code>Object</code> to display
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showInputDialog(message: java.lang.Object | any): string
            /**
             * Shows a question-message dialog requesting input from the user, with
             * the input value initialized to <code>initialSelectionValue</code>. The
             * dialog uses the default frame, which usually means it is centered on
             * the screen.
             * @param message the <code>Object</code> to display
             * @param initialSelectionValue the value used to initialize the input
             *                  field
             * @since 1.4
             */
            // @ts-ignore
            public static showInputDialog(message: java.lang.Object | any, initialSelectionValue: java.lang.Object | any): string
            /**
             * Shows a question-message dialog requesting input from the user
             * parented to <code>parentComponent</code>.
             * The dialog is displayed on top of the <code>Component</code>'s
             * frame, and is usually positioned below the <code>Component</code>.
             * @param parentComponent  the parent <code>Component</code> for the
             *           dialog
             * @param message  the <code>Object</code> to display
             * @exception HeadlessException if
             *     <code>GraphicsEnvironment.isHeadless</code> returns
             *     <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any): string
            /**
             * Shows a question-message dialog requesting input from the user and
             * parented to <code>parentComponent</code>. The input value will be
             * initialized to <code>initialSelectionValue</code>.
             * The dialog is displayed on top of the <code>Component</code>'s
             * frame, and is usually positioned below the <code>Component</code>.
             * @param parentComponent  the parent <code>Component</code> for the
             *           dialog
             * @param message the <code>Object</code> to display
             * @param initialSelectionValue the value used to initialize the input
             *                  field
             * @since 1.4
             */
            // @ts-ignore
            public static showInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, initialSelectionValue: java.lang.Object | any): string
            /**
             * Shows a dialog requesting input from the user parented to
             * <code>parentComponent</code> with the dialog having the title
             * <code>title</code> and message type <code>messageType</code>.
             * @param parentComponent  the parent <code>Component</code> for the
             *                   dialog
             * @param message  the <code>Object</code> to display
             * @param title    the <code>String</code> to display in the dialog
             *                   title bar
             * @param messageType the type of message that is to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/): string
            /**
             * Prompts the user for input in a blocking dialog where the
             * initial selection, possible selections, and all other options can
             * be specified. The user will able to choose from
             * <code>selectionValues</code>, where <code>null</code> implies the
             * user can input
             * whatever they wish, usually by means of a <code>JTextField</code>.
             * <code>initialSelectionValue</code> is the initial value to prompt
             * the user with. It is up to the UI to decide how best to represent
             * the <code>selectionValues</code>, but usually a
             * <code>JComboBox</code>, <code>JList</code>, or
             * <code>JTextField</code> will be used.
             * @param parentComponent  the parent <code>Component</code> for the
             *                   dialog
             * @param message  the <code>Object</code> to display
             * @param title    the <code>String</code> to display in the
             *                   dialog title bar
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param icon     the <code>Icon</code> image to display
             * @param selectionValues an array of <code>Object</code>s that
             *                   gives the possible selections
             * @param initialSelectionValue the value used to initialize the input
             *                  field
             * @return user's input, or <code>null</code> meaning the user
             *                   canceled the input
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/, icon: javax.swing.Icon, selectionValues: java.lang.Object[] | any[], initialSelectionValue: java.lang.Object | any): any
            /**
             * Brings up an information-message dialog titled "Message".
             * @param parentComponent determines the <code>Frame</code> in
             *           which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showMessageDialog(parentComponent: java.awt.Component, message: java.lang.Object | any): void
            /**
             * Brings up a dialog that displays a message using a default
             * icon determined by the <code>messageType</code> parameter.
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showMessageDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/): void
            /**
             * Brings up a dialog displaying a message, specifying all parameters.
             * @param parentComponent determines the <code>Frame</code> in which the
             *                   dialog is displayed; if <code>null</code>,
             *                   or if the <code>parentComponent</code> has no
             *                   <code>Frame</code>, a
             *                   default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param icon      an icon to display in the dialog that helps the user
             *                   identify the kind of message that is being displayed
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showMessageDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/, icon: javax.swing.Icon): void
            /**
             * Brings up a dialog with the options <i>Yes</i>,
             * <i>No</i> and <i>Cancel</i>; with the
             * title, <b>Select an Option</b>.
             * @param parentComponent determines the <code>Frame</code> in which the
             *                   dialog is displayed; if <code>null</code>,
             *                   or if the <code>parentComponent</code> has no
             *                   <code>Frame</code>, a
             *                   default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @return an integer indicating the option selected by the user
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any): number /*int*/
            /**
             * Brings up a dialog where the number of choices is determined
             * by the <code>optionType</code> parameter.
             * @param parentComponent determines the <code>Frame</code> in which the
             *                   dialog is displayed; if <code>null</code>,
             *                   or if the <code>parentComponent</code> has no
             *                   <code>Frame</code>, a
             *                   default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param optionType an int designating the options available on the dialog:
             *                   <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   or <code>OK_CANCEL_OPTION</code>
             * @return an int indicating the option selected by the user
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/): number /*int*/
            /**
             * Brings up a dialog where the number of choices is determined
             * by the <code>optionType</code> parameter, where the
             * <code>messageType</code>
             * parameter determines the icon to display.
             * The <code>messageType</code> parameter is primarily used to supply
             * a default icon from the Look and Feel.
             * @param parentComponent determines the <code>Frame</code> in
             *                   which the dialog is displayed; if <code>null</code>,
             *                   or if the <code>parentComponent</code> has no
             *                   <code>Frame</code>, a
             *                   default <code>Frame</code> is used.
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param optionType an integer designating the options available
             *                    on the dialog: <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   or <code>OK_CANCEL_OPTION</code>
             * @param messageType an integer designating the kind of message this is;
             *                   primarily used to determine the icon from the pluggable
             *                   Look and Feel: <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @return an integer indicating the option selected by the user
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/, messageType: number /*int*/): number /*int*/
            /**
             * Brings up a dialog with a specified icon, where the number of
             * choices is determined by the <code>optionType</code> parameter.
             * The <code>messageType</code> parameter is primarily used to supply
             * a default icon from the look and feel.
             * @param parentComponent determines the <code>Frame</code> in which the
             *                   dialog is displayed; if <code>null</code>,
             *                   or if the <code>parentComponent</code> has no
             *                   <code>Frame</code>, a
             *                   default <code>Frame</code> is used
             * @param message   the Object to display
             * @param title     the title string for the dialog
             * @param optionType an int designating the options available on the dialog:
             *                   <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   or <code>OK_CANCEL_OPTION</code>
             * @param messageType an int designating the kind of message this is,
             *                   primarily used to determine the icon from the pluggable
             *                   Look and Feel: <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param icon      the icon to display in the dialog
             * @return an int indicating the option selected by the user
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/, messageType: number /*int*/, icon: javax.swing.Icon): number /*int*/
            /**
             * Brings up a dialog with a specified icon, where the initial
             * choice is determined by the <code>initialValue</code> parameter and
             * the number of choices is determined by the <code>optionType</code>
             * parameter.
             * <p>
             * If <code>optionType</code> is <code>YES_NO_OPTION</code>,
             * or <code>YES_NO_CANCEL_OPTION</code>
             * and the <code>options</code> parameter is <code>null</code>,
             * then the options are
             * supplied by the look and feel.
             * <p>
             * The <code>messageType</code> parameter is primarily used to supply
             * a default icon from the look and feel.
             * @param parentComponent determines the <code>Frame</code>
             *                   in which the dialog is displayed;  if
             *                   <code>null</code>, or if the
             *                   <code>parentComponent</code> has no
             *                   <code>Frame</code>, a
             *                   default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param optionType an integer designating the options available on the
             *                   dialog: <code>DEFAULT_OPTION</code>,
             *                   <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   or <code>OK_CANCEL_OPTION</code>
             * @param messageType an integer designating the kind of message this is,
             *                   primarily used to determine the icon from the
             *                   pluggable Look and Feel: <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param icon      the icon to display in the dialog
             * @param options   an array of objects indicating the possible choices
             *                   the user can make; if the objects are components, they
             *                   are rendered properly; non-<code>String</code>
             *                   objects are
             *                   rendered using their <code>toString</code> methods;
             *                   if this parameter is <code>null</code>,
             *                   the options are determined by the Look and Feel
             * @param initialValue the object that represents the default selection
             *                   for the dialog; only meaningful if <code>options</code>
             *                   is used; can be <code>null</code>
             * @return an integer indicating the option chosen by the user,
             *                   or <code>CLOSED_OPTION</code> if the user closed
             *                   the dialog
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static showOptionDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/, messageType: number /*int*/, icon: javax.swing.Icon, options: java.lang.Object[] | any[], initialValue: java.lang.Object | any): number /*int*/
            /**
             * Creates and returns a new <code>JDialog</code> wrapping
             * <code>this</code> centered on the <code>parentComponent</code>
             * in the <code>parentComponent</code>'s frame.
             * <code>title</code> is the title of the returned dialog.
             * The returned <code>JDialog</code> will not be resizable by the
             * user, however programs can invoke <code>setResizable</code> on
             * the <code>JDialog</code> instance to change this property.
             * The returned <code>JDialog</code> will be set up such that
             * once it is closed, or the user clicks on one of the buttons,
             * the optionpane's value property will be set accordingly and
             * the dialog will be closed.  Each time the dialog is made visible,
             * it will reset the option pane's value property to
             * <code>JOptionPane.UNINITIALIZED_VALUE</code> to ensure the
             * user's subsequent action closes the dialog properly.
             * @param parentComponent determines the frame in which the dialog
             *           is displayed; if the <code>parentComponent</code> has
             *           no <code>Frame</code>, a default <code>Frame</code> is used
             * @param title     the title string for the dialog
             * @return a new <code>JDialog</code> containing this instance
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public createDialog(parentComponent: java.awt.Component, title: java.lang.String | string): javax.swing.JDialog
            /**
             * Creates and returns a new parentless <code>JDialog</code>
             * with the specified title.
             * The returned <code>JDialog</code> will not be resizable by the
             * user, however programs can invoke <code>setResizable</code> on
             * the <code>JDialog</code> instance to change this property.
             * The returned <code>JDialog</code> will be set up such that
             * once it is closed, or the user clicks on one of the buttons,
             * the optionpane's value property will be set accordingly and
             * the dialog will be closed.  Each time the dialog is made visible,
             * it will reset the option pane's value property to
             * <code>JOptionPane.UNINITIALIZED_VALUE</code> to ensure the
             * user's subsequent action closes the dialog properly.
             * @param title     the title string for the dialog
             * @return a new <code>JDialog</code> containing this instance
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.6
             */
            // @ts-ignore
            public createDialog(title: java.lang.String | string): javax.swing.JDialog
            /**
             * Brings up an internal confirmation dialog panel. The dialog
             * is a information-message dialog titled "Message".
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the object to display
             */
            // @ts-ignore
            public static showInternalMessageDialog(parentComponent: java.awt.Component, message: java.lang.Object | any): void
            /**
             * Brings up an internal dialog panel that displays a message
             * using a default icon determined by the <code>messageType</code>
             * parameter.
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             */
            // @ts-ignore
            public static showInternalMessageDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/): void
            /**
             * Brings up an internal dialog panel displaying a message,
             * specifying all parameters.
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @param title     the title string for the dialog
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>,
             *                   <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>,
             *                   or <code>PLAIN_MESSAGE</code>
             * @param icon      an icon to display in the dialog that helps the user
             *                   identify the kind of message that is being displayed
             */
            // @ts-ignore
            public static showInternalMessageDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/, icon: javax.swing.Icon): void
            /**
             * Brings up an internal dialog panel with the options <i>Yes</i>, <i>No</i>
             * and <i>Cancel</i>; with the title, <b>Select an Option</b>.
             * @param parentComponent determines the <code>Frame</code> in
             *           which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the <code>Object</code> to display
             * @return an integer indicating the option selected by the user
             */
            // @ts-ignore
            public static showInternalConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any): number /*int*/
            /**
             * Brings up a internal dialog panel where the number of choices
             * is determined by the <code>optionType</code> parameter.
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the object to display in the dialog; a
             *           <code>Component</code> object is rendered as a
             *           <code>Component</code>; a <code>String</code>
             *           object is rendered as a string; other objects
             *           are converted to a <code>String</code> using the
             *           <code>toString</code> method
             * @param title     the title string for the dialog
             * @param optionType an integer designating the options
             *           available on the dialog: <code>YES_NO_OPTION</code>,
             *           or <code>YES_NO_CANCEL_OPTION</code>
             * @return an integer indicating the option selected by the user
             */
            // @ts-ignore
            public static showInternalConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/): number /*int*/
            /**
             * Brings up an internal dialog panel where the number of choices
             * is determined by the <code>optionType</code> parameter, where
             * the <code>messageType</code> parameter determines the icon to display.
             * The <code>messageType</code> parameter is primarily used to supply
             * a default icon from the Look and Feel.
             * @param parentComponent determines the <code>Frame</code> in
             *           which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the object to display in the dialog; a
             *           <code>Component</code> object is rendered as a
             *           <code>Component</code>; a <code>String</code>
             *           object is rendered as a string; other objects are
             *           converted to a <code>String</code> using the
             *           <code>toString</code> method
             * @param title     the title string for the dialog
             * @param optionType an integer designating the options
             *           available on the dialog:
             *           <code>YES_NO_OPTION</code>, or <code>YES_NO_CANCEL_OPTION</code>
             * @param messageType an integer designating the kind of message this is,
             *           primarily used to determine the icon from the
             *           pluggable Look and Feel: <code>ERROR_MESSAGE</code>,
             *           <code>INFORMATION_MESSAGE</code>,
             *           <code>WARNING_MESSAGE</code>, <code>QUESTION_MESSAGE</code>,
             *           or <code>PLAIN_MESSAGE</code>
             * @return an integer indicating the option selected by the user
             */
            // @ts-ignore
            public static showInternalConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/, messageType: number /*int*/): number /*int*/
            /**
             * Brings up an internal dialog panel with a specified icon, where
             * the number of choices is determined by the <code>optionType</code>
             * parameter.
             * The <code>messageType</code> parameter is primarily used to supply
             * a default icon from the look and feel.
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the parentComponent has no Frame, a
             *           default <code>Frame</code> is used
             * @param message   the object to display in the dialog; a
             *           <code>Component</code> object is rendered as a
             *           <code>Component</code>; a <code>String</code>
             *           object is rendered as a string; other objects are
             *           converted to a <code>String</code> using the
             *           <code>toString</code> method
             * @param title     the title string for the dialog
             * @param optionType an integer designating the options available
             *           on the dialog:
             *           <code>YES_NO_OPTION</code>, or
             *           <code>YES_NO_CANCEL_OPTION</code>.
             * @param messageType an integer designating the kind of message this is,
             *           primarily used to determine the icon from the pluggable
             *           Look and Feel: <code>ERROR_MESSAGE</code>,
             *           <code>INFORMATION_MESSAGE</code>,
             *           <code>WARNING_MESSAGE</code>, <code>QUESTION_MESSAGE</code>,
             *           or <code>PLAIN_MESSAGE</code>
             * @param icon      the icon to display in the dialog
             * @return an integer indicating the option selected by the user
             */
            // @ts-ignore
            public static showInternalConfirmDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/, messageType: number /*int*/, icon: javax.swing.Icon): number /*int*/
            /**
             * Brings up an internal dialog panel with a specified icon, where
             * the initial choice is determined by the <code>initialValue</code>
             * parameter and the number of choices is determined by the
             * <code>optionType</code> parameter.
             * <p>
             * If <code>optionType</code> is <code>YES_NO_OPTION</code>, or
             * <code>YES_NO_CANCEL_OPTION</code>
             * and the <code>options</code> parameter is <code>null</code>,
             * then the options are supplied by the Look and Feel.
             * <p>
             * The <code>messageType</code> parameter is primarily used to supply
             * a default icon from the look and feel.
             * @param parentComponent determines the <code>Frame</code>
             *           in which the dialog is displayed; if <code>null</code>,
             *           or if the <code>parentComponent</code> has no
             *           <code>Frame</code>, a default <code>Frame</code> is used
             * @param message   the object to display in the dialog; a
             *           <code>Component</code> object is rendered as a
             *           <code>Component</code>; a <code>String</code>
             *           object is rendered as a string. Other objects are
             *           converted to a <code>String</code> using the
             *           <code>toString</code> method
             * @param title     the title string for the dialog
             * @param optionType an integer designating the options available
             *           on the dialog: <code>YES_NO_OPTION</code>,
             *           or <code>YES_NO_CANCEL_OPTION</code>
             * @param messageType an integer designating the kind of message this is;
             *           primarily used to determine the icon from the
             *           pluggable Look and Feel: <code>ERROR_MESSAGE</code>,
             *           <code>INFORMATION_MESSAGE</code>,
             *           <code>WARNING_MESSAGE</code>, <code>QUESTION_MESSAGE</code>,
             *           or <code>PLAIN_MESSAGE</code>
             * @param icon      the icon to display in the dialog
             * @param options   an array of objects indicating the possible choices
             *           the user can make; if the objects are components, they
             *           are rendered properly; non-<code>String</code>
             *           objects are rendered using their <code>toString</code>
             *           methods; if this parameter is <code>null</code>,
             *           the options are determined by the Look and Feel
             * @param initialValue the object that represents the default selection
             *           for the dialog; only meaningful if <code>options</code>
             *           is used; can be <code>null</code>
             * @return an integer indicating the option chosen by the user,
             *           or <code>CLOSED_OPTION</code> if the user closed the Dialog
             */
            // @ts-ignore
            public static showInternalOptionDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, optionType: number /*int*/, messageType: number /*int*/, icon: javax.swing.Icon, options: java.lang.Object[] | any[], initialValue: java.lang.Object | any): number /*int*/
            /**
             * Shows an internal question-message dialog requesting input from
             * the user parented to <code>parentComponent</code>. The dialog
             * is displayed in the <code>Component</code>'s frame,
             * and is usually positioned below the <code>Component</code>.
             * @param parentComponent  the parent <code>Component</code>
             *           for the dialog
             * @param message  the <code>Object</code> to display
             */
            // @ts-ignore
            public static showInternalInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any): string
            /**
             * Shows an internal dialog requesting input from the user parented
             * to <code>parentComponent</code> with the dialog having the title
             * <code>title</code> and message type <code>messageType</code>.
             * @param parentComponent the parent <code>Component</code> for the dialog
             * @param message  the <code>Object</code> to display
             * @param title    the <code>String</code> to display in the
             *           dialog title bar
             * @param messageType the type of message that is to be displayed:
             *                     ERROR_MESSAGE, INFORMATION_MESSAGE, WARNING_MESSAGE,
             *                     QUESTION_MESSAGE, or PLAIN_MESSAGE
             */
            // @ts-ignore
            public static showInternalInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/): string
            /**
             * Prompts the user for input in a blocking internal dialog where
             * the initial selection, possible selections, and all other
             * options can be specified. The user will able to choose from
             * <code>selectionValues</code>, where <code>null</code>
             * implies the user can input
             * whatever they wish, usually by means of a <code>JTextField</code>.
             * <code>initialSelectionValue</code> is the initial value to prompt
             * the user with. It is up to the UI to decide how best to represent
             * the <code>selectionValues</code>, but usually a
             * <code>JComboBox</code>, <code>JList</code>, or
             * <code>JTextField</code> will be used.
             * @param parentComponent the parent <code>Component</code> for the dialog
             * @param message  the <code>Object</code> to display
             * @param title    the <code>String</code> to display in the dialog
             *           title bar
             * @param messageType the type of message to be displayed:
             *                   <code>ERROR_MESSAGE</code>, <code>INFORMATION_MESSAGE</code>,
             *                   <code>WARNING_MESSAGE</code>,
             *                   <code>QUESTION_MESSAGE</code>, or <code>PLAIN_MESSAGE</code>
             * @param icon     the <code>Icon</code> image to display
             * @param selectionValues an array of <code>Objects</code> that
             *                   gives the possible selections
             * @param initialSelectionValue the value used to initialize the input
             *                   field
             * @return user's input, or <code>null</code> meaning the user
             *           canceled the input
             */
            // @ts-ignore
            public static showInternalInputDialog(parentComponent: java.awt.Component, message: java.lang.Object | any, title: java.lang.String | string, messageType: number /*int*/, icon: javax.swing.Icon, selectionValues: java.lang.Object[] | any[], initialSelectionValue: java.lang.Object | any): any
            /**
             * Creates and returns an instance of <code>JInternalFrame</code>.
             * The internal frame is created with the specified title,
             * and wrapping the <code>JOptionPane</code>.
             * The returned <code>JInternalFrame</code> is
             * added to the <code>JDesktopPane</code> ancestor of
             * <code>parentComponent</code>, or components
             * parent if one its ancestors isn't a <code>JDesktopPane</code>,
             * or if <code>parentComponent</code>
             * doesn't have a parent then a <code>RuntimeException</code> is thrown.
             * @param parentComponent  the parent <code>Component</code> for
             *           the internal frame
             * @param title    the <code>String</code> to display in the
             *           frame's title bar
             * @return a <code>JInternalFrame</code> containing a
             *           <code>JOptionPane</code>
             * @exception RuntimeException if <code>parentComponent</code> does
             *           not have a valid parent
             */
            // @ts-ignore
            public createInternalFrame(parentComponent: java.awt.Component, title: java.lang.String | string): javax.swing.JInternalFrame
            /**
             * Returns the specified component's <code>Frame</code>.
             * @param parentComponent the <code>Component</code> to check for a
             *           <code>Frame</code>
             * @return the <code>Frame</code> that contains the component,
             *           or <code>getRootFrame</code>
             *           if the component is <code>null</code>,
             *           or does not have a valid <code>Frame</code> parent
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see #getRootFrame
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static getFrameForComponent(parentComponent: java.awt.Component): java.awt.Frame
            /**
             * Returns the specified component's desktop pane.
             * @param parentComponent the <code>Component</code> to check for a
             *           desktop
             * @return the <code>JDesktopPane</code> that contains the component,
             *           or <code>null</code> if the component is <code>null</code>
             *           or does not have an ancestor that is a
             *           <code>JInternalFrame</code>
             */
            // @ts-ignore
            public static getDesktopPaneForComponent(parentComponent: java.awt.Component): javax.swing.JDesktopPane
            /**
             * Sets the frame to use for class methods in which a frame is
             * not provided.
             * <p>
             * <strong>Note:</strong>
             * It is recommended that rather than using this method you supply a valid parent.
             * @param newRootFrame the default <code>Frame</code> to use
             */
            // @ts-ignore
            public static setRootFrame(newRootFrame: java.awt.Frame): void
            /**
             * Returns the <code>Frame</code> to use for the class methods in
             * which a frame is not provided.
             * @return the default <code>Frame</code> to use
             * @exception HeadlessException if
             *    <code>GraphicsEnvironment.isHeadless</code> returns
             *    <code>true</code>
             * @see #setRootFrame
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            public static getRootFrame(): java.awt.Frame
            /**
             * Sets the UI object which implements the {@literal L&F} for this component.
             * @param ui  the <code>OptionPaneUI</code> {#literal L&F} object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *       hidden: true
             *  description: The UI object that implements the optionpane's LookAndFeel
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.OptionPaneUI): void
            /**
             * Returns the UI object which implements the {@literal L&F} for this component.
             * @return the <code>OptionPaneUI</code> object
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.OptionPaneUI
            /**
             * Notification from the <code>UIManager</code> that the {@literal L&F} has changed.
             * Replaces the current UI object with the latest version from the
             * <code>UIManager</code>.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the name of the UI class that implements the
             * {@literal L&F} for this component.
             * @return the string "OptionPaneUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Sets the option pane's message-object.
             * @param newMessage the <code>Object</code> to display
             * @see #getMessage
             * @beaninfo preferred: true
             *    bound: true
             *  description: The optionpane's message object.
             */
            // @ts-ignore
            public setMessage(newMessage: java.lang.Object | any): void
            /**
             * Returns the message-object this pane displays.
             * @see #setMessage
             * @return the <code>Object</code> that is displayed
             */
            // @ts-ignore
            public getMessage(): any
            /**
             * Sets the icon to display. If non-<code>null</code>, the look and feel
             * does not provide an icon.
             * @param newIcon the <code>Icon</code> to display
             * @see #getIcon
             * @beaninfo preferred: true
             *        bound: true
             *  description: The option pane's type icon.
             */
            // @ts-ignore
            public setIcon(newIcon: javax.swing.Icon): void
            /**
             * Returns the icon this pane displays.
             * @return the <code>Icon</code> that is displayed
             * @see #setIcon
             */
            // @ts-ignore
            public getIcon(): javax.swing.Icon
            /**
             * Sets the value the user has chosen.
             * @param newValue  the chosen value
             * @see #getValue
             * @beaninfo preferred: true
             *        bound: true
             *  description: The option pane's value object.
             */
            // @ts-ignore
            public setValue(newValue: java.lang.Object | any): void
            /**
             * Returns the value the user has selected. <code>UNINITIALIZED_VALUE</code>
             * implies the user has not yet made a choice, <code>null</code> means the
             * user closed the window with out choosing anything. Otherwise
             * the returned value will be one of the options defined in this
             * object.
             * @return the <code>Object</code> chosen by the user,
             *          <code>UNINITIALIZED_VALUE</code>
             *          if the user has not yet made a choice, or <code>null</code> if
             *          the user closed the window without making a choice
             * @see #setValue
             */
            // @ts-ignore
            public getValue(): any
            /**
             * Sets the options this pane displays. If an element in
             * <code>newOptions</code> is a <code>Component</code>
             * it is added directly to the pane,
             * otherwise a button is created for the element.
             * @param newOptions an array of <code>Objects</code> that create the
             *           buttons the user can click on, or arbitrary
             *           <code>Components</code> to add to the pane
             * @see #getOptions
             * @beaninfo bound: true
             *  description: The option pane's options objects.
             */
            // @ts-ignore
            public setOptions(newOptions: java.lang.Object[] | any[]): void
            /**
             * Returns the choices the user can make.
             * @return the array of <code>Objects</code> that give the user's choices
             * @see #setOptions
             */
            // @ts-ignore
            public getOptions(): any[]
            /**
             * Sets the initial value that is to be enabled -- the
             * <code>Component</code>
             * that has the focus when the pane is initially displayed.
             * @param newInitialValue the <code>Object</code> that gets the initial
             *                          keyboard focus
             * @see #getInitialValue
             * @beaninfo preferred: true
             *        bound: true
             *  description: The option pane's initial value object.
             */
            // @ts-ignore
            public setInitialValue(newInitialValue: java.lang.Object | any): void
            /**
             * Returns the initial value.
             * @return the <code>Object</code> that gets the initial keyboard focus
             * @see #setInitialValue
             */
            // @ts-ignore
            public getInitialValue(): any
            /**
             * Sets the option pane's message type.
             * The message type is used by the Look and Feel to determine the
             * icon to display (if not supplied) as well as potentially how to
             * lay out the <code>parentComponent</code>.
             * @param newType an integer specifying the kind of message to display:
             *                 <code>ERROR_MESSAGE</code>, <code>INFORMATION_MESSAGE</code>,
             *                 <code>WARNING_MESSAGE</code>,
             *                 <code>QUESTION_MESSAGE</code>, or <code>PLAIN_MESSAGE</code>
             * @exception RuntimeException if <code>newType</code> is not one of the
             *           legal values listed above
             * @see #getMessageType
             * @beaninfo preferred: true
             *        bound: true
             *  description: The option pane's message type.
             */
            // @ts-ignore
            public setMessageType(newType: number /*int*/): void
            /**
             * Returns the message type.
             * @return an integer specifying the message type
             * @see #setMessageType
             */
            // @ts-ignore
            public getMessageType(): number /*int*/
            /**
             * Sets the options to display.
             * The option type is used by the Look and Feel to
             * determine what buttons to show (unless options are supplied).
             * @param newType an integer specifying the options the {#literal L&F} is to display:
             *                   <code>DEFAULT_OPTION</code>,
             *                   <code>YES_NO_OPTION</code>,
             *                   <code>YES_NO_CANCEL_OPTION</code>,
             *                   or <code>OK_CANCEL_OPTION</code>
             * @exception RuntimeException if <code>newType</code> is not one of
             *           the legal values listed above
             * @see #getOptionType
             * @see #setOptions
             * @beaninfo preferred: true
             *        bound: true
             *  description: The option pane's option type.
             */
            // @ts-ignore
            public setOptionType(newType: number /*int*/): void
            /**
             * Returns the type of options that are displayed.
             * @return an integer specifying the user-selectable options
             * @see #setOptionType
             */
            // @ts-ignore
            public getOptionType(): number /*int*/
            /**
             * Sets the input selection values for a pane that provides the user
             * with a list of items to choose from. (The UI provides a widget
             * for choosing one of the values.)  A <code>null</code> value
             * implies the user can input whatever they wish, usually by means
             * of a <code>JTextField</code>.
             * <p>
             * Sets <code>wantsInput</code> to true. Use
             * <code>setInitialSelectionValue</code> to specify the initially-chosen
             * value. After the pane as been enabled, <code>inputValue</code> is
             * set to the value the user has selected.
             * @param newValues an array of <code>Objects</code> the user to be
             *                   displayed
             *                   (usually in a list or combo-box) from which
             *                   the user can make a selection
             * @see #setWantsInput
             * @see #setInitialSelectionValue
             * @see #getSelectionValues
             * @beaninfo bound: true
             *  description: The option pane's selection values.
             */
            // @ts-ignore
            public setSelectionValues(newValues: java.lang.Object[] | any[]): void
            /**
             * Returns the input selection values.
             * @return the array of <code>Objects</code> the user can select
             * @see #setSelectionValues
             */
            // @ts-ignore
            public getSelectionValues(): any[]
            /**
             * Sets the input value that is initially displayed as selected to the user.
             * Only used if <code>wantsInput</code> is true.
             * @param newValue the initially selected value
             * @see #setSelectionValues
             * @see #getInitialSelectionValue
             * @beaninfo bound: true
             *  description: The option pane's initial selection value object.
             */
            // @ts-ignore
            public setInitialSelectionValue(newValue: java.lang.Object | any): void
            /**
             * Returns the input value that is displayed as initially selected to the user.
             * @return the initially selected value
             * @see #setInitialSelectionValue
             * @see #setSelectionValues
             */
            // @ts-ignore
            public getInitialSelectionValue(): any
            /**
             * Sets the input value that was selected or input by the user.
             * Only used if <code>wantsInput</code> is true.  Note that this method
             * is invoked internally by the option pane (in response to user action)
             * and should generally not be called by client programs.  To set the
             * input value initially displayed as selected to the user, use
             * <code>setInitialSelectionValue</code>.
             * @param newValue the <code>Object</code> used to set the
             *           value that the user specified (usually in a text field)
             * @see #setSelectionValues
             * @see #setInitialSelectionValue
             * @see #setWantsInput
             * @see #getInputValue
             * @beaninfo preferred: true
             *        bound: true
             *  description: The option pane's input value object.
             */
            // @ts-ignore
            public setInputValue(newValue: java.lang.Object | any): void
            /**
             * Returns the value the user has input, if <code>wantsInput</code>
             * is true.
             * @return the <code>Object</code> the user specified,
             *           if it was one of the objects, or a
             *           <code>String</code> if it was a value typed into a
             *           field
             * @see #setSelectionValues
             * @see #setWantsInput
             * @see #setInputValue
             */
            // @ts-ignore
            public getInputValue(): any
            /**
             * Returns the maximum number of characters to place on a line in a
             * message. Default is to return <code>Integer.MAX_VALUE</code>.
             * The value can be
             * changed by overriding this method in a subclass.
             * @return an integer giving the maximum number of characters on a line
             */
            // @ts-ignore
            public getMaxCharactersPerLineCount(): number /*int*/
            /**
             * Sets the <code>wantsInput</code> property.
             * If <code>newValue</code> is true, an input component
             * (such as a text field or combo box) whose parent is
             * <code>parentComponent</code> is provided to
             * allow the user to input a value. If <code>getSelectionValues</code>
             * returns a non-<code>null</code> array, the input value is one of the
             * objects in that array. Otherwise the input value is whatever
             * the user inputs.
             * <p>
             * This is a bound property.
             * @see #setSelectionValues
             * @see #setInputValue
             * @beaninfo preferred: true
             *        bound: true
             *  description: Flag which allows the user to input a value.
             */
            // @ts-ignore
            public setWantsInput(newValue: boolean): void
            /**
             * Returns the value of the <code>wantsInput</code> property.
             * @return true if an input component will be provided
             * @see #setWantsInput
             */
            // @ts-ignore
            public getWantsInput(): boolean
            /**
             * Requests that the initial value be selected, which will set
             * focus to the initial value. This method
             * should be invoked after the window containing the option pane
             * is made visible.
             */
            // @ts-ignore
            public selectInitialValue(): void
            /**
             * Returns a string representation of this <code>JOptionPane</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JOptionPane</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * Returns the <code>AccessibleContext</code> associated with this JOptionPane.
             * For option panes, the <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleJOptionPane</code>.
             * A new <code>AccessibleJOptionPane</code> instance is created if necessary.
             * @return an AccessibleJOptionPane that serves as the
             *          AccessibleContext of this AccessibleJOptionPane
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this option pane
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
