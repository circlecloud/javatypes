declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A collection of bindings of KeyStrokes to actions.  The
             * bindings are basically name-value pairs that potentially
             * resolve in a hierarchy.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface Keymap {
                /**
                 * Fetches the name of the set of key-bindings.
                 * @return the name
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Fetches the default action to fire if a
                 * key is typed (i.e. a KEY_TYPED KeyEvent is received)
                 * and there is no binding for it.  Typically this
                 * would be some action that inserts text so that
                 * the keymap doesn't require an action for each
                 * possible key.
                 * @return the default action
                 */
                // @ts-ignore
                getDefaultAction(): javax.swing.Action
                /**
                 * Set the default action to fire if a key is typed.
                 * @param a the action
                 */
                // @ts-ignore
                setDefaultAction(a: javax.swing.Action): void
                /**
                 * Fetches the action appropriate for the given symbolic
                 * event sequence.  This is used by JTextController to
                 * determine how to interpret key sequences.  If the
                 * binding is not resolved locally, an attempt is made
                 * to resolve through the parent keymap, if one is set.
                 * @param key the key sequence
                 * @return the action associated with the key
                 *   sequence if one is defined, otherwise <code>null</code>
                 */
                // @ts-ignore
                getAction(key: javax.swing.KeyStroke): javax.swing.Action
                /**
                 * Fetches all of the keystrokes in this map that
                 * are bound to some action.
                 * @return the list of keystrokes
                 */
                // @ts-ignore
                getBoundKeyStrokes(): javax.swing.KeyStroke[]
                /**
                 * Fetches all of the actions defined in this keymap.
                 * @return the list of actions
                 */
                // @ts-ignore
                getBoundActions(): javax.swing.Action[]
                /**
                 * Fetches the keystrokes that will result in
                 * the given action.
                 * @param a the action
                 * @return the list of keystrokes
                 */
                // @ts-ignore
                getKeyStrokesForAction(a: javax.swing.Action): javax.swing.KeyStroke[]
                /**
                 * Determines if the given key sequence is locally defined.
                 * @param key the key sequence
                 * @return true if the key sequence is locally defined else false
                 */
                // @ts-ignore
                isLocallyDefined(key: javax.swing.KeyStroke): boolean
                /**
                 * Adds a binding to the keymap.
                 * @param key the key sequence
                 * @param a the action
                 */
                // @ts-ignore
                addActionForKeyStroke(key: javax.swing.KeyStroke, a: javax.swing.Action): void
                /**
                 * Removes a binding from the keymap.
                 * @param keys the key sequence
                 */
                // @ts-ignore
                removeKeyStrokeBinding(keys: javax.swing.KeyStroke): void
                /**
                 * Removes all bindings from the keymap.
                 */
                // @ts-ignore
                removeBindings(): void
                /**
                 * Fetches the parent keymap used to resolve key-bindings.
                 * @return the keymap
                 */
                // @ts-ignore
                getResolveParent(): javax.swing.text.Keymap
                /**
                 * Sets the parent keymap, which will be used to
                 * resolve key-bindings.
                 * The behavior is unspecified if a {@code Keymap} has itself
                 * as one of its resolve parents.
                 * @param parent the parent keymap
                 */
                // @ts-ignore
                setResolveParent(parent: javax.swing.text.Keymap): void
            }
        }
    }
}
