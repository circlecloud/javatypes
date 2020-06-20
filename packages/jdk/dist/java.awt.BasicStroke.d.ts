declare namespace java {
    namespace awt {
        /**
         * The <code>BasicStroke</code> class defines a basic set of rendering
         * attributes for the outlines of graphics primitives, which are rendered
         * with a {@link Graphics2D} object that has its Stroke attribute set to
         * this <code>BasicStroke</code>.
         * The rendering attributes defined by <code>BasicStroke</code> describe
         * the shape of the mark made by a pen drawn along the outline of a
         * {@link Shape} and the decorations applied at the ends and joins of
         * path segments of the <code>Shape</code>.
         * These rendering attributes include:
         * <dl>
         * <dt><i>width</i>
         * <dd>The pen width, measured perpendicularly to the pen trajectory.
         * <dt><i>end caps</i>
         * <dd>The decoration applied to the ends of unclosed subpaths and
         * dash segments.  Subpaths that start and end on the same point are
         * still considered unclosed if they do not have a CLOSE segment.
         * See {@link java.awt.geom.PathIterator#SEG_CLOSE SEG_CLOSE}
         * for more information on the CLOSE segment.
         * The three different decorations are: {@link #CAP_BUTT},
         * {@link #CAP_ROUND}, and {@link #CAP_SQUARE}.
         * <dt><i>line joins</i>
         * <dd>The decoration applied at the intersection of two path segments
         * and at the intersection of the endpoints of a subpath that is closed
         * using {@link java.awt.geom.PathIterator#SEG_CLOSE SEG_CLOSE}.
         * The three different decorations are: {@link #JOIN_BEVEL},
         * {@link #JOIN_MITER}, and {@link #JOIN_ROUND}.
         * <dt><i>miter limit</i>
         * <dd>The limit to trim a line join that has a JOIN_MITER decoration.
         * A line join is trimmed when the ratio of miter length to stroke
         * width is greater than the miterlimit value.  The miter length is
         * the diagonal length of the miter, which is the distance between
         * the inside corner and the outside corner of the intersection.
         * The smaller the angle formed by two line segments, the longer
         * the miter length and the sharper the angle of intersection.  The
         * default miterlimit value of 10.0f causes all angles less than
         * 11 degrees to be trimmed.  Trimming miters converts
         * the decoration of the line join to bevel.
         * <dt><i>dash attributes</i>
         * <dd>The definition of how to make a dash pattern by alternating
         * between opaque and transparent sections.
         * </dl>
         * All attributes that specify measurements and distances controlling
         * the shape of the returned outline are measured in the same
         * coordinate system as the original unstroked <code>Shape</code>
         * argument.  When a <code>Graphics2D</code> object uses a
         * <code>Stroke</code> object to redefine a path during the execution
         * of one of its <code>draw</code> methods, the geometry is supplied
         * in its original form before the <code>Graphics2D</code> transform
         * attribute is applied.  Therefore, attributes such as the pen width
         * are interpreted in the user space coordinate system of the
         * <code>Graphics2D</code> object and are subject to the scaling and
         * shearing effects of the user-space-to-device-space transform in that
         * particular <code>Graphics2D</code>.
         * For example, the width of a rendered shape's outline is determined
         * not only by the width attribute of this <code>BasicStroke</code>,
         * but also by the transform attribute of the
         * <code>Graphics2D</code> object.  Consider this code:
         * <blockquote><tt>
         * // sets the Graphics2D object's Transform attribute
         * g2d.scale(10, 10);
         * // sets the Graphics2D object's Stroke attribute
         * g2d.setStroke(new BasicStroke(1.5f));
         * </tt></blockquote>
         * Assuming there are no other scaling transforms added to the
         * <code>Graphics2D</code> object, the resulting line
         * will be approximately 15 pixels wide.
         * As the example code demonstrates, a floating-point line
         * offers better precision, especially when large transforms are
         * used with a <code>Graphics2D</code> object.
         * When a line is diagonal, the exact width depends on how the
         * rendering pipeline chooses which pixels to fill as it traces the
         * theoretical widened outline.  The choice of which pixels to turn
         * on is affected by the antialiasing attribute because the
         * antialiasing rendering pipeline can choose to color
         * partially-covered pixels.
         * <p>
         * For more information on the user space coordinate system and the
         * rendering process, see the <code>Graphics2D</code> class comments.
         * @see Graphics2D
         * @author Jim Graham
         */
        // @ts-ignore
        class BasicStroke extends java.lang.Object implements java.awt.Stroke {
            /**
             * Constructs a new <code>BasicStroke</code> with the specified
             * attributes.
             * @param width the width of this <code>BasicStroke</code>.  The
             *          width must be greater than or equal to 0.0f.  If width is
             *          set to 0.0f, the stroke is rendered as the thinnest
             *          possible line for the target device and the antialias
             *          hint setting.
             * @param cap the decoration of the ends of a <code>BasicStroke</code>
             * @param join the decoration applied where path segments meet
             * @param miterlimit the limit to trim the miter join.  The miterlimit
             *         must be greater than or equal to 1.0f.
             * @param dash the array representing the dashing pattern
             * @param dash_phase the offset to start the dashing pattern
             * @throws IllegalArgumentException if <code>width</code> is negative
             * @throws IllegalArgumentException if <code>cap</code> is not either
             *          CAP_BUTT, CAP_ROUND or CAP_SQUARE
             * @throws IllegalArgumentException if <code>miterlimit</code> is less
             *          than 1 and <code>join</code> is JOIN_MITER
             * @throws IllegalArgumentException if <code>join</code> is not
             *          either JOIN_ROUND, JOIN_BEVEL, or JOIN_MITER
             * @throws IllegalArgumentException if <code>dash_phase</code>
             *          is negative and <code>dash</code> is not <code>null</code>
             * @throws IllegalArgumentException if the length of
             *          <code>dash</code> is zero
             * @throws IllegalArgumentException if dash lengths are all zero.
             */
            // @ts-ignore
            constructor(width: number /*float*/, cap: number /*int*/, join: number /*int*/, miterlimit: number /*float*/, dash: number /*float*/[], dash_phase: number /*float*/)
            /**
             * Constructs a solid <code>BasicStroke</code> with the specified
             * attributes.
             * @param width the width of the <code>BasicStroke</code>
             * @param cap the decoration of the ends of a <code>BasicStroke</code>
             * @param join the decoration applied where path segments meet
             * @param miterlimit the limit to trim the miter join
             * @throws IllegalArgumentException if <code>width</code> is negative
             * @throws IllegalArgumentException if <code>cap</code> is not either
             *          CAP_BUTT, CAP_ROUND or CAP_SQUARE
             * @throws IllegalArgumentException if <code>miterlimit</code> is less
             *          than 1 and <code>join</code> is JOIN_MITER
             * @throws IllegalArgumentException if <code>join</code> is not
             *          either JOIN_ROUND, JOIN_BEVEL, or JOIN_MITER
             */
            // @ts-ignore
            constructor(width: number /*float*/, cap: number /*int*/, join: number /*int*/, miterlimit: number /*float*/)
            /**
             * Constructs a solid <code>BasicStroke</code> with the specified
             * attributes.  The <code>miterlimit</code> parameter is
             * unnecessary in cases where the default is allowable or the
             * line joins are not specified as JOIN_MITER.
             * @param width the width of the <code>BasicStroke</code>
             * @param cap the decoration of the ends of a <code>BasicStroke</code>
             * @param join the decoration applied where path segments meet
             * @throws IllegalArgumentException if <code>width</code> is negative
             * @throws IllegalArgumentException if <code>cap</code> is not either
             *          CAP_BUTT, CAP_ROUND or CAP_SQUARE
             * @throws IllegalArgumentException if <code>join</code> is not
             *          either JOIN_ROUND, JOIN_BEVEL, or JOIN_MITER
             */
            // @ts-ignore
            constructor(width: number /*float*/, cap: number /*int*/, join: number /*int*/)
            /**
             * Constructs a solid <code>BasicStroke</code> with the specified
             * line width and with default values for the cap and join
             * styles.
             * @param width the width of the <code>BasicStroke</code>
             * @throws IllegalArgumentException if <code>width</code> is negative
             */
            // @ts-ignore
            constructor(width: number /*float*/)
            /**
             * Constructs a new <code>BasicStroke</code> with defaults for all
             * attributes.
             * The default attributes are a solid line of width 1.0, CAP_SQUARE,
             * JOIN_MITER, a miter limit of 10.0.
             */
            // @ts-ignore
            constructor()
            /**
             * Joins path segments by extending their outside edges until
             * they meet.
             */
            // @ts-ignore
            readonly JOIN_MITER: number /*int*/
            /**
             * Joins path segments by rounding off the corner at a radius
             * of half the line width.
             */
            // @ts-ignore
            readonly JOIN_ROUND: number /*int*/
            /**
             * Joins path segments by connecting the outer corners of their
             * wide outlines with a straight segment.
             */
            // @ts-ignore
            readonly JOIN_BEVEL: number /*int*/
            /**
             * Ends unclosed subpaths and dash segments with no added
             * decoration.
             */
            // @ts-ignore
            readonly CAP_BUTT: number /*int*/
            /**
             * Ends unclosed subpaths and dash segments with a round
             * decoration that has a radius equal to half of the width
             * of the pen.
             */
            // @ts-ignore
            readonly CAP_ROUND: number /*int*/
            /**
             * Ends unclosed subpaths and dash segments with a square
             * projection that extends beyond the end of the segment
             * to a distance equal to half of the line width.
             */
            // @ts-ignore
            readonly CAP_SQUARE: number /*int*/
            /**
             * Returns a <code>Shape</code> whose interior defines the
             * stroked outline of a specified <code>Shape</code>.
             * @param s the <code>Shape</code> boundary be stroked
             * @return the <code>Shape</code> of the stroked outline.
             */
            // @ts-ignore
            createStrokedShape(s: java.awt.Shape): java.awt.Shape
            /**
             * Returns the line width.  Line width is represented in user space,
             * which is the default-coordinate space used by Java 2D.  See the
             * <code>Graphics2D</code> class comments for more information on
             * the user space coordinate system.
             * @return the line width of this <code>BasicStroke</code>.
             * @see Graphics2D
             */
            // @ts-ignore
            getLineWidth(): float
            /**
             * Returns the end cap style.
             * @return the end cap style of this <code>BasicStroke</code> as one
             *  of the static <code>int</code> values that define possible end cap
             *  styles.
             */
            // @ts-ignore
            getEndCap(): int
            /**
             * Returns the line join style.
             * @return the line join style of the <code>BasicStroke</code> as one
             *  of the static <code>int</code> values that define possible line
             *  join styles.
             */
            // @ts-ignore
            getLineJoin(): int
            /**
             * Returns the limit of miter joins.
             * @return the limit of miter joins of the <code>BasicStroke</code>.
             */
            // @ts-ignore
            getMiterLimit(): float
            /**
             * Returns the array representing the lengths of the dash segments.
             * Alternate entries in the array represent the user space lengths
             * of the opaque and transparent segments of the dashes.
             * As the pen moves along the outline of the <code>Shape</code>
             * to be stroked, the user space
             * distance that the pen travels is accumulated.  The distance
             * value is used to index into the dash array.
             * The pen is opaque when its current cumulative distance maps
             * to an even element of the dash array and transparent otherwise.
             * @return the dash array.
             */
            // @ts-ignore
            getDashArray(): float[]
            /**
             * Returns the current dash phase.
             * The dash phase is a distance specified in user coordinates that
             * represents an offset into the dashing pattern. In other words, the dash
             * phase defines the point in the dashing pattern that will correspond to
             * the beginning of the stroke.
             * @return the dash phase as a <code>float</code> value.
             */
            // @ts-ignore
            getDashPhase(): float
            /**
             * Returns the hashcode for this stroke.
             * @return a hash code for this stroke.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Tests if a specified object is equal to this <code>BasicStroke</code>
             * by first testing if it is a <code>BasicStroke</code> and then comparing
             * its width, join, cap, miter limit, dash, and dash phase attributes with
             * those of this <code>BasicStroke</code>.
             * @param obj the specified object to compare to this
             *               <code>BasicStroke</code>
             * @return <code>true</code> if the width, join, cap, miter limit, dash, and
             *             dash phase are the same for both objects;
             *             <code>false</code> otherwise.
             */
            // @ts-ignore
            equals(obj: any): boolean
        }
    }
}
