declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                /**
                 * A RenderContext encapsulates the information needed to produce a
                 * specific rendering from a RenderableImage.  It contains the area to
                 * be rendered specified in rendering-independent terms, the
                 * resolution at which the rendering is to be performed, and hints
                 * used to control the rendering process.
                 * <p> Users create RenderContexts and pass them to the
                 * RenderableImage via the createRendering method.  Most of the methods of
                 * RenderContexts are not meant to be used directly by applications,
                 * but by the RenderableImage and operator classes to which it is
                 * passed.
                 * <p> The AffineTransform parameter passed into and out of this class
                 * are cloned.  The RenderingHints and Shape parameters are not
                 * necessarily cloneable and are therefore only reference copied.
                 * Altering RenderingHints or Shape instances that are in use by
                 * instances of RenderContext may have undesired side effects.
                 */
                // @ts-ignore
                class RenderContext extends java.lang.Object implements java.lang.Cloneable {
                    /**
                     * Constructs a RenderContext with a given transform.
                     * The area of interest is supplied as a Shape,
                     * and the rendering hints are supplied as a RenderingHints object.
                     * @param usr2dev an AffineTransform.
                     * @param aoi a Shape representing the area of interest.
                     * @param hints a RenderingHints object containing rendering hints.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform, aoi: java.awt.Shape, hints: java.awt.RenderingHints)
                    /**
                     * Constructs a RenderContext with a given transform.
                     * The area of interest is taken to be the entire renderable area.
                     * No rendering hints are used.
                     * @param usr2dev an AffineTransform.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform)
                    /**
                     * Constructs a RenderContext with a given transform and rendering hints.
                     * The area of interest is taken to be the entire renderable area.
                     * @param usr2dev an AffineTransform.
                     * @param hints a RenderingHints object containing rendering hints.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints)
                    /**
                     * Constructs a RenderContext with a given transform and area of interest.
                     * The area of interest is supplied as a Shape.
                     * No rendering hints are used.
                     * @param usr2dev an AffineTransform.
                     * @param aoi a Shape representing the area of interest.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform, aoi: java.awt.Shape)
                    /**
                     * Gets the rendering hints of this <code>RenderContext</code>.
                     * @return a <code>RenderingHints</code> object that represents
                     *  the rendering hints of this <code>RenderContext</code>.
                     * @see #setRenderingHints(RenderingHints)
                     */
                    // @ts-ignore
                    getRenderingHints(): java.awt.RenderingHints
                    /**
                     * Sets the rendering hints of this <code>RenderContext</code>.
                     * @param hints a <code>RenderingHints</code> object that represents
                     *  the rendering hints to assign to this <code>RenderContext</code>.
                     * @see #getRenderingHints
                     */
                    // @ts-ignore
                    setRenderingHints(hints: java.awt.RenderingHints): void
                    /**
                     * Sets the current user-to-device AffineTransform contained
                     * in the RenderContext to a given transform.
                     * @param newTransform the new AffineTransform.
                     * @see #getTransform
                     */
                    // @ts-ignore
                    setTransform(newTransform: java.awt.geom.AffineTransform): void
                    /**
                     * Modifies the current user-to-device transform by prepending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [modTransform] x [this]
                     * </pre>
                     * @param modTransform the AffineTransform to prepend to the
                     *         current usr2dev transform.
                     * @since 1.3
                     */
                    // @ts-ignore
                    preConcatenateTransform(modTransform: java.awt.geom.AffineTransform): void
                    /**
                     * Modifies the current user-to-device transform by prepending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [modTransform] x [this]
                     * </pre>
                     * This method does the same thing as the preConcatenateTransform
                     * method.  It is here for backward compatibility with previous releases
                     * which misspelled the method name.
                     * @param modTransform the AffineTransform to prepend to the
                     *         current usr2dev transform.
                     * @deprecated replaced by
                     *                  <code>preConcatenateTransform(AffineTransform)</code>.
                     */
                    // @ts-ignore
                    preConcetenateTransform(modTransform: java.awt.geom.AffineTransform): void
                    /**
                     * Modifies the current user-to-device transform by appending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [this] x [modTransform]
                     * </pre>
                     * @param modTransform the AffineTransform to append to the
                     *         current usr2dev transform.
                     * @since 1.3
                     */
                    // @ts-ignore
                    concatenateTransform(modTransform: java.awt.geom.AffineTransform): void
                    /**
                     * Modifies the current user-to-device transform by appending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [this] x [modTransform]
                     * </pre>
                     * This method does the same thing as the concatenateTransform
                     * method.  It is here for backward compatibility with previous releases
                     * which misspelled the method name.
                     * @param modTransform the AffineTransform to append to the
                     *         current usr2dev transform.
                     * @deprecated replaced by
                     *                  <code>concatenateTransform(AffineTransform)</code>.
                     */
                    // @ts-ignore
                    concetenateTransform(modTransform: java.awt.geom.AffineTransform): void
                    /**
                     * Gets the current user-to-device AffineTransform.
                     * @return a reference to the current AffineTransform.
                     * @see #setTransform(AffineTransform)
                     */
                    // @ts-ignore
                    getTransform(): java.awt.geom.AffineTransform
                    /**
                     * Sets the current area of interest.  The old area is discarded.
                     * @param newAoi The new area of interest.
                     * @see #getAreaOfInterest
                     */
                    // @ts-ignore
                    setAreaOfInterest(newAoi: java.awt.Shape): void
                    /**
                     * Gets the ares of interest currently contained in the
                     * RenderContext.
                     * @return a reference to the area of interest of the RenderContext,
                     *          or null if none is specified.
                     * @see #setAreaOfInterest(Shape)
                     */
                    // @ts-ignore
                    getAreaOfInterest(): java.awt.Shape
                    /**
                     * Makes a copy of a RenderContext. The area of interest is copied
                     * by reference.  The usr2dev AffineTransform and hints are cloned,
                     * while the area of interest is copied by reference.
                     * @return the new cloned RenderContext.
                     */
                    // @ts-ignore
                    clone(): java.lang.Object
                }
            }
        }
    }
}
