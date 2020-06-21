declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                /**
                 * A <code>ParameterBlock</code> encapsulates all the information about sources and
                 * parameters (Objects) required by a RenderableImageOp, or other
                 * classes that process images.
                 * <p> Although it is possible to place arbitrary objects in the
                 * source Vector, users of this class may impose semantic constraints
                 * such as requiring all sources to be RenderedImages or
                 * RenderableImage.  <code>ParameterBlock</code> itself is merely a container and
                 * performs no checking on source or parameter types.
                 * <p> All parameters in a <code>ParameterBlock</code> are objects; convenience
                 * add and set methods are available that take arguments of base type and
                 * construct the appropriate subclass of Number (such as
                 * Integer or Float).  Corresponding get methods perform a
                 * downward cast and have return values of base type; an exception
                 * will be thrown if the stored values do not have the correct type.
                 * There is no way to distinguish between the results of
                 * "short s; add(s)" and "add(new Short(s))".
                 * <p> Note that the get and set methods operate on references.
                 * Therefore, one must be careful not to share references between
                 * <code>ParameterBlock</code>s when this is inappropriate.  For example, to create
                 * a new <code>ParameterBlock</code> that is equal to an old one except for an
                 * added source, one might be tempted to write:
                 * <pre>
                 * ParameterBlock addSource(ParameterBlock pb, RenderableImage im) {
                 * ParameterBlock pb1 = new ParameterBlock(pb.getSources());
                 * pb1.addSource(im);
                 * return pb1;
                 * }
                 * </pre>
                 * <p> This code will have the side effect of altering the original
                 * <code>ParameterBlock</code>, since the getSources operation returned a reference
                 * to its source Vector.  Both pb and pb1 share their source Vector,
                 * and a change in either is visible to both.
                 * <p> A correct way to write the addSource function is to clone
                 * the source Vector:
                 * <pre>
                 * ParameterBlock addSource (ParameterBlock pb, RenderableImage im) {
                 * ParameterBlock pb1 = new ParameterBlock(pb.getSources().clone());
                 * pb1.addSource(im);
                 * return pb1;
                 * }
                 * </pre>
                 * <p> The clone method of <code>ParameterBlock</code> has been defined to
                 * perform a clone of both the source and parameter Vectors for
                 * this reason.  A standard, shallow clone is available as
                 * shallowClone.
                 * <p> The addSource, setSource, add, and set methods are
                 * defined to return 'this' after adding their argument.  This allows
                 * use of syntax like:
                 * <pre>
                 * ParameterBlock pb = new ParameterBlock();
                 * op = new RenderableImageOp("operation", pb.add(arg1).add(arg2));
                 * </pre>
                 */
                // @ts-ignore
                class ParameterBlock extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
                    /**
                     * A dummy constructor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a <code>ParameterBlock</code> with a given Vector
                     * of sources.
                     * @param sources a <code>Vector</code> of source images
                     */
                    // @ts-ignore
                    constructor(sources: java.util.Vector<java.lang.Object | any>)
                    /**
                     * Constructs a <code>ParameterBlock</code> with a given Vector of sources and
                     * Vector of parameters.
                     * @param sources a <code>Vector</code> of source images
                     * @param parameters a <code>Vector</code> of parameters to be used in the
                     *         rendering operation
                     */
                    // @ts-ignore
                    constructor(sources: java.util.Vector<java.lang.Object | any>, parameters: java.util.Vector<java.lang.Object | any>)
                    /**
                     * A Vector of sources, stored as arbitrary Objects.
                     */
                    // @ts-ignore
                    sources: java.util.Vector<java.lang.Object | any>
                    /**
                     * A Vector of non-source parameters, stored as arbitrary Objects.
                     */
                    // @ts-ignore
                    parameters: java.util.Vector<java.lang.Object | any>
                    /**
                     * Creates a shallow copy of a <code>ParameterBlock</code>.  The source and
                     * parameter Vectors are copied by reference -- additions or
                     * changes will be visible to both versions.
                     * @return an Object clone of the <code>ParameterBlock</code>.
                     */
                    // @ts-ignore
                    public shallowClone(): any
                    /**
                     * Creates a copy of a <code>ParameterBlock</code>.  The source and parameter
                     * Vectors are cloned, but the actual sources and parameters are
                     * copied by reference.  This allows modifications to the order
                     * and number of sources and parameters in the clone to be invisible
                     * to the original <code>ParameterBlock</code>.  Changes to the shared sources or
                     * parameters themselves will still be visible.
                     * @return an Object clone of the <code>ParameterBlock</code>.
                     */
                    // @ts-ignore
                    public clone(): any
                    /**
                     * Adds an image to end of the list of sources.  The image is
                     * stored as an object in order to allow new node types in the
                     * future.
                     * @param source an image object to be stored in the source list.
                     * @return a new <code>ParameterBlock</code> containing the specified
                     *          <code>source</code>.
                     */
                    // @ts-ignore
                    public addSource(source: java.lang.Object | any): java.awt.image.renderable.ParameterBlock
                    /**
                     * Returns a source as a general Object.  The caller must cast it into
                     * an appropriate type.
                     * @param index the index of the source to be returned.
                     * @return an <code>Object</code> that represents the source located
                     *          at the specified index in the <code>sources</code>
                     *          <code>Vector</code>.
                     * @see #setSource(Object, int)
                     */
                    // @ts-ignore
                    public getSource(index: number /*int*/): any
                    /**
                     * Replaces an entry in the list of source with a new source.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param source the specified source image
                     * @param index the index into the <code>sources</code>
                     *               <code>Vector</code> at which to
                     *               insert the specified <code>source</code>
                     * @return a new <code>ParameterBlock</code> that contains the
                     *          specified <code>source</code> at the specified
                     *          <code>index</code>.
                     * @see #getSource(int)
                     */
                    // @ts-ignore
                    public setSource(source: java.lang.Object | any, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Returns a source as a <code>RenderedImage</code>.  This method is
                     * a convenience method.
                     * An exception will be thrown if the source is not a RenderedImage.
                     * @param index the index of the source to be returned
                     * @return a <code>RenderedImage</code> that represents the source
                     *          image that is at the specified index in the
                     *          <code>sources</code> <code>Vector</code>.
                     */
                    // @ts-ignore
                    public getRenderedSource(index: number /*int*/): java.awt.image.RenderedImage
                    /**
                     * Returns a source as a RenderableImage.  This method is a
                     * convenience method.
                     * An exception will be thrown if the sources is not a RenderableImage.
                     * @param index the index of the source to be returned
                     * @return a <code>RenderableImage</code> that represents the source
                     *          image that is at the specified index in the
                     *          <code>sources</code> <code>Vector</code>.
                     */
                    // @ts-ignore
                    public getRenderableSource(index: number /*int*/): java.awt.image.renderable.RenderableImage
                    /**
                     * Returns the number of source images.
                     * @return the number of source images in the <code>sources</code>
                     *          <code>Vector</code>.
                     */
                    // @ts-ignore
                    public getNumSources(): number /*int*/
                    /**
                     * Returns the entire Vector of sources.
                     * @return the <code>sources</code> <code>Vector</code>.
                     * @see #setSources(Vector)
                     */
                    // @ts-ignore
                    public getSources(): java.util.Vector<java.lang.Object | any>
                    /**
                     * Sets the entire Vector of sources to a given Vector.
                     * @param sources the <code>Vector</code> of source images
                     * @see #getSources
                     */
                    // @ts-ignore
                    public setSources(sources: java.util.Vector<java.lang.Object | any>): void
                    /**
                     * Clears the list of source images.
                     */
                    // @ts-ignore
                    public removeSources(): void
                    /**
                     * Returns the number of parameters (not including source images).
                     * @return the number of parameters in the <code>parameters</code>
                     *          <code>Vector</code>.
                     */
                    // @ts-ignore
                    public getNumParameters(): number /*int*/
                    /**
                     * Returns the entire Vector of parameters.
                     * @return the <code>parameters</code> <code>Vector</code>.
                     * @see #setParameters(Vector)
                     */
                    // @ts-ignore
                    public getParameters(): java.util.Vector<java.lang.Object | any>
                    /**
                     * Sets the entire Vector of parameters to a given Vector.
                     * @param parameters the specified <code>Vector</code> of
                     *         parameters
                     * @see #getParameters
                     */
                    // @ts-ignore
                    public setParameters(parameters: java.util.Vector<java.lang.Object | any>): void
                    /**
                     * Clears the list of parameters.
                     */
                    // @ts-ignore
                    public removeParameters(): void
                    /**
                     * Adds an object to the list of parameters.
                     * @param obj the <code>Object</code> to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(obj: java.lang.Object | any): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Byte to the list of parameters.
                     * @param b the byte to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(b: number /*byte*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Character to the list of parameters.
                     * @param c the char to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(c: string): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Short to the list of parameters.
                     * @param s the short to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(s: number /*short*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Integer to the list of parameters.
                     * @param i the int to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(i: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Long to the list of parameters.
                     * @param l the long to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(l: number /*long*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Float to the list of parameters.
                     * @param f the float to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(f: number /*float*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Adds a Double to the list of parameters.
                     * @param d the double to add to the
                     *             <code>parameters</code> <code>Vector</code>
                     * @return a new <code>ParameterBlock</code> containing
                     *          the specified parameter.
                     */
                    // @ts-ignore
                    public add(d: number /*double*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param obj the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(obj: java.lang.Object | any, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with a Byte.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param b the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(b: number /*byte*/, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with a Character.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param c the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(c: string, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with a Short.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param s the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(s: number /*short*/, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with an Integer.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param i the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(i: number /*int*/, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with a Long.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param l the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(l: number /*long*/, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with a Float.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param f the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(f: number /*float*/, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Replaces an Object in the list of parameters with a Double.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     * @param d the parameter that replaces the
                     *         parameter at the specified index in the
                     *         <code>parameters</code> <code>Vector</code>
                     * @param index the index of the parameter to be
                     *         replaced with the specified parameter
                     * @return a new <code>ParameterBlock</code> containing
                     *         the specified parameter.
                     */
                    // @ts-ignore
                    public set(d: number /*double*/, index: number /*int*/): java.awt.image.renderable.ParameterBlock
                    /**
                     * Gets a parameter as an object.
                     * @param index the index of the parameter to get
                     * @return an <code>Object</code> representing the
                     *          the parameter at the specified index
                     *          into the <code>parameters</code>
                     *          <code>Vector</code>.
                     */
                    // @ts-ignore
                    public getObjectParameter(index: number /*int*/): any
                    /**
                     * A convenience method to return a parameter as a byte.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Byte</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>byte</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Byte</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getByteParameter(index: number /*int*/): number /*byte*/
                    /**
                     * A convenience method to return a parameter as a char.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Character</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>char</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Character</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getCharParameter(index: number /*int*/): string
                    /**
                     * A convenience method to return a parameter as a short.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Short</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>short</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Short</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getShortParameter(index: number /*int*/): number /*short*/
                    /**
                     * A convenience method to return a parameter as an int.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not an <code>Integer</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>int</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Integer</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getIntParameter(index: number /*int*/): number /*int*/
                    /**
                     * A convenience method to return a parameter as a long.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Long</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>long</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Long</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getLongParameter(index: number /*int*/): number /*long*/
                    /**
                     * A convenience method to return a parameter as a float.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Float</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>float</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Float</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getFloatParameter(index: number /*int*/): number /*float*/
                    /**
                     * A convenience method to return a parameter as a double.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Double</code>.
                     * @param index the index of the parameter to be returned.
                     * @return the parameter at the specified index
                     *          as a <code>double</code> value.
                     * @throws ClassCastException if the parameter at the
                     *          specified index is not a <code>Double</code>
                     * @throws NullPointerException if the parameter at the specified
                     *          index is <code>null</code>
                     * @throws ArrayIndexOutOfBoundsException if <code>index</code>
                     *          is negative or not less than the current size of this
                     *          <code>ParameterBlock</code> object
                     */
                    // @ts-ignore
                    public getDoubleParameter(index: number /*int*/): number /*double*/
                    /**
                     * Returns an array of Class objects describing the types
                     * of the parameters.
                     * @return an array of <code>Class</code> objects.
                     */
                    // @ts-ignore
                    public getParamClasses(): java.lang.Class<any>[]
                }
            }
        }
    }
}
