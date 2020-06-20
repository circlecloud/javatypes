declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * A <code>BooleanControl</code> provides the ability to switch between
             * two possible settings that affect a line's audio.  The settings are boolean
             * values (<code>true</code> and <code>false</code>).  A graphical user interface
             * might represent the control by a two-state button, an on/off switch, two
             * mutually exclusive buttons, or a checkbox (among other possibilities).
             * For example, depressing a button might activate a
             * <code>{@link BooleanControl.Type#MUTE MUTE}</code> control to silence
             * the line's audio.
             * <p>
             * As with other <code>{@link Control}</code> subclasses, a method is
             * provided that returns string labels for the values, suitable for
             * display in the user interface.
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            class BooleanControl extends javax.sound.sampled.Control {
                /**
                 * Constructs a new boolean control object with the given parameters.
                 * @param type the type of control represented this float control object
                 * @param initialValue the initial control value
                 * @param trueStateLabel the label for the state represented by <code>true</code>,
                 *  such as "true" or "on."
                 * @param falseStateLabel the label for the state represented by <code>false</code>,
                 *  such as "false" or "off."
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.BooleanControl.Type, initialValue: boolean, trueStateLabel: string, falseStateLabel: string)
                /**
                 * Constructs a new boolean control object with the given parameters.
                 * The labels for the <code>true</code> and <code>false</code> states
                 * default to "true" and "false."
                 * @param type the type of control represented by this float control object
                 * @param initialValue the initial control value
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.BooleanControl.Type, initialValue: boolean)
                /**
                 * Sets the current value for the control.  The default
                 * implementation simply sets the value as indicated.
                 * Some controls require that their line be open before they can be affected
                 * by setting a value.
                 * @param value desired new value.
                 */
                // @ts-ignore
                setValue(value: boolean): void
                /**
                 * Obtains this control's current value.
                 * @return current value.
                 */
                // @ts-ignore
                getValue(): boolean
                /**
                 * Obtains the label for the specified state.
                 * @param state the state whose label will be returned
                 * @return the label for the specified state, such as "true" or "on"
                 *  for <code>true</code>, or "false" or "off" for <code>false</code>.
                 */
                // @ts-ignore
                getStateLabel(state: boolean): java.lang.String
                /**
                 * Provides a string representation of the control
                 * @return a string description
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
