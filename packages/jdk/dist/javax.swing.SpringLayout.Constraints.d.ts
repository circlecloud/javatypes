declare namespace javax {
    namespace swing {
        namespace SpringLayout {
            /**
             * A <code>Constraints</code> object holds the
             * constraints that govern the way a component's size and position
             * change in a container controlled by a <code>SpringLayout</code>.
             * A <code>Constraints</code> object is
             * like a <code>Rectangle</code>, in that it
             * has <code>x</code>, <code>y</code>,
             * <code>width</code>, and <code>height</code> properties.
             * In the <code>Constraints</code> object, however,
             * these properties have
             * <code>Spring</code> values instead of integers.
             * In addition,
             * a <code>Constraints</code> object
             * can be manipulated as four edges
             * -- north, south, east, and west --
             * using the <code>constraint</code> property.
             * <p>
             * The following formulas are always true
             * for a <code>Constraints</code> object (here WEST and <code>x</code> are synonyms, as are and NORTH and <code>y</code>):
             * <pre>
             * EAST = WEST + WIDTH
             * SOUTH = NORTH + HEIGHT
             * HORIZONTAL_CENTER = WEST + WIDTH/2
             * VERTICAL_CENTER = NORTH + HEIGHT/2
             * ABSOLUTE_BASELINE = NORTH + RELATIVE_BASELINE*
             * </pre>
             * <p>
             * For example, if you have specified the WIDTH and WEST (X) location
             * the EAST is calculated as WEST + WIDTH.  If you instead specified
             * the WIDTH and EAST locations the WEST (X) location is then calculated
             * as EAST - WIDTH.
             * <p>
             * [RELATIVE_BASELINE is a private constraint that is set automatically when
             * the SpringLayout.Constraints(Component) constructor is called or when
             * a constraints object is registered with a SpringLayout object.]
             * <p>
             * <b>Note</b>: In this document,
             * operators represent methods
             * in the <code>Spring</code> class.
             * For example, "a + b" is equal to
             * <code>Spring.sum(a, b)</code>,
             * and "a - b" is equal to
             * <code>Spring.sum(a, Spring.minus(b))</code>.
             * See the
             * {@link Spring Spring API documentation}
             * for further details
             * of spring arithmetic.
             * <p>
             * Because a <code>Constraints</code> object's properties --
             * representing its edges, size, and location -- can all be set
             * independently and yet are interrelated,
             * a <code>Constraints</code> object can become <em>over-constrained</em>.
             * For example, if the <code>WEST</code>, <code>WIDTH</code> and
             * <code>EAST</code> edges are all set, steps must be taken to ensure that
             * the first of the formulas above holds.  To do this, the
             * <code>Constraints</code>
             * object throws away the <em>least recently set</em>
             * constraint so as to make the formulas hold.
             * @since 1.4
             */
            // @ts-ignore
            class Constraints extends java.lang.Object {
                /**
                 * Creates an empty <code>Constraints</code> object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>Constraints</code> object with the
                 * specified values for its
                 * <code>x</code> and <code>y</code> properties.
                 * The <code>height</code> and <code>width</code> springs
                 * have <code>null</code> values.
                 * @param x  the spring controlling the component's <em>x</em> value
                 * @param y  the spring controlling the component's <em>y</em> value
                 */
                // @ts-ignore
                constructor(x: javax.swing.Spring, y: javax.swing.Spring)
                /**
                 * Creates a <code>Constraints</code> object with the
                 * specified values for its
                 * <code>x</code>, <code>y</code>, <code>width</code>,
                 * and <code>height</code> properties.
                 * Note: If the <code>SpringLayout</code> class
                 * encounters <code>null</code> values in the
                 * <code>Constraints</code> object of a given component,
                 * it replaces them with suitable defaults.
                 * @param x  the spring value for the <code>x</code> property
                 * @param y  the spring value for the <code>y</code> property
                 * @param width  the spring value for the <code>width</code> property
                 * @param height  the spring value for the <code>height</code> property
                 */
                // @ts-ignore
                constructor(x: javax.swing.Spring, y: javax.swing.Spring, width: javax.swing.Spring, height: javax.swing.Spring)
                /**
                 * Creates a <code>Constraints</code> object with
                 * suitable <code>x</code>, <code>y</code>, <code>width</code> and
                 * <code>height</code> springs for component, <code>c</code>.
                 * The <code>x</code> and <code>y</code> springs are constant
                 * springs  initialised with the component's location at
                 * the time this method is called. The <code>width</code> and
                 * <code>height</code> springs are special springs, created by
                 * the <code>Spring.width()</code> and <code>Spring.height()</code>
                 * methods, which track the size characteristics of the component
                 * when they change.
                 * @param c  the component whose characteristics will be reflected by this Constraints object
                 * @throws NullPointerException if <code>c</code> is null.
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(c: java.awt.Component)
                /**
                 * Sets the <code>x</code> property,
                 * which controls the <code>x</code> value
                 * of a component's location.
                 * @param x the spring controlling the <code>x</code> value
                 *           of a component's location
                 * @see #getX
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                setX(x: javax.swing.Spring): void
                /**
                 * Returns the value of the <code>x</code> property.
                 * @return the spring controlling the <code>x</code> value
                 *          of a component's location
                 * @see #setX
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                getX(): javax.swing.Spring
                /**
                 * Sets the <code>y</code> property,
                 * which controls the <code>y</code> value
                 * of a component's location.
                 * @param y the spring controlling the <code>y</code> value
                 *           of a component's location
                 * @see #getY
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                setY(y: javax.swing.Spring): void
                /**
                 * Returns the value of the <code>y</code> property.
                 * @return the spring controlling the <code>y</code> value
                 *          of a component's location
                 * @see #setY
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                getY(): javax.swing.Spring
                /**
                 * Sets the <code>width</code> property,
                 * which controls the width of a component.
                 * @param width the spring controlling the width of this
                 *  <code>Constraints</code> object
                 * @see #getWidth
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                setWidth(width: javax.swing.Spring): void
                /**
                 * Returns the value of the <code>width</code> property.
                 * @return the spring controlling the width of a component
                 * @see #setWidth
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                getWidth(): javax.swing.Spring
                /**
                 * Sets the <code>height</code> property,
                 * which controls the height of a component.
                 * @param height the spring controlling the height of this <code>Constraints</code>
                 *  object
                 * @see #getHeight
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                setHeight(height: javax.swing.Spring): void
                /**
                 * Returns the value of the <code>height</code> property.
                 * @return the spring controlling the height of a component
                 * @see #setHeight
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                getHeight(): javax.swing.Spring
                /**
                 * Sets the spring controlling the specified edge.
                 * The edge must have one of the following values:
                 * <code>SpringLayout.NORTH</code>,
                 * <code>SpringLayout.SOUTH</code>,
                 * <code>SpringLayout.EAST</code>,
                 * <code>SpringLayout.WEST</code>,
                 * <code>SpringLayout.HORIZONTAL_CENTER</code>,
                 * <code>SpringLayout.VERTICAL_CENTER</code>,
                 * <code>SpringLayout.BASELINE</code>,
                 * <code>SpringLayout.WIDTH</code> or
                 * <code>SpringLayout.HEIGHT</code>.
                 * For any other <code>String</code> value passed as the edge,
                 * no action is taken. For a <code>null</code> edge, a
                 * <code>NullPointerException</code> is thrown.
                 * <p>
                 * <b>Note:</b> This method can affect {@code x} and {@code y} values
                 * previously set for this {@code Constraints}.
                 * @param edgeName the edge to be set
                 * @param s the spring controlling the specified edge
                 * @throws NullPointerException if <code>edgeName</code> is <code>null</code>
                 * @see #getConstraint
                 * @see #NORTH
                 * @see #SOUTH
                 * @see #EAST
                 * @see #WEST
                 * @see #HORIZONTAL_CENTER
                 * @see #VERTICAL_CENTER
                 * @see #BASELINE
                 * @see #WIDTH
                 * @see #HEIGHT
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                setConstraint(edgeName: string, s: javax.swing.Spring): void
                /**
                 * Returns the value of the specified edge, which may be
                 * a derived value, or even <code>null</code>.
                 * The edge must have one of the following values:
                 * <code>SpringLayout.NORTH</code>,
                 * <code>SpringLayout.SOUTH</code>,
                 * <code>SpringLayout.EAST</code>,
                 * <code>SpringLayout.WEST</code>,
                 * <code>SpringLayout.HORIZONTAL_CENTER</code>,
                 * <code>SpringLayout.VERTICAL_CENTER</code>,
                 * <code>SpringLayout.BASELINE</code>,
                 * <code>SpringLayout.WIDTH</code> or
                 * <code>SpringLayout.HEIGHT</code>.
                 * For any other <code>String</code> value passed as the edge,
                 * <code>null</code> will be returned. Throws
                 * <code>NullPointerException</code> for a <code>null</code> edge.
                 * @param edgeName the edge whose value
                 *                  is to be returned
                 * @return the spring controlling the specified edge, may be <code>null</code>
                 * @throws NullPointerException if <code>edgeName</code> is <code>null</code>
                 * @see #setConstraint
                 * @see #NORTH
                 * @see #SOUTH
                 * @see #EAST
                 * @see #WEST
                 * @see #HORIZONTAL_CENTER
                 * @see #VERTICAL_CENTER
                 * @see #BASELINE
                 * @see #WIDTH
                 * @see #HEIGHT
                 * @see SpringLayout.Constraints
                 */
                // @ts-ignore
                getConstraint(edgeName: string): javax.swing.Spring
            }
        }
    }
}
