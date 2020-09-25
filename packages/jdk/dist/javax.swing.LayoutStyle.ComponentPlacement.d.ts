declare namespace javax {
    namespace swing {
        namespace LayoutStyle {
            /**
             * <code>ComponentPlacement</code> is an enumeration of the
             * possible ways two components can be placed relative to each
             * other.  <code>ComponentPlacement</code> is used by the
             * <code>LayoutStyle</code> method <code>getPreferredGap</code>.  Refer to
             * <code>LayoutStyle</code> for more information.
             * @see LayoutStyle#getPreferredGap(JComponent,JComponent,
             *       ComponentPlacement,int,Container)
             * @since 1.6
             */
            // @ts-ignore
            class ComponentPlacement extends java.lang.Enum<javax.swing.LayoutStyle.ComponentPlacement> {
                /**
                 * Enumeration value indicating the two components are
                 * visually related and will be placed in the same parent.
                 * For example, a <code>JLabel</code> providing a label for a
                 * <code>JTextField</code> is typically visually associated
                 * with the <code>JTextField</code>; the constant <code>RELATED</code>
                 * is used for this.
                 */
                // @ts-ignore
                public static readonly RELATED: javax.swing.LayoutStyle.ComponentPlacement
                /**
                 * Enumeration value indicating the two components are
                 * visually unrelated and will be placed in the same parent.
                 * For example, groupings of components are usually visually
                 * separated; the constant <code>UNRELATED</code> is used for this.
                 */
                // @ts-ignore
                public static readonly UNRELATED: javax.swing.LayoutStyle.ComponentPlacement
                /**
                 * Enumeration value indicating the distance to indent a component
                 * is being requested.  For example, often times the children of
                 * a label will be horizontally indented from the label.  To determine
                 * the preferred distance for such a gap use the
                 * <code>INDENT</code> type.
                 * <p>
                 * This value is typically only useful with a direction of
                 * <code>EAST</code> or <code>WEST</code>.
                 */
                // @ts-ignore
                public static readonly INDENT: javax.swing.LayoutStyle.ComponentPlacement
                // @ts-ignore
                public static values(): javax.swing.LayoutStyle.ComponentPlacement[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.swing.LayoutStyle.ComponentPlacement
            }
        }
    }
}
