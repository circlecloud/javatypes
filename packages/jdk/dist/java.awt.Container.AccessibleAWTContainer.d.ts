declare namespace java {
    namespace awt {
        namespace Container {
            /**
             * Inner class of Container used to provide default support for
             * accessibility.  This class is not meant to be used directly by
             * application developers, but is instead meant only to be
             * subclassed by container developers.
             * <p>
             * The class used to obtain the accessible role for this object,
             * as well as implementing many of the methods in the
             * AccessibleContainer interface.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTContainer extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                accessibleContainerHandler: java.awt.event.ContainerListener
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement <code>Accessible</code>,
                 * then this method should return the number of children of this object.
                 * @return the number of accessible children in the object
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the nth <code>Accessible</code> child of the object.
                 * @param i zero-based index of child
                 * @return the nth <code>Accessible</code> child of the object
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the <code>Accessible</code> child, if one exists,
                 * contained at the local coordinate <code>Point</code>.
                 * @param p the point defining the top-left corner of the
                 *     <code>Accessible</code>, given in the coordinate space
                 *     of the object's parent
                 * @return the <code>Accessible</code>, if it exists,
                 *     at the specified location; else <code>null</code>
                 */
                // @ts-ignore
                public getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                /**
                 * Adds a PropertyChangeListener to the listener list.
                 * @param listener  the PropertyChangeListener to be added
                 */
                // @ts-ignore
                public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Remove a PropertyChangeListener from the listener list.
                 * This removes a PropertyChangeListener that was registered
                 * for all properties.
                 * @param listener the PropertyChangeListener to be removed
                 */
                // @ts-ignore
                public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            }
        }
    }
}
