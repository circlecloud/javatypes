declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * <code>SynthPainter</code> is used for painting portions of
                 * <code>JComponent</code>s. At a minimum each <code>JComponent</code>
                 * has two paint methods: one for the border and one for the background. Some
                 * <code>JComponent</code>s have more than one <code>Region</code>, and as
                 * a consequence more paint methods.
                 * <p>
                 * Instances of <code>SynthPainter</code> are obtained from the
                 * {@link javax.swing.plaf.synth.SynthStyle#getPainter} method.
                 * <p>
                 * You typically supply a <code>SynthPainter</code> by way of Synth's
                 * <a href="doc-files/synthFileFormat.html">file</a> format. The following
                 * example registers a painter for all <code>JButton</code>s that will
                 * render the image <code>myImage.png</code>:
                 * <pre>
                 * &lt;style id="buttonStyle"&gt;
                 * &lt;imagePainter path="myImage.png" sourceInsets="2 2 2 2"
                 * paintCenter="true" stretch="true"/&gt;
                 * &lt;insets top="2" bottom="2" left="2" right="2"/&gt;
                 * &lt;/style&gt;
                 * &lt;bind style="buttonStyle" type="REGION" key="button"/&gt;
                 * </pre>
                 * <p>
                 * <code>SynthPainter</code> is abstract in so far as it does no painting,
                 * all the methods
                 * are empty. While none of these methods are typed to throw an exception,
                 * subclasses can assume that valid arguments are passed in, and if not
                 * they can throw a <code>NullPointerException</code> or
                 * <code>IllegalArgumentException</code> in response to invalid arguments.
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class SynthPainter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Paints the background of an arrow button. Arrow buttons are created by
                     * some components, such as <code>JScrollBar</code>.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintArrowButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of an arrow button. Arrow buttons are created by
                     * some components, such as <code>JScrollBar</code>.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintArrowButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the foreground of an arrow button. This method is responsible
                     * for drawing a graphical representation of a direction, typically
                     * an arrow. Arrow buttons are created by
                     * some components, such as <code>JScrollBar</code>
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param direction One of SwingConstants.NORTH, SwingConstants.SOUTH
                     *                   SwingConstants.EAST or SwingConstants.WEST
                     */
                    // @ts-ignore
                    paintArrowButtonForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, direction: number /*int*/): void
                    /**
                     * Paints the background of a button.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a button.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a check box menu item.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintCheckBoxMenuItemBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a check box menu item.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintCheckBoxMenuItemBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a check box.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintCheckBoxBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a check box.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintCheckBoxBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a color chooser.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintColorChooserBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a color chooser.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintColorChooserBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a combo box.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintComboBoxBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a combo box.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintComboBoxBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a desktop icon.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintDesktopIconBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a desktop icon.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintDesktopIconBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a desktop pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintDesktopPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a desktop pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintDesktopPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of an editor pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintEditorPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of an editor pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintEditorPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a file chooser.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintFileChooserBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a file chooser.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintFileChooserBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a formatted text field.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintFormattedTextFieldBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a formatted text field.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintFormattedTextFieldBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of an internal frame title pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintInternalFrameTitlePaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of an internal frame title pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintInternalFrameTitlePaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of an internal frame.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintInternalFrameBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of an internal frame.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintInternalFrameBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a label.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintLabelBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a label.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintLabelBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a list.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintListBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a list.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintListBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a menu bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintMenuBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a menu bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintMenuBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a menu item.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintMenuItemBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a menu item.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintMenuItemBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a menu.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintMenuBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a menu.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintMenuBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of an option pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintOptionPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of an option pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintOptionPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a panel.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintPanelBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a panel.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintPanelBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a password field.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintPasswordFieldBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a password field.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintPasswordFieldBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a popup menu.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintPopupMenuBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a popup menu.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintPopupMenuBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a progress bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintProgressBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a progress bar. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation one of <code>JProgressBar.HORIZONTAL</code> or
                     *                     <code>JProgressBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintProgressBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of a progress bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintProgressBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a progress bar. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation one of <code>JProgressBar.HORIZONTAL</code> or
                     *                     <code>JProgressBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintProgressBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the foreground of a progress bar. is responsible for
                     * providing an indication of the progress of the progress bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation one of <code>JProgressBar.HORIZONTAL</code> or
                     *                     <code>JProgressBar.VERTICAL</code>
                     */
                    // @ts-ignore
                    paintProgressBarForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a radio button menu item.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintRadioButtonMenuItemBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a radio button menu item.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintRadioButtonMenuItemBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a radio button.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintRadioButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a radio button.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintRadioButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a root pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintRootPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a root pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintRootPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a scrollbar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintScrollBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a scrollbar. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation Orientation of the JScrollBar, one of
                     *                     <code>JScrollBar.HORIZONTAL</code> or
                     *                     <code>JScrollBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintScrollBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of a scrollbar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintScrollBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a scrollbar. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation Orientation of the JScrollBar, one of
                     *                     <code>JScrollBar.HORIZONTAL</code> or
                     *                     <code>JScrollBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintScrollBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the thumb of a scrollbar. The thumb provides
                     * a graphical indication as to how much of the Component is visible in a
                     * <code>JScrollPane</code>.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation Orientation of the JScrollBar, one of
                     *                     <code>JScrollBar.HORIZONTAL</code> or
                     *                     <code>JScrollBar.VERTICAL</code>
                     */
                    // @ts-ignore
                    paintScrollBarThumbBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the thumb of a scrollbar. The thumb provides
                     * a graphical indication as to how much of the Component is visible in a
                     * <code>JScrollPane</code>.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation Orientation of the JScrollBar, one of
                     *                     <code>JScrollBar.HORIZONTAL</code> or
                     *                     <code>JScrollBar.VERTICAL</code>
                     */
                    // @ts-ignore
                    paintScrollBarThumbBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the track of a scrollbar. The track contains
                     * the thumb.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintScrollBarTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the track of a scrollbar. The track contains
                     * the thumb. This implementation invokes the method of the same name without
                     * the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation Orientation of the JScrollBar, one of
                     *                     <code>JScrollBar.HORIZONTAL</code> or
                     *                     <code>JScrollBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintScrollBarTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the track of a scrollbar. The track contains
                     * the thumb.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintScrollBarTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the track of a scrollbar. The track contains
                     * the thumb. This implementation invokes the method of the same name without
                     * the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation Orientation of the JScrollBar, one of
                     *                     <code>JScrollBar.HORIZONTAL</code> or
                     *                     <code>JScrollBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintScrollBarTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a scroll pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintScrollPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a scroll pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintScrollPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a separator.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSeparatorBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a separator. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSeparator.HORIZONTAL</code> or
                     *                            <code>JSeparator.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSeparatorBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of a separator.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSeparatorBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a separator. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSeparator.HORIZONTAL</code> or
                     *                            <code>JSeparator.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSeparatorBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the foreground of a separator.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSeparator.HORIZONTAL</code> or
                     *                            <code>JSeparator.VERTICAL</code>
                     */
                    // @ts-ignore
                    paintSeparatorForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a slider.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSliderBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a slider. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSlider.HORIZONTAL</code> or
                     *                            <code>JSlider.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSliderBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of a slider.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSliderBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a slider. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSlider.HORIZONTAL</code> or
                     *                            <code>JSlider.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSliderBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the thumb of a slider.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSlider.HORIZONTAL</code> or
                     *                            <code>JSlider.VERTICAL</code>
                     */
                    // @ts-ignore
                    paintSliderThumbBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the thumb of a slider.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSlider.HORIZONTAL</code> or
                     *                            <code>JSlider.VERTICAL</code>
                     */
                    // @ts-ignore
                    paintSliderThumbBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the track of a slider.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSliderTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the track of a slider. This implementation invokes
                     * the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSlider.HORIZONTAL</code> or
                     *                            <code>JSlider.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSliderTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the track of a slider.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSliderTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the track of a slider. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSlider.HORIZONTAL</code> or
                     *                            <code>JSlider.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSliderTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a spinner.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSpinnerBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a spinner.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSpinnerBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the divider of a split pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSplitPaneDividerBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the divider of a split pane. This implementation
                     * invokes the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSplitPane.HORIZONTAL_SPLIT</code> or
                     *                            <code>JSplitPane.VERTICAL_SPLIT</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintSplitPaneDividerBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the foreground of the divider of a split pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSplitPane.HORIZONTAL_SPLIT</code> or
                     *                            <code>JSplitPane.VERTICAL_SPLIT</code>
                     */
                    // @ts-ignore
                    paintSplitPaneDividerForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the divider, when the user is dragging the divider, of a
                     * split pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JSplitPane.HORIZONTAL_SPLIT</code> or
                     *                            <code>JSplitPane.VERTICAL_SPLIT</code>
                     */
                    // @ts-ignore
                    paintSplitPaneDragDivider(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a split pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSplitPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a split pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintSplitPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTabbedPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTabbedPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the area behind the tabs of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTabbedPaneTabAreaBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the area behind the tabs of a tabbed pane.
                     * This implementation invokes the method of the same name without the
                     * orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JTabbedPane.TOP</code>,
                     *                     <code>JTabbedPane.LEFT</code>,
                     *                     <code>JTabbedPane.BOTTOM</code>, or
                     *                     <code>JTabbedPane.RIGHT</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintTabbedPaneTabAreaBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the area behind the tabs of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTabbedPaneTabAreaBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the area behind the tabs of a tabbed pane. This
                     * implementation invokes the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JTabbedPane.TOP</code>,
                     *                     <code>JTabbedPane.LEFT</code>,
                     *                     <code>JTabbedPane.BOTTOM</code>, or
                     *                     <code>JTabbedPane.RIGHT</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintTabbedPaneTabAreaBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a tab of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param tabIndex Index of tab being painted.
                     */
                    // @ts-ignore
                    paintTabbedPaneTabBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/): void
                    /**
                     * Paints the background of a tab of a tabbed pane. This implementation
                     * invokes the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param tabIndex Index of tab being painted.
                     * @param orientation One of <code>JTabbedPane.TOP</code>,
                     *                     <code>JTabbedPane.LEFT</code>,
                     *                     <code>JTabbedPane.BOTTOM</code>, or
                     *                     <code>JTabbedPane.RIGHT</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintTabbedPaneTabBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of a tab of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param tabIndex Index of tab being painted.
                     */
                    // @ts-ignore
                    paintTabbedPaneTabBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/): void
                    /**
                     * Paints the border of a tab of a tabbed pane. This implementation invokes
                     * the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param tabIndex Index of tab being painted.
                     * @param orientation One of <code>JTabbedPane.TOP</code>,
                     *                     <code>JTabbedPane.LEFT</code>,
                     *                     <code>JTabbedPane.BOTTOM</code>, or
                     *                     <code>JTabbedPane.RIGHT</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintTabbedPaneTabBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the area that contains the content of the
                     * selected tab of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTabbedPaneContentBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the area that contains the content of the
                     * selected tab of a tabbed pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTabbedPaneContentBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the header of a table.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTableHeaderBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the header of a table.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTableHeaderBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a table.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTableBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a table.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTableBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a text area.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTextAreaBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a text area.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTextAreaBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a text pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTextPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a text pane.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTextPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a text field.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTextFieldBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a text field.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTextFieldBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a toggle button.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToggleButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a toggle button.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToggleButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a tool bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a tool bar. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JToolBar.HORIZONTAL</code> or
                     *                            <code>JToolBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintToolBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of a tool bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a tool bar. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JToolBar.HORIZONTAL</code> or
                     *                            <code>JToolBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintToolBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the tool bar's content area.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolBarContentBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the tool bar's content area. This implementation
                     * invokes the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JToolBar.HORIZONTAL</code> or
                     *                            <code>JToolBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintToolBarContentBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the content area of a tool bar.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolBarContentBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the content area of a tool bar. This implementation
                     * invokes the method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JToolBar.HORIZONTAL</code> or
                     *                            <code>JToolBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintToolBarContentBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of the window containing the tool bar when it
                     * has been detached from its primary frame.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolBarDragWindowBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the window containing the tool bar when it
                     * has been detached from its primary frame. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JToolBar.HORIZONTAL</code> or
                     *                            <code>JToolBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintToolBarDragWindowBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the border of the window containing the tool bar when it
                     * has been detached from it's primary frame.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolBarDragWindowBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the window containing the tool bar when it
                     * has been detached from it's primary frame. This implementation invokes the
                     * method of the same name without the orientation.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     * @param orientation One of <code>JToolBar.HORIZONTAL</code> or
                     *                            <code>JToolBar.VERTICAL</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    paintToolBarDragWindowBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
                    /**
                     * Paints the background of a tool tip.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolTipBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a tool tip.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintToolTipBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of a tree.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTreeBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a tree.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTreeBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the row containing a cell in a tree.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTreeCellBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of the row containing a cell in a tree.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTreeCellBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the focus indicator for a cell in a tree when it has focus.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintTreeCellFocus(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the background of the viewport.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintViewportBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the border of a viewport.
                     * @param context SynthContext identifying the <code>JComponent</code> and
                     *         <code>Region</code> to paint to
                     * @param g <code>Graphics</code> to paint to
                     * @param x X coordinate of the area to paint to
                     * @param y Y coordinate of the area to paint to
                     * @param w Width of the area to paint to
                     * @param h Height of the area to paint to
                     */
                    // @ts-ignore
                    paintViewportBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                }
            }
        }
    }
}
