declare namespace javax {
    namespace swing {
        namespace colorchooser {
            /**
             * A generic implementation of <code>ColorSelectionModel</code>.
             * @author Steve Wilson
             * @see java.awt.Color
             */
            // @ts-ignore
            class DefaultColorSelectionModel extends java.lang.Object implements javax.swing.colorchooser.ColorSelectionModel, java.io.Serializable {
                /**
                 * Creates a <code>DefaultColorSelectionModel</code> with the
                 * current color set to <code>Color.white</code>.  This is
                 * the default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>DefaultColorSelectionModel</code> with the
                 * current color set to <code>color</code>, which should be
                 * non-<code>null</code>.  Note that setting the color to
                 * <code>null</code> is undefined and may have unpredictable
                 * results.
                 * @param color the new <code>Color</code>
                 */
                // @ts-ignore
                constructor(color: java.awt.Color)
                /**
                 * Only one <code>ChangeEvent</code> is needed per model instance
                 * since the event's only (read-only) state is the source property.
                 * The source of events generated here is always "this".
                 */
                // @ts-ignore
                changeEvent: javax.swing.event.ChangeEvent
                // @ts-ignore
                listenerList: javax.swing.event.EventListenerList
                /**
                 * Returns the selected <code>Color</code> which should be
                 * non-<code>null</code>.
                 * @return the selected <code>Color</code>
                 */
                // @ts-ignore
                getSelectedColor(): java.awt.Color
                /**
                 * Sets the selected color to <code>color</code>.
                 * Note that setting the color to <code>null</code>
                 * is undefined and may have unpredictable results.
                 * This method fires a state changed event if it sets the
                 * current color to a new non-<code>null</code> color;
                 * if the new color is the same as the current color,
                 * no event is fired.
                 * @param color the new <code>Color</code>
                 */
                // @ts-ignore
                setSelectedColor(color: java.awt.Color): void
                /**
                 * Adds a <code>ChangeListener</code> to the model.
                 * @param l the <code>ChangeListener</code> to be added
                 */
                // @ts-ignore
                addChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Removes a <code>ChangeListener</code> from the model.
                 * @param l the <code>ChangeListener</code> to be removed
                 */
                // @ts-ignore
                removeChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Returns an array of all the <code>ChangeListener</code>s added
                 * to this <code>DefaultColorSelectionModel</code> with
                 * <code>addChangeListener</code>.
                 * @return all of the <code>ChangeListener</code>s added, or an empty
                 *          array if no listeners have been added
                 * @since 1.4
                 */
                // @ts-ignore
                getChangeListeners(): javax.swing.event.ChangeListener[]
                /**
                 * Runs each <code>ChangeListener</code>'s
                 * <code>stateChanged</code> method.
                 * <!-- @see #setRangeProperties    //bad link-->
                 * @see EventListenerList
                 */
                // @ts-ignore
                fireStateChanged(): void
            }
        }
    }
}
