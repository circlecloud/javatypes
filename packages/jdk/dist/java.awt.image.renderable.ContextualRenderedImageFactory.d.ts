declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                /**
                 * ContextualRenderedImageFactory provides an interface for the
                 * functionality that may differ between instances of
                 * RenderableImageOp.  Thus different operations on RenderableImages
                 * may be performed by a single class such as RenderedImageOp through
                 * the use of multiple instances of ContextualRenderedImageFactory.
                 * The name ContextualRenderedImageFactory is commonly shortened to
                 * "CRIF."
                 * <p> All operations that are to be used in a rendering-independent
                 * chain must implement ContextualRenderedImageFactory.
                 * <p> Classes that implement this interface must provide a
                 * constructor with no arguments.
                 */
                // @ts-ignore
                interface ContextualRenderedImageFactory extends java.awt.image.renderable.RenderedImageFactory {
                    /**
                     * Maps the operation's output RenderContext into a RenderContext
                     * for each of the operation's sources.  This is useful for
                     * operations that can be expressed in whole or in part simply as
                     * alterations in the RenderContext, such as an affine mapping, or
                     * operations that wish to obtain lower quality renderings of
                     * their sources in order to save processing effort or
                     * transmission bandwith.  Some operations, such as blur, can also
                     * use this mechanism to avoid obtaining sources of higher quality
                     * than necessary.
                     * @param i the index of the source image.
                     * @param renderContext the RenderContext being applied to the operation.
                     * @param paramBlock a ParameterBlock containing the operation's
                     *         sources and parameters.
                     * @param image the RenderableImage being rendered.
                     * @return a <code>RenderContext</code> for
                     *          the source at the specified index of the parameters
                     *          Vector contained in the specified ParameterBlock.
                     */
                    // @ts-ignore
                    mapRenderContext(i: number /*int*/, renderContext: java.awt.image.renderable.RenderContext, paramBlock: java.awt.image.renderable.ParameterBlock, image: java.awt.image.renderable.RenderableImage): java.awt.image.renderable.RenderContext
                    /**
                     * Creates a rendering, given a RenderContext and a ParameterBlock
                     * containing the operation's sources and parameters.  The output
                     * is a RenderedImage that takes the RenderContext into account to
                     * determine its dimensions and placement on the image plane.
                     * This method houses the "intelligence" that allows a
                     * rendering-independent operation to adapt to a specific
                     * RenderContext.
                     * @param renderContext The RenderContext specifying the rendering
                     * @param paramBlock a ParameterBlock containing the operation's
                     *         sources and parameters
                     * @return a <code>RenderedImage</code> from the sources and parameters
                     *          in the specified ParameterBlock and according to the
                     *          rendering instructions in the specified RenderContext.
                     */
                    // @ts-ignore
                    create(renderContext: java.awt.image.renderable.RenderContext, paramBlock: java.awt.image.renderable.ParameterBlock): java.awt.image.RenderedImage
                    /**
                     * Returns the bounding box for the output of the operation,
                     * performed on a given set of sources, in rendering-independent
                     * space.  The bounds are returned as a Rectangle2D, that is, an
                     * axis-aligned rectangle with floating-point corner coordinates.
                     * @param paramBlock a ParameterBlock containing the operation's
                     *         sources and parameters.
                     * @return a Rectangle2D specifying the rendering-independent
                     *          bounding box of the output.
                     */
                    // @ts-ignore
                    getBounds2D(paramBlock: java.awt.image.renderable.ParameterBlock): java.awt.geom.Rectangle2D
                    /**
                     * Gets the appropriate instance of the property specified by the name
                     * parameter.  This method must determine which instance of a property to
                     * return when there are multiple sources that each specify the property.
                     * @param paramBlock a ParameterBlock containing the operation's
                     *         sources and parameters.
                     * @param name a String naming the desired property.
                     * @return an object reference to the value of the property requested.
                     */
                    // @ts-ignore
                    getProperty(paramBlock: java.awt.image.renderable.ParameterBlock, name: java.lang.String | string): any
                    /**
                     * Returns a list of names recognized by getProperty.
                     * @return the list of property names.
                     */
                    // @ts-ignore
                    getPropertyNames(): string[]
                    /**
                     * Returns true if successive renderings (that is, calls to
                     * create(RenderContext, ParameterBlock)) with the same arguments
                     * may produce different results.  This method may be used to
                     * determine whether an existing rendering may be cached and
                     * reused.  It is always safe to return true.
                     * @return <code>true</code> if successive renderings with the
                     *          same arguments might produce different results;
                     *          <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    isDynamic(): boolean
                }
            }
        }
    }
}
