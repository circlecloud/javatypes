declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * {@link Line Lines} often have a set of controls, such as gain and pan, that affect
             * the audio signal passing through the line.  Java Sound's <code>Line</code> objects
             * let you obtain a particular control object by passing its class as the
             * argument to a {@link Line#getControl(Control.Type) getControl} method.
             * <p>
             * Because the various types of controls have different purposes and features,
             * all of their functionality is accessed from the subclasses that define
             * each kind of control.
             * @author Kara Kytle
             * @see Line#getControls
             * @see Line#isControlSupported
             * @since 1.3
             */
            // @ts-ignore
            class Control extends java.lang.Object {
                /**
                 * Constructs a Control with the specified type.
                 * @param type the kind of control desired
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.Control.Type)
                /**
                 * Obtains the control's type.
                 * @return the control's type.
                 */
                // @ts-ignore
                getType(): javax.sound.sampled.Control.Type
                /**
                 * Obtains a String describing the control type and its current state.
                 * @return a String representation of the Control.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
