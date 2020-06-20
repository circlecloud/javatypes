declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * A <code>EnumControl</code> provides control over a set of
             * discrete possible values, each represented by an object.  In a
             * graphical user interface, such a control might be represented
             * by a set of buttons, each of which chooses one value or setting.  For
             * example, a reverb control might provide several preset reverberation
             * settings, instead of providing continuously adjustable parameters
             * of the sort that would be represented by <code>{@link FloatControl}</code>
             * objects.
             * <p>
             * Controls that provide a choice between only two settings can often be implemented
             * instead as a <code>{@link BooleanControl}</code>, and controls that provide
             * a set of values along some quantifiable dimension might be implemented
             * instead as a <code>FloatControl</code> with a coarse resolution.
             * However, a key feature of <code>EnumControl</code> is that the returned values
             * are arbitrary objects, rather than numerical or boolean values.  This means that each
             * returned object can provide further information.  As an example, the settings
             * of a <code>{@link EnumControl.Type#REVERB REVERB}</code> control are instances of
             * <code>{@link ReverbType}</code> that can be queried for the parameter values
             * used for each setting.
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            class EnumControl extends javax.sound.sampled.Control {
                /**
                 * Constructs a new enumerated control object with the given parameters.
                 * @param type the type of control represented this enumerated control object
                 * @param values the set of possible values for the control
                 * @param value the initial control value
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.EnumControl.Type, values: any[], value: any)
                /**
                 * Sets the current value for the control.  The default implementation
                 * simply sets the value as indicated.  If the value indicated is not
                 * supported, an IllegalArgumentException is thrown.
                 * Some controls require that their line be open before they can be affected
                 * by setting a value.
                 * @param value the desired new value
                 * @throws IllegalArgumentException if the value indicated does not fall
                 *  within the allowable range
                 */
                // @ts-ignore
                setValue(value: any): void
                /**
                 * Obtains this control's current value.
                 * @return the current value
                 */
                // @ts-ignore
                getValue(): java.lang.Object
                /**
                 * Returns the set of possible values for this control.
                 * @return the set of possible values
                 */
                // @ts-ignore
                getValues(): java.lang.Object[]
                /**
                 * Provides a string representation of the control.
                 * @return a string description
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
