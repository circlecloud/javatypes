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
                abstract class SynthPainter extends java.lang.Object {
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
                    public paintArrowButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintArrowButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintArrowButtonForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, direction: number /*int*/): void
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
                    public paintButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintCheckBoxMenuItemBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintCheckBoxMenuItemBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintCheckBoxBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintCheckBoxBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintColorChooserBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintColorChooserBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintComboBoxBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintComboBoxBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintDesktopIconBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintDesktopIconBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintDesktopPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintDesktopPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintEditorPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintEditorPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintFileChooserBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintFileChooserBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintFormattedTextFieldBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintFormattedTextFieldBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintInternalFrameTitlePaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintInternalFrameTitlePaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintInternalFrameBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintInternalFrameBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintLabelBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintLabelBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintListBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintListBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintMenuBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintMenuBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintMenuItemBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintMenuItemBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintMenuBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintMenuBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintOptionPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintOptionPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintPanelBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintPanelBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintPasswordFieldBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintPasswordFieldBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintPopupMenuBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintPopupMenuBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintProgressBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintProgressBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintProgressBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintProgressBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintProgressBarForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintRadioButtonMenuItemBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintRadioButtonMenuItemBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintRadioButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintRadioButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintRootPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintRootPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintScrollBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintScrollBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintScrollBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintScrollBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintScrollBarThumbBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintScrollBarThumbBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintScrollBarTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintScrollBarTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintScrollBarTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintScrollBarTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintScrollPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintScrollPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSeparatorBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSeparatorBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSeparatorBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSeparatorBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSeparatorForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSliderBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSliderBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSliderBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSliderBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSliderThumbBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSliderThumbBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSliderTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSliderTrackBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSliderTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSliderTrackBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSpinnerBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSpinnerBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSplitPaneDividerBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSplitPaneDividerBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSplitPaneDividerForeground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSplitPaneDragDivider(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintSplitPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintSplitPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTabbedPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTabbedPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTabbedPaneTabAreaBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTabbedPaneTabAreaBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintTabbedPaneTabAreaBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTabbedPaneTabAreaBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintTabbedPaneTabBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/): void
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
                    public paintTabbedPaneTabBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/, orientation: number /*int*/): void
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
                    public paintTabbedPaneTabBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/): void
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
                    public paintTabbedPaneTabBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, tabIndex: number /*int*/, orientation: number /*int*/): void
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
                    public paintTabbedPaneContentBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTabbedPaneContentBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTableHeaderBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTableHeaderBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTableBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTableBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTextAreaBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTextAreaBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTextPaneBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTextPaneBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTextFieldBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTextFieldBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToggleButtonBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToggleButtonBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintToolBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintToolBarContentBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarContentBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintToolBarContentBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarContentBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintToolBarDragWindowBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarDragWindowBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintToolBarDragWindowBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolBarDragWindowBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, orientation: number /*int*/): void
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
                    public paintToolTipBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintToolTipBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTreeBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTreeBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTreeCellBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTreeCellBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintTreeCellFocus(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintViewportBackground(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    public paintViewportBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                }
            }
        }
    }
}
