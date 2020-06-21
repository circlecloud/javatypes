declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * ZoneView is a View implementation that creates zones for which
             * the child views are not created or stored until they are needed
             * for display or model/view translations.  This enables a substantial
             * reduction in memory consumption for situations where the model
             * being represented is very large, by building view objects only for
             * the region being actively viewed/edited.  The size of the children
             * can be estimated in some way, or calculated asynchronously with
             * only the result being saved.
             * <p>
             * ZoneView extends BoxView to provide a box that implements
             * zones for its children.  The zones are special View implementations
             * (the children of an instance of this class) that represent only a
             * portion of the model that an instance of ZoneView is responsible
             * for.  The zones don't create child views until an attempt is made
             * to display them. A box shaped view is well suited to this because:
             * <ul>
             * <li>
             * Boxes are a heavily used view, and having a box that
             * provides this behavior gives substantial opportunity
             * to plug the behavior into a view hierarchy from the
             * view factory.
             * <li>
             * Boxes are tiled in one direction, so it is easy to
             * divide them into zones in a reliable way.
             * <li>
             * Boxes typically have a simple relationship to the model (i.e. they
             * create child views that directly represent the child elements).
             * <li>
             * Boxes are easier to estimate the size of than some other shapes.
             * </ul>
             * <p>
             * The default behavior is controlled by two properties, maxZoneSize
             * and maxZonesLoaded.  Setting maxZoneSize to Integer.MAX_VALUE would
             * have the effect of causing only one zone to be created.  This would
             * effectively turn the view into an implementation of the decorator
             * pattern.  Setting maxZonesLoaded to a value of Integer.MAX_VALUE would
             * cause zones to never be unloaded.  For simplicity, zones are created on
             * boundaries represented by the child elements of the element the view is
             * responsible for.  The zones can be any View implementation, but the
             * default implementation is based upon AsyncBoxView which supports fairly
             * large zones efficiently.
             * @author Timothy Prinzing
             * @see View
             * @since 1.3
             */
            // @ts-ignore
            class ZoneView extends javax.swing.text.BoxView {
                /**
                 * Constructs a ZoneView.
                 * @param elem the element this view is responsible for
                 * @param axis either View.X_AXIS or View.Y_AXIS
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element, axis: number /*int*/)
                /**
                 * Get the current maximum zone size.
                 */
                // @ts-ignore
                public getMaximumZoneSize(): number /*int*/
                /**
                 * Set the desired maximum zone size.  A
                 * zone may get larger than this size if
                 * a single child view is larger than this
                 * size since zones are formed on child view
                 * boundaries.
                 * @param size the number of characters the zone
                 *  may represent before attempting to break
                 *  the zone into a smaller size.
                 */
                // @ts-ignore
                public setMaximumZoneSize(size: number /*int*/): void
                /**
                 * Get the current setting of the number of zones
                 * allowed to be loaded at the same time.
                 */
                // @ts-ignore
                public getMaxZonesLoaded(): number /*int*/
                /**
                 * Sets the current setting of the number of zones
                 * allowed to be loaded at the same time. This will throw an
                 * <code>IllegalArgumentException</code> if <code>mzl</code> is less
                 * than 1.
                 * @param mzl the desired maximum number of zones
                 *   to be actively loaded, must be greater than 0
                 * @exception IllegalArgumentException if <code>mzl</code> is &lt; 1
                 */
                // @ts-ignore
                public setMaxZonesLoaded(mzl: number /*int*/): void
                /**
                 * Called by a zone when it gets loaded.  This happens when
                 * an attempt is made to display or perform a model/view
                 * translation on a zone that was in an unloaded state.
                 * This is implemented to check if the maximum number of
                 * zones was reached and to unload the oldest zone if so.
                 * @param zone the child view that was just loaded.
                 */
                // @ts-ignore
                zoneWasLoaded(zone: javax.swing.text.View): void
                /**
                 * Unload a zone (Convert the zone to its memory saving state).
                 * The zones are expected to represent a subset of the
                 * child elements of the element this view is responsible for.
                 * Therefore, the default implementation is to simple remove
                 * all the children.
                 * @param zone the child view desired to be set to an
                 *   unloaded state.
                 */
                // @ts-ignore
                unloadZone(zone: javax.swing.text.View): void
                /**
                 * Determine if a zone is in the loaded state.
                 * The zones are expected to represent a subset of the
                 * child elements of the element this view is responsible for.
                 * Therefore, the default implementation is to return
                 * true if the view has children.
                 */
                // @ts-ignore
                isZoneLoaded(zone: javax.swing.text.View): boolean
                /**
                 * Create a view to represent a zone for the given
                 * range within the model (which should be within
                 * the range of this objects responsibility).  This
                 * is called by the zone management logic to create
                 * new zones.  Subclasses can provide a different
                 * implementation for a zone by changing this method.
                 * @param p0 the start of the desired zone.  This should
                 *   be &gt;= getStartOffset() and &lt; getEndOffset().  This
                 *   value should also be &lt; p1.
                 * @param p1 the end of the desired zone.  This should
                 *   be &gt; getStartOffset() and &lt;= getEndOffset().  This
                 *   value should also be &gt; p0.
                 */
                // @ts-ignore
                createZone(p0: number /*int*/, p1: number /*int*/): javax.swing.text.View
                /**
                 * Loads all of the children to initialize the view.
                 * This is called by the <code>setParent</code> method.
                 * This is reimplemented to not load any children directly
                 * (as they are created by the zones).  This method creates
                 * the initial set of zones.  Zones don't actually get
                 * populated however until an attempt is made to display
                 * them or to do model/view coordinate translation.
                 * @param f the view factory
                 */
                // @ts-ignore
                loadChildren(f: javax.swing.text.ViewFactory): void
                /**
                 * Returns the child view index representing the given position in
                 * the model.
                 * @param pos the position &gt;= 0
                 * @return index of the view representing the given position, or
                 *    -1 if no view represents that position
                 */
                // @ts-ignore
                getViewIndexAtPosition(pos: number /*int*/): number /*int*/
                /**
                 * The superclass behavior will try to update the child views
                 * which is not desired in this case, since the children are
                 * zones and not directly effected by the changes to the
                 * associated element.  This is reimplemented to do nothing
                 * and return false.
                 */
                // @ts-ignore
                updateChildren(ec: javax.swing.event.DocumentEvent.ElementChange, e: javax.swing.event.DocumentEvent, f: javax.swing.text.ViewFactory): boolean
                /**
                 * Gives notification that something was inserted into the document
                 * in a location that this view is responsible for.  This is largely
                 * delegated to the superclass, but is reimplemented to update the
                 * relevant zone (i.e. determine if a zone needs to be split into a
                 * set of 2 or more zones).
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#insertUpdate
                 */
                // @ts-ignore
                public insertUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification that something was removed from the document
                 * in a location that this view is responsible for.  This is largely
                 * delegated to the superclass, but is reimplemented to update the
                 * relevant zones (i.e. determine if zones need to be removed or
                 * joined with another zone).
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#removeUpdate
                 */
                // @ts-ignore
                public removeUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
            }
        }
    }
}
