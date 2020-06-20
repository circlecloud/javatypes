declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * An Action implementation useful for key bindings that are
             * shared across a number of different text components.  Because
             * the action is shared, it must have a way of getting it's
             * target to act upon.  This class provides support to try and
             * find a text component to operate on.  The preferred way of
             * getting the component to act upon is through the ActionEvent
             * that is received.  If the Object returned by getSource can
             * be narrowed to a text component, it will be used.  If the
             * action event is null or can't be narrowed, the last focused
             * text component is tried.  This is determined by being
             * used in conjunction with a JTextController which
             * arranges to share that information with a TextAction.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class TextAction extends javax.swing.AbstractAction {
                /**
                 * Creates a new JTextAction object.
                 * @param name the name of the action
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Determines the component to use for the action.
                 * This if fetched from the source of the ActionEvent
                 * if it's not null and can be narrowed.  Otherwise,
                 * the last focused component is used.
                 * @param e the ActionEvent
                 * @return the component
                 */
                // @ts-ignore
                getTextComponent(e: java.awt.event.ActionEvent): javax.swing.text.JTextComponent
                /**
                 * Takes one list of
                 * commands and augments it with another list
                 * of commands.  The second list takes precedence
                 * over the first list; that is, when both lists
                 * contain a command with the same name, the command
                 * from the second list is used.
                 * @param list1 the first list, may be empty but not
                 *               <code>null</code>
                 * @param list2 the second list, may be empty but not
                 *               <code>null</code>
                 * @return the augmented list
                 */
                // @ts-ignore
                augmentList(list1: javax.swing.Action[], list2: javax.swing.Action[]): javax.swing.Action[]
                /**
                 * Fetches the text component that currently has focus.
                 * This allows actions to be shared across text components
                 * which is useful for key-bindings where a large set of
                 * actions are defined, but generally used the same way
                 * across many different components.
                 * @return the component
                 */
                // @ts-ignore
                getFocusedComponent(): javax.swing.text.JTextComponent
            }
        }
    }
}
