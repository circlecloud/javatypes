declare namespace java {
    namespace awt {
        /**
         * A flow layout arranges components in a directional flow, much
         * like lines of text in a paragraph. The flow direction is
         * determined by the container's <code>componentOrientation</code>
         * property and may be one of two values:
         * <ul>
         * <li><code>ComponentOrientation.LEFT_TO_RIGHT</code>
         * <li><code>ComponentOrientation.RIGHT_TO_LEFT</code>
         * </ul>
         * Flow layouts are typically used
         * to arrange buttons in a panel. It arranges buttons
         * horizontally until no more buttons fit on the same line.
         * The line alignment is determined by the <code>align</code>
         * property. The possible values are:
         * <ul>
         * <li>{@link #LEFT LEFT}
         * <li>{@link #RIGHT RIGHT}
         * <li>{@link #CENTER CENTER}
         * <li>{@link #LEADING LEADING}
         * <li>{@link #TRAILING TRAILING}
         * </ul>
         * <p>
         * For example, the following picture shows an applet using the flow
         * layout manager (its default layout manager) to position three buttons:
         * <p>
         * <img src="doc-files/FlowLayout-1.gif"
         * ALT="Graphic of Layout for Three Buttons"
         * style="float:center; margin: 7px 10px;">
         * <p>
         * Here is the code for this applet:
         * <hr><blockquote><pre>
         * import java.awt.*;
         * import java.applet.Applet;
         * public class myButtons extends Applet {
         * Button button1, button2, button3;
         * public void init() {
         * button1 = new Button("Ok");
         * button2 = new Button("Open");
         * button3 = new Button("Close");
         * add(button1);
         * add(button2);
         * add(button3);
         * }
         * }
         * </pre></blockquote><hr>
         * <p>
         * A flow layout lets each component assume its natural (preferred) size.
         * @author Arthur van Hoff
         * @author Sami Shaio
         * @since JDK1.0
         * @see ComponentOrientation
         */
        // @ts-ignore
        class FlowLayout extends java.lang.Object implements java.awt.LayoutManager, java.io.Serializable {
            /**
             * Constructs a new <code>FlowLayout</code> with a centered alignment and a
             * default 5-unit horizontal and vertical gap.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>FlowLayout</code> with the specified
             * alignment and a default 5-unit horizontal and vertical gap.
             * The value of the alignment argument must be one of
             * <code>FlowLayout.LEFT</code>, <code>FlowLayout.RIGHT</code>,
             * <code>FlowLayout.CENTER</code>, <code>FlowLayout.LEADING</code>,
             * or <code>FlowLayout.TRAILING</code>.
             * @param align the alignment value
             */
            // @ts-ignore
            constructor(align: number /*int*/)
            /**
             * Creates a new flow layout manager with the indicated alignment
             * and the indicated horizontal and vertical gaps.
             * <p>
             * The value of the alignment argument must be one of
             * <code>FlowLayout.LEFT</code>, <code>FlowLayout.RIGHT</code>,
             * <code>FlowLayout.CENTER</code>, <code>FlowLayout.LEADING</code>,
             * or <code>FlowLayout.TRAILING</code>.
             * @param align   the alignment value
             * @param hgap    the horizontal gap between components
             *                      and between the components and the
             *                      borders of the <code>Container</code>
             * @param vgap    the vertical gap between components
             *                      and between the components and the
             *                      borders of the <code>Container</code>
             */
            // @ts-ignore
            constructor(align: number /*int*/, hgap: number /*int*/, vgap: number /*int*/)
            /**
             * This value indicates that each row of components
             * should be left-justified.
             */
            // @ts-ignore
            public static readonly LEFT: number /*int*/
            /**
             * This value indicates that each row of components
             * should be centered.
             */
            // @ts-ignore
            public static readonly CENTER: number /*int*/
            /**
             * This value indicates that each row of components
             * should be right-justified.
             */
            // @ts-ignore
            public static readonly RIGHT: number /*int*/
            /**
             * This value indicates that each row of components
             * should be justified to the leading edge of the container's
             * orientation, for example, to the left in left-to-right orientations.
             * @see java.awt.Component#getComponentOrientation
             * @see java.awt.ComponentOrientation
             * @since 1.2
             */
            // @ts-ignore
            public static readonly LEADING: number /*int*/
            /**
             * This value indicates that each row of components
             * should be justified to the trailing edge of the container's
             * orientation, for example, to the right in left-to-right orientations.
             * @see java.awt.Component#getComponentOrientation
             * @see java.awt.ComponentOrientation
             * @since 1.2
             */
            // @ts-ignore
            public static readonly TRAILING: number /*int*/
            /**
             * Gets the alignment for this layout.
             * Possible values are <code>FlowLayout.LEFT</code>,
             * <code>FlowLayout.RIGHT</code>, <code>FlowLayout.CENTER</code>,
             * <code>FlowLayout.LEADING</code>,
             * or <code>FlowLayout.TRAILING</code>.
             * @return the alignment value for this layout
             * @see java.awt.FlowLayout#setAlignment
             * @since JDK1.1
             */
            // @ts-ignore
            public getAlignment(): number /*int*/
            /**
             * Sets the alignment for this layout.
             * Possible values are
             * <ul>
             * <li><code>FlowLayout.LEFT</code>
             * <li><code>FlowLayout.RIGHT</code>
             * <li><code>FlowLayout.CENTER</code>
             * <li><code>FlowLayout.LEADING</code>
             * <li><code>FlowLayout.TRAILING</code>
             * </ul>
             * @param align one of the alignment values shown above
             * @see #getAlignment()
             * @since JDK1.1
             */
            // @ts-ignore
            public setAlignment(align: number /*int*/): void
            /**
             * Gets the horizontal gap between components
             * and between the components and the borders
             * of the <code>Container</code>
             * @return the horizontal gap between components
             *              and between the components and the borders
             *              of the <code>Container</code>
             * @see java.awt.FlowLayout#setHgap
             * @since JDK1.1
             */
            // @ts-ignore
            public getHgap(): number /*int*/
            /**
             * Sets the horizontal gap between components and
             * between the components and the borders of the
             * <code>Container</code>.
             * @param hgap the horizontal gap between components
             *              and between the components and the borders
             *              of the <code>Container</code>
             * @see java.awt.FlowLayout#getHgap
             * @since JDK1.1
             */
            // @ts-ignore
            public setHgap(hgap: number /*int*/): void
            /**
             * Gets the vertical gap between components and
             * between the components and the borders of the
             * <code>Container</code>.
             * @return the vertical gap between components
             *              and between the components and the borders
             *              of the <code>Container</code>
             * @see java.awt.FlowLayout#setVgap
             * @since JDK1.1
             */
            // @ts-ignore
            public getVgap(): number /*int*/
            /**
             * Sets the vertical gap between components and between
             * the components and the borders of the <code>Container</code>.
             * @param vgap the vertical gap between components
             *              and between the components and the borders
             *              of the <code>Container</code>
             * @see java.awt.FlowLayout#getVgap
             * @since JDK1.1
             */
            // @ts-ignore
            public setVgap(vgap: number /*int*/): void
            /**
             * Sets whether or not components should be vertically aligned along their
             * baseline.  Components that do not have a baseline will be centered.
             * The default is false.
             * @param alignOnBaseline whether or not components should be
             *                         vertically aligned on their baseline
             * @since 1.6
             */
            // @ts-ignore
            public setAlignOnBaseline(alignOnBaseline: boolean): void
            /**
             * Returns true if components are to be vertically aligned along
             * their baseline.  The default is false.
             * @return true if components are to be vertically aligned along
             *               their baseline
             * @since 1.6
             */
            // @ts-ignore
            public getAlignOnBaseline(): boolean
            /**
             * Adds the specified component to the layout.
             * Not used by this class.
             * @param name the name of the component
             * @param comp the component to be added
             */
            // @ts-ignore
            public addLayoutComponent(name: java.lang.String | string, comp: java.awt.Component): void
            /**
             * Removes the specified component from the layout.
             * Not used by this class.
             * @param comp the component to remove
             * @see java.awt.Container#removeAll
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void
            /**
             * Returns the preferred dimensions for this layout given the
             * <i>visible</i> components in the specified target container.
             * @param target the container that needs to be laid out
             * @return the preferred dimensions to lay out the
             *             subcomponents of the specified container
             * @see Container
             * @see #minimumLayoutSize
             * @see java.awt.Container#getPreferredSize
             */
            // @ts-ignore
            public preferredLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the minimum dimensions needed to layout the <i>visible</i>
             * components contained in the specified target container.
             * @param target the container that needs to be laid out
             * @return the minimum dimensions to lay out the
             *             subcomponents of the specified container
             * @see #preferredLayoutSize
             * @see java.awt.Container
             * @see java.awt.Container#doLayout
             */
            // @ts-ignore
            public minimumLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Lays out the container. This method lets each
             * <i>visible</i> component take
             * its preferred size by reshaping the components in the
             * target container in order to satisfy the alignment of
             * this <code>FlowLayout</code> object.
             * @param target the specified component being laid out
             * @see Container
             * @see java.awt.Container#doLayout
             */
            // @ts-ignore
            public layoutContainer(target: java.awt.Container): void
            /**
             * Returns a string representation of this <code>FlowLayout</code>
             * object and its values.
             * @return a string representation of this layout
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
