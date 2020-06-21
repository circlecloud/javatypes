declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * A distinct rendering area of a Swing component.  A component may
                 * support one or more regions.  Specific component regions are defined
                 * by the typesafe enumeration in this class.
                 * <p>
                 * Regions are typically used as a way to identify the <code>Component</code>s
                 * and areas a particular style is to apply to. Synth's file format allows you
                 * to bind styles based on the name of a <code>Region</code>.
                 * The name is derived from the field name of the constant:
                 * <ol>
                 * <li>Map all characters to lowercase.
                 * <li>Map the first character to uppercase.
                 * <li>Map the first character after underscores to uppercase.
                 * <li>Remove all underscores.
                 * </ol>
                 * For example, to identify the <code>SPLIT_PANE</code>
                 * <code>Region</code> you would use <code>SplitPane</code>.
                 * The following shows a custom <code>SynthStyleFactory</code>
                 * that returns a specific style for split panes:
                 * <pre>
                 * public SynthStyle getStyle(JComponent c, Region id) {
                 * if (id == Region.SPLIT_PANE) {
                 * return splitPaneStyle;
                 * }
                 * ...
                 * }
                 * </pre>
                 * The following <a href="doc-files/synthFileFormat.html">xml</a>
                 * accomplishes the same thing:
                 * <pre>
                 * &lt;style id="splitPaneStyle"&gt;
                 * ...
                 * &lt;/style&gt;
                 * &lt;bind style="splitPaneStyle" type="region" key="SplitPane"/&gt;
                 * </pre>
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class Region extends java.lang.Object {
                    /**
                     * Creates a Region with the specified name. This should only be
                     * used if you are creating your own <code>JComponent</code> subclass
                     * with a custom <code>ComponentUI</code> class.
                     * @param name Name of the region
                     * @param ui String that will be returned from
                     *            <code>component.getUIClassID</code>. This will be null
                     *            if this is a subregion.
                     * @param subregion Whether or not this is a subregion.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, ui: java.lang.String | string, subregion: boolean)
                    /**
                     * ArrowButton's are special types of buttons that also render a
                     * directional indicator, typically an arrow. ArrowButtons are used by
                     * composite components, for example ScrollBar's contain ArrowButtons.
                     * To bind a style to this <code>Region</code> use the name
                     * <code>ArrowButton</code>.
                     */
                    // @ts-ignore
                    public static readonly ARROW_BUTTON: javax.swing.plaf.synth.Region
                    /**
                     * Button region. To bind a style to this <code>Region</code> use the name
                     * <code>Button</code>.
                     */
                    // @ts-ignore
                    public static readonly BUTTON: javax.swing.plaf.synth.Region
                    /**
                     * CheckBox region. To bind a style to this <code>Region</code> use the name
                     * <code>CheckBox</code>.
                     */
                    // @ts-ignore
                    public static readonly CHECK_BOX: javax.swing.plaf.synth.Region
                    /**
                     * CheckBoxMenuItem region. To bind a style to this <code>Region</code> use
                     * the name <code>CheckBoxMenuItem</code>.
                     */
                    // @ts-ignore
                    public static readonly CHECK_BOX_MENU_ITEM: javax.swing.plaf.synth.Region
                    /**
                     * ColorChooser region. To bind a style to this <code>Region</code> use
                     * the name <code>ColorChooser</code>.
                     */
                    // @ts-ignore
                    public static readonly COLOR_CHOOSER: javax.swing.plaf.synth.Region
                    /**
                     * ComboBox region. To bind a style to this <code>Region</code> use
                     * the name <code>ComboBox</code>.
                     */
                    // @ts-ignore
                    public static readonly COMBO_BOX: javax.swing.plaf.synth.Region
                    /**
                     * DesktopPane region. To bind a style to this <code>Region</code> use
                     * the name <code>DesktopPane</code>.
                     */
                    // @ts-ignore
                    public static readonly DESKTOP_PANE: javax.swing.plaf.synth.Region
                    /**
                     * DesktopIcon region. To bind a style to this <code>Region</code> use
                     * the name <code>DesktopIcon</code>.
                     */
                    // @ts-ignore
                    public static readonly DESKTOP_ICON: javax.swing.plaf.synth.Region
                    /**
                     * EditorPane region. To bind a style to this <code>Region</code> use
                     * the name <code>EditorPane</code>.
                     */
                    // @ts-ignore
                    public static readonly EDITOR_PANE: javax.swing.plaf.synth.Region
                    /**
                     * FileChooser region. To bind a style to this <code>Region</code> use
                     * the name <code>FileChooser</code>.
                     */
                    // @ts-ignore
                    public static readonly FILE_CHOOSER: javax.swing.plaf.synth.Region
                    /**
                     * FormattedTextField region. To bind a style to this <code>Region</code> use
                     * the name <code>FormattedTextField</code>.
                     */
                    // @ts-ignore
                    public static readonly FORMATTED_TEXT_FIELD: javax.swing.plaf.synth.Region
                    /**
                     * InternalFrame region. To bind a style to this <code>Region</code> use
                     * the name <code>InternalFrame</code>.
                     */
                    // @ts-ignore
                    public static readonly INTERNAL_FRAME: javax.swing.plaf.synth.Region
                    /**
                     * TitlePane of an InternalFrame. The TitlePane typically
                     * shows a menu, title, widgets to manipulate the internal frame.
                     * To bind a style to this <code>Region</code> use the name
                     * <code>InternalFrameTitlePane</code>.
                     */
                    // @ts-ignore
                    public static readonly INTERNAL_FRAME_TITLE_PANE: javax.swing.plaf.synth.Region
                    /**
                     * Label region. To bind a style to this <code>Region</code> use the name
                     * <code>Label</code>.
                     */
                    // @ts-ignore
                    public static readonly LABEL: javax.swing.plaf.synth.Region
                    /**
                     * List region. To bind a style to this <code>Region</code> use the name
                     * <code>List</code>.
                     */
                    // @ts-ignore
                    public static readonly LIST: javax.swing.plaf.synth.Region
                    /**
                     * Menu region. To bind a style to this <code>Region</code> use the name
                     * <code>Menu</code>.
                     */
                    // @ts-ignore
                    public static readonly MENU: javax.swing.plaf.synth.Region
                    /**
                     * MenuBar region. To bind a style to this <code>Region</code> use the name
                     * <code>MenuBar</code>.
                     */
                    // @ts-ignore
                    public static readonly MENU_BAR: javax.swing.plaf.synth.Region
                    /**
                     * MenuItem region. To bind a style to this <code>Region</code> use the name
                     * <code>MenuItem</code>.
                     */
                    // @ts-ignore
                    public static readonly MENU_ITEM: javax.swing.plaf.synth.Region
                    /**
                     * Accelerator region of a MenuItem. To bind a style to this
                     * <code>Region</code> use the name <code>MenuItemAccelerator</code>.
                     */
                    // @ts-ignore
                    public static readonly MENU_ITEM_ACCELERATOR: javax.swing.plaf.synth.Region
                    /**
                     * OptionPane region. To bind a style to this <code>Region</code> use
                     * the name <code>OptionPane</code>.
                     */
                    // @ts-ignore
                    public static readonly OPTION_PANE: javax.swing.plaf.synth.Region
                    /**
                     * Panel region. To bind a style to this <code>Region</code> use the name
                     * <code>Panel</code>.
                     */
                    // @ts-ignore
                    public static readonly PANEL: javax.swing.plaf.synth.Region
                    /**
                     * PasswordField region. To bind a style to this <code>Region</code> use
                     * the name <code>PasswordField</code>.
                     */
                    // @ts-ignore
                    public static readonly PASSWORD_FIELD: javax.swing.plaf.synth.Region
                    /**
                     * PopupMenu region. To bind a style to this <code>Region</code> use
                     * the name <code>PopupMenu</code>.
                     */
                    // @ts-ignore
                    public static readonly POPUP_MENU: javax.swing.plaf.synth.Region
                    /**
                     * PopupMenuSeparator region. To bind a style to this <code>Region</code>
                     * use the name <code>PopupMenuSeparator</code>.
                     */
                    // @ts-ignore
                    public static readonly POPUP_MENU_SEPARATOR: javax.swing.plaf.synth.Region
                    /**
                     * ProgressBar region. To bind a style to this <code>Region</code>
                     * use the name <code>ProgressBar</code>.
                     */
                    // @ts-ignore
                    public static readonly PROGRESS_BAR: javax.swing.plaf.synth.Region
                    /**
                     * RadioButton region. To bind a style to this <code>Region</code>
                     * use the name <code>RadioButton</code>.
                     */
                    // @ts-ignore
                    public static readonly RADIO_BUTTON: javax.swing.plaf.synth.Region
                    /**
                     * RegionButtonMenuItem region. To bind a style to this <code>Region</code>
                     * use the name <code>RadioButtonMenuItem</code>.
                     */
                    // @ts-ignore
                    public static readonly RADIO_BUTTON_MENU_ITEM: javax.swing.plaf.synth.Region
                    /**
                     * RootPane region. To bind a style to this <code>Region</code> use
                     * the name <code>RootPane</code>.
                     */
                    // @ts-ignore
                    public static readonly ROOT_PANE: javax.swing.plaf.synth.Region
                    /**
                     * ScrollBar region. To bind a style to this <code>Region</code> use
                     * the name <code>ScrollBar</code>.
                     */
                    // @ts-ignore
                    public static readonly SCROLL_BAR: javax.swing.plaf.synth.Region
                    /**
                     * Track of the ScrollBar. To bind a style to this <code>Region</code> use
                     * the name <code>ScrollBarTrack</code>.
                     */
                    // @ts-ignore
                    public static readonly SCROLL_BAR_TRACK: javax.swing.plaf.synth.Region
                    /**
                     * Thumb of the ScrollBar. The thumb is the region of the ScrollBar
                     * that gives a graphical depiction of what percentage of the View is
                     * currently visible. To bind a style to this <code>Region</code> use
                     * the name <code>ScrollBarThumb</code>.
                     */
                    // @ts-ignore
                    public static readonly SCROLL_BAR_THUMB: javax.swing.plaf.synth.Region
                    /**
                     * ScrollPane region. To bind a style to this <code>Region</code> use
                     * the name <code>ScrollPane</code>.
                     */
                    // @ts-ignore
                    public static readonly SCROLL_PANE: javax.swing.plaf.synth.Region
                    /**
                     * Separator region. To bind a style to this <code>Region</code> use
                     * the name <code>Separator</code>.
                     */
                    // @ts-ignore
                    public static readonly SEPARATOR: javax.swing.plaf.synth.Region
                    /**
                     * Slider region. To bind a style to this <code>Region</code> use
                     * the name <code>Slider</code>.
                     */
                    // @ts-ignore
                    public static readonly SLIDER: javax.swing.plaf.synth.Region
                    /**
                     * Track of the Slider. To bind a style to this <code>Region</code> use
                     * the name <code>SliderTrack</code>.
                     */
                    // @ts-ignore
                    public static readonly SLIDER_TRACK: javax.swing.plaf.synth.Region
                    /**
                     * Thumb of the Slider. The thumb of the Slider identifies the current
                     * value. To bind a style to this <code>Region</code> use the name
                     * <code>SliderThumb</code>.
                     */
                    // @ts-ignore
                    public static readonly SLIDER_THUMB: javax.swing.plaf.synth.Region
                    /**
                     * Spinner region. To bind a style to this <code>Region</code> use the name
                     * <code>Spinner</code>.
                     */
                    // @ts-ignore
                    public static readonly SPINNER: javax.swing.plaf.synth.Region
                    /**
                     * SplitPane region. To bind a style to this <code>Region</code> use the name
                     * <code>SplitPane</code>.
                     */
                    // @ts-ignore
                    public static readonly SPLIT_PANE: javax.swing.plaf.synth.Region
                    /**
                     * Divider of the SplitPane. To bind a style to this <code>Region</code>
                     * use the name <code>SplitPaneDivider</code>.
                     */
                    // @ts-ignore
                    public static readonly SPLIT_PANE_DIVIDER: javax.swing.plaf.synth.Region
                    /**
                     * TabbedPane region. To bind a style to this <code>Region</code> use
                     * the name <code>TabbedPane</code>.
                     */
                    // @ts-ignore
                    public static readonly TABBED_PANE: javax.swing.plaf.synth.Region
                    /**
                     * Region of a TabbedPane for one tab. To bind a style to this
                     * <code>Region</code> use the name <code>TabbedPaneTab</code>.
                     */
                    // @ts-ignore
                    public static readonly TABBED_PANE_TAB: javax.swing.plaf.synth.Region
                    /**
                     * Region of a TabbedPane containing the tabs. To bind a style to this
                     * <code>Region</code> use the name <code>TabbedPaneTabArea</code>.
                     */
                    // @ts-ignore
                    public static readonly TABBED_PANE_TAB_AREA: javax.swing.plaf.synth.Region
                    /**
                     * Region of a TabbedPane containing the content. To bind a style to this
                     * <code>Region</code> use the name <code>TabbedPaneContent</code>.
                     */
                    // @ts-ignore
                    public static readonly TABBED_PANE_CONTENT: javax.swing.plaf.synth.Region
                    /**
                     * Table region. To bind a style to this <code>Region</code> use
                     * the name <code>Table</code>.
                     */
                    // @ts-ignore
                    public static readonly TABLE: javax.swing.plaf.synth.Region
                    /**
                     * TableHeader region. To bind a style to this <code>Region</code> use
                     * the name <code>TableHeader</code>.
                     */
                    // @ts-ignore
                    public static readonly TABLE_HEADER: javax.swing.plaf.synth.Region
                    /**
                     * TextArea region. To bind a style to this <code>Region</code> use
                     * the name <code>TextArea</code>.
                     */
                    // @ts-ignore
                    public static readonly TEXT_AREA: javax.swing.plaf.synth.Region
                    /**
                     * TextField region. To bind a style to this <code>Region</code> use
                     * the name <code>TextField</code>.
                     */
                    // @ts-ignore
                    public static readonly TEXT_FIELD: javax.swing.plaf.synth.Region
                    /**
                     * TextPane region. To bind a style to this <code>Region</code> use
                     * the name <code>TextPane</code>.
                     */
                    // @ts-ignore
                    public static readonly TEXT_PANE: javax.swing.plaf.synth.Region
                    /**
                     * ToggleButton region. To bind a style to this <code>Region</code> use
                     * the name <code>ToggleButton</code>.
                     */
                    // @ts-ignore
                    public static readonly TOGGLE_BUTTON: javax.swing.plaf.synth.Region
                    /**
                     * ToolBar region. To bind a style to this <code>Region</code> use
                     * the name <code>ToolBar</code>.
                     */
                    // @ts-ignore
                    public static readonly TOOL_BAR: javax.swing.plaf.synth.Region
                    /**
                     * Region of the ToolBar containing the content. To bind a style to this
                     * <code>Region</code> use the name <code>ToolBarContent</code>.
                     */
                    // @ts-ignore
                    public static readonly TOOL_BAR_CONTENT: javax.swing.plaf.synth.Region
                    /**
                     * Region for the Window containing the ToolBar. To bind a style to this
                     * <code>Region</code> use the name <code>ToolBarDragWindow</code>.
                     */
                    // @ts-ignore
                    public static readonly TOOL_BAR_DRAG_WINDOW: javax.swing.plaf.synth.Region
                    /**
                     * ToolTip region. To bind a style to this <code>Region</code> use
                     * the name <code>ToolTip</code>.
                     */
                    // @ts-ignore
                    public static readonly TOOL_TIP: javax.swing.plaf.synth.Region
                    /**
                     * ToolBar separator region. To bind a style to this <code>Region</code> use
                     * the name <code>ToolBarSeparator</code>.
                     */
                    // @ts-ignore
                    public static readonly TOOL_BAR_SEPARATOR: javax.swing.plaf.synth.Region
                    /**
                     * Tree region. To bind a style to this <code>Region</code> use the name
                     * <code>Tree</code>.
                     */
                    // @ts-ignore
                    public static readonly TREE: javax.swing.plaf.synth.Region
                    /**
                     * Region of the Tree for one cell. To bind a style to this
                     * <code>Region</code> use the name <code>TreeCell</code>.
                     */
                    // @ts-ignore
                    public static readonly TREE_CELL: javax.swing.plaf.synth.Region
                    /**
                     * Viewport region. To bind a style to this <code>Region</code> use
                     * the name <code>Viewport</code>.
                     */
                    // @ts-ignore
                    public static readonly VIEWPORT: javax.swing.plaf.synth.Region
                    /**
                     * Returns true if the Region is a subregion of a Component, otherwise
                     * false. For example, <code>Region.BUTTON</code> corresponds do a
                     * <code>Component</code> so that <code>Region.BUTTON.isSubregion()</code>
                     * returns false.
                     * @return true if the Region is a subregion of a Component.
                     */
                    // @ts-ignore
                    public isSubregion(): boolean
                    /**
                     * Returns the name of the region.
                     * @return name of the Region.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Returns the name of the Region.
                     * @return name of the Region.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
