declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Checkbox}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface CheckboxPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Sets the state of the checkbox to be checked {@code true} or
                 * unchecked {@code false}.
                 * @param state the state to set on the checkbox
                 * @see Checkbox#setState(boolean)
                 */
                // @ts-ignore
                setState(state: boolean): void
                /**
                 * Sets the checkbox group for this checkbox. Checkboxes in one checkbox
                 * group can only be selected exclusively (like radio buttons). A value
                 * of {@code null} removes this checkbox from any checkbox group.
                 * @param g the checkbox group to set, or {#code null} when this
                 *           checkbox should not be placed in any group
                 * @see Checkbox#setCheckboxGroup(CheckboxGroup)
                 */
                // @ts-ignore
                setCheckboxGroup(g: java.awt.CheckboxGroup): void
                /**
                 * Sets the label that should be displayed on the checkbox. A value of
                 * {@code null} means that no label should be displayed.
                 * @param label the label to be displayed on the checkbox, or
                 *               {#code null} when no label should be displayed.
                 */
                // @ts-ignore
                setLabel(label: string): void
            }
        }
    }
}
