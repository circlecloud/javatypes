declare namespace java {
    namespace awt {
        /**
         * The <code>CheckboxGroup</code> class is used to group together
         * a set of <code>Checkbox</code> buttons.
         * <p>
         * Exactly one check box button in a <code>CheckboxGroup</code> can
         * be in the "on" state at any given time. Pushing any
         * button sets its state to "on" and forces any other button that
         * is in the "on" state into the "off" state.
         * <p>
         * The following code example produces a new check box group,
         * with three check boxes:
         * <hr><blockquote><pre>
         * setLayout(new GridLayout(3, 1));
         * CheckboxGroup cbg = new CheckboxGroup();
         * add(new Checkbox("one", cbg, true));
         * add(new Checkbox("two", cbg, false));
         * add(new Checkbox("three", cbg, false));
         * </pre></blockquote><hr>
         * <p>
         * This image depicts the check box group created by this example:
         * <p>
         * <img src="doc-files/CheckboxGroup-1.gif"
         * alt="Shows three checkboxes, arranged vertically, labeled one, two, and three. Checkbox one is in the on state."
         * style="float:center; margin: 7px 10px;">
         * <p>
         * @author Sami Shaio
         * @see java.awt.Checkbox
         * @since JDK1.0
         */
        // @ts-ignore
        class CheckboxGroup extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a new instance of <code>CheckboxGroup</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the current choice from this check box group.
             * The current choice is the check box in this
             * group that is currently in the "on" state,
             * or <code>null</code> if all check boxes in the
             * group are off.
             * @return the check box that is currently in the
             *                  "on" state, or <code>null</code>.
             * @see java.awt.Checkbox
             * @see java.awt.CheckboxGroup#setSelectedCheckbox
             * @since JDK1.1
             */
            // @ts-ignore
            getSelectedCheckbox(): java.awt.Checkbox
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getSelectedCheckbox()</code>.
             */
            // @ts-ignore
            getCurrent(): java.awt.Checkbox
            /**
             * Sets the currently selected check box in this group
             * to be the specified check box.
             * This method sets the state of that check box to "on" and
             * sets all other check boxes in the group to be off.
             * <p>
             * If the check box argument is <tt>null</tt>, all check boxes
             * in this check box group are deselected. If the check box argument
             * belongs to a different check box group, this method does
             * nothing.
             * @param box   the <code>Checkbox</code> to set as the
             *                       current selection.
             * @see java.awt.Checkbox
             * @see java.awt.CheckboxGroup#getSelectedCheckbox
             * @since JDK1.1
             */
            // @ts-ignore
            setSelectedCheckbox(box: java.awt.Checkbox): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>setSelectedCheckbox(Checkbox)</code>.
             */
            // @ts-ignore
            setCurrent(box: java.awt.Checkbox): void
            /**
             * Returns a string representation of this check box group,
             * including the value of its current selection.
             * @return a string representation of this check box group.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
