declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * A <code>CompoundControl</code>, such as a graphic equalizer, provides control
             * over two or more related properties, each of which is itself represented as
             * a <code>Control</code>.
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            class CompoundControl extends javax.sound.sampled.Control {
                /**
                 * Constructs a new compound control object with the given parameters.
                 * @param type the type of control represented this compound control object
                 * @param memberControls the set of member controls
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.CompoundControl.Type, memberControls: javax.sound.sampled.Control[])
                /**
                 * Returns the set of member controls that comprise the compound control.
                 * @return the set of member controls.
                 */
                // @ts-ignore
                getMemberControls(): javax.sound.sampled.Control[]
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
