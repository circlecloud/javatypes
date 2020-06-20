declare namespace javax {
    namespace accessibility {
        /**
         * <P>Class AccessibleRole determines the role of a component.  The role of a
         * component describes its generic function. (E.G.,
         * "push button," "table," or "list.")
         * <p>The toDisplayString method allows you to obtain the localized string
         * for a locale independent key from a predefined ResourceBundle for the
         * keys defined in this class.
         * <p>The constants in this class present a strongly typed enumeration
         * of common object roles.  A public constructor for this class has been
         * purposely omitted and applications should use one of the constants
         * from this class.  If the constants in this class are not sufficient
         * to describe the role of an object, a subclass should be generated
         * from this class and it should provide constants in a similar manner.
         * @author Willie Walker
         * @author Peter Korn
         * @author Lynn Monsanto
         */
        // @ts-ignore
        class AccessibleRole extends javax.accessibility.AccessibleBundle {
            /**
             * Creates a new AccessibleRole using the given locale independent key.
             * This should not be a public method.  Instead, it is used to create
             * the constants in this file to make it a strongly typed enumeration.
             * Subclasses of this class should enforce similar policy.
             * <p>
             * The key String should be a locale independent key for the role.
             * It is not intended to be used as the actual String to display
             * to the user.  To get the localized string, use toDisplayString.
             * @param key the locale independent name of the role.
             * @see AccessibleBundle#toDisplayString
             */
            // @ts-ignore
            constructor(key: string)
            /**
             * Object is used to alert the user about something.
             */
            // @ts-ignore
            readonly ALERT: javax.accessibility.AccessibleRole
            /**
             * The header for a column of data.
             */
            // @ts-ignore
            readonly COLUMN_HEADER: javax.accessibility.AccessibleRole
            /**
             * Object that can be drawn into and is used to trap
             * events.
             * @see #FRAME
             * @see #GLASS_PANE
             * @see #LAYERED_PANE
             */
            // @ts-ignore
            readonly CANVAS: javax.accessibility.AccessibleRole
            /**
             * A list of choices the user can select from.  Also optionally
             * allows the user to enter a choice of their own.
             */
            // @ts-ignore
            readonly COMBO_BOX: javax.accessibility.AccessibleRole
            /**
             * An iconified internal frame in a DESKTOP_PANE.
             * @see #DESKTOP_PANE
             * @see #INTERNAL_FRAME
             */
            // @ts-ignore
            readonly DESKTOP_ICON: javax.accessibility.AccessibleRole
            /**
             * An object containing a collection of <code>Accessibles</code> that
             * together represents <code>HTML</code> content.  The child
             * <code>Accessibles</code> would include objects implementing
             * <code>AccessibleText</code>, <code>AccessibleHypertext</code>,
             * <code>AccessibleIcon</code>, and other interfaces.
             * @see #HYPERLINK
             * @see AccessibleText
             * @see AccessibleHypertext
             * @see AccessibleHyperlink
             * @see AccessibleIcon
             * @since 1.6
             */
            // @ts-ignore
            readonly HTML_CONTAINER: javax.accessibility.AccessibleRole
            /**
             * A frame-like object that is clipped by a desktop pane.  The
             * desktop pane, internal frame, and desktop icon objects are
             * often used to create multiple document interfaces within an
             * application.
             * @see #DESKTOP_ICON
             * @see #DESKTOP_PANE
             * @see #FRAME
             */
            // @ts-ignore
            readonly INTERNAL_FRAME: javax.accessibility.AccessibleRole
            /**
             * A pane that supports internal frames and
             * iconified versions of those internal frames.
             * @see #DESKTOP_ICON
             * @see #INTERNAL_FRAME
             */
            // @ts-ignore
            readonly DESKTOP_PANE: javax.accessibility.AccessibleRole
            /**
             * A specialized pane whose primary use is inside a DIALOG
             * @see #DIALOG
             */
            // @ts-ignore
            readonly OPTION_PANE: javax.accessibility.AccessibleRole
            /**
             * A top level window with no title or border.
             * @see #FRAME
             * @see #DIALOG
             */
            // @ts-ignore
            readonly WINDOW: javax.accessibility.AccessibleRole
            /**
             * A top level window with a title bar, border, menu bar, etc.  It is
             * often used as the primary window for an application.
             * @see #DIALOG
             * @see #CANVAS
             * @see #WINDOW
             */
            // @ts-ignore
            readonly FRAME: javax.accessibility.AccessibleRole
            /**
             * A top level window with title bar and a border.  A dialog is similar
             * to a frame, but it has fewer properties and is often used as a
             * secondary window for an application.
             * @see #FRAME
             * @see #WINDOW
             */
            // @ts-ignore
            readonly DIALOG: javax.accessibility.AccessibleRole
            /**
             * A specialized pane that lets the user choose a color.
             */
            // @ts-ignore
            readonly COLOR_CHOOSER: javax.accessibility.AccessibleRole
            /**
             * A pane that allows the user to navigate through
             * and select the contents of a directory.  May be used
             * by a file chooser.
             * @see #FILE_CHOOSER
             */
            // @ts-ignore
            readonly DIRECTORY_PANE: javax.accessibility.AccessibleRole
            /**
             * A specialized dialog that displays the files in the directory
             * and lets the user select a file, browse a different directory,
             * or specify a filename.  May use the directory pane to show the
             * contents of a directory.
             * @see #DIRECTORY_PANE
             */
            // @ts-ignore
            readonly FILE_CHOOSER: javax.accessibility.AccessibleRole
            /**
             * An object that fills up space in a user interface.  It is often
             * used in interfaces to tweak the spacing between components,
             * but serves no other purpose.
             */
            // @ts-ignore
            readonly FILLER: javax.accessibility.AccessibleRole
            /**
             * A hypertext anchor
             */
            // @ts-ignore
            readonly HYPERLINK: javax.accessibility.AccessibleRole
            /**
             * A small fixed size picture, typically used to decorate components.
             */
            // @ts-ignore
            readonly ICON: javax.accessibility.AccessibleRole
            /**
             * An object used to present an icon or short string in an interface.
             */
            // @ts-ignore
            readonly LABEL: javax.accessibility.AccessibleRole
            /**
             * A specialized pane that has a glass pane and a layered pane as its
             * children.
             * @see #GLASS_PANE
             * @see #LAYERED_PANE
             */
            // @ts-ignore
            readonly ROOT_PANE: javax.accessibility.AccessibleRole
            /**
             * A pane that is guaranteed to be painted on top
             * of all panes beneath it.
             * @see #ROOT_PANE
             * @see #CANVAS
             */
            // @ts-ignore
            readonly GLASS_PANE: javax.accessibility.AccessibleRole
            /**
             * A specialized pane that allows its children to be drawn in layers,
             * providing a form of stacking order.  This is usually the pane that
             * holds the menu bar as well as the pane that contains most of the
             * visual components in a window.
             * @see #GLASS_PANE
             * @see #ROOT_PANE
             */
            // @ts-ignore
            readonly LAYERED_PANE: javax.accessibility.AccessibleRole
            /**
             * An object that presents a list of objects to the user and allows the
             * user to select one or more of them.  A list is usually contained
             * within a scroll pane.
             * @see #SCROLL_PANE
             * @see #LIST_ITEM
             */
            // @ts-ignore
            readonly LIST: javax.accessibility.AccessibleRole
            /**
             * An object that presents an element in a list.  A list is usually
             * contained within a scroll pane.
             * @see #SCROLL_PANE
             * @see #LIST
             */
            // @ts-ignore
            readonly LIST_ITEM: javax.accessibility.AccessibleRole
            /**
             * An object usually drawn at the top of the primary dialog box of
             * an application that contains a list of menus the user can choose
             * from.  For example, a menu bar might contain menus for "File,"
             * "Edit," and "Help."
             * @see #MENU
             * @see #POPUP_MENU
             * @see #LAYERED_PANE
             */
            // @ts-ignore
            readonly MENU_BAR: javax.accessibility.AccessibleRole
            /**
             * A temporary window that is usually used to offer the user a
             * list of choices, and then hides when the user selects one of
             * those choices.
             * @see #MENU
             * @see #MENU_ITEM
             */
            // @ts-ignore
            readonly POPUP_MENU: javax.accessibility.AccessibleRole
            /**
             * An object usually found inside a menu bar that contains a list
             * of actions the user can choose from.  A menu can have any object
             * as its children, but most often they are menu items, other menus,
             * or rudimentary objects such as radio buttons, check boxes, or
             * separators.  For example, an application may have an "Edit" menu
             * that contains menu items for "Cut" and "Paste."
             * @see #MENU_BAR
             * @see #MENU_ITEM
             * @see #SEPARATOR
             * @see #RADIO_BUTTON
             * @see #CHECK_BOX
             * @see #POPUP_MENU
             */
            // @ts-ignore
            readonly MENU: javax.accessibility.AccessibleRole
            /**
             * An object usually contained in a menu that presents an action
             * the user can choose.  For example, the "Cut" menu item in an
             * "Edit" menu would be an action the user can select to cut the
             * selected area of text in a document.
             * @see #MENU_BAR
             * @see #SEPARATOR
             * @see #POPUP_MENU
             */
            // @ts-ignore
            readonly MENU_ITEM: javax.accessibility.AccessibleRole
            /**
             * An object usually contained in a menu to provide a visual
             * and logical separation of the contents in a menu.  For example,
             * the "File" menu of an application might contain menu items for
             * "Open," "Close," and "Exit," and will place a separator between
             * "Close" and "Exit" menu items.
             * @see #MENU
             * @see #MENU_ITEM
             */
            // @ts-ignore
            readonly SEPARATOR: javax.accessibility.AccessibleRole
            /**
             * An object that presents a series of panels (or page tabs), one at a
             * time, through some mechanism provided by the object.  The most common
             * mechanism is a list of tabs at the top of the panel.  The children of
             * a page tab list are all page tabs.
             * @see #PAGE_TAB
             */
            // @ts-ignore
            readonly PAGE_TAB_LIST: javax.accessibility.AccessibleRole
            /**
             * An object that is a child of a page tab list.  Its sole child is
             * the panel that is to be presented to the user when the user
             * selects the page tab from the list of tabs in the page tab list.
             * @see #PAGE_TAB_LIST
             */
            // @ts-ignore
            readonly PAGE_TAB: javax.accessibility.AccessibleRole
            /**
             * A generic container that is often used to group objects.
             */
            // @ts-ignore
            readonly PANEL: javax.accessibility.AccessibleRole
            /**
             * An object used to indicate how much of a task has been completed.
             */
            // @ts-ignore
            readonly PROGRESS_BAR: javax.accessibility.AccessibleRole
            /**
             * A text object used for passwords, or other places where the
             * text contents is not shown visibly to the user
             */
            // @ts-ignore
            readonly PASSWORD_TEXT: javax.accessibility.AccessibleRole
            /**
             * An object the user can manipulate to tell the application to do
             * something.
             * @see #CHECK_BOX
             * @see #TOGGLE_BUTTON
             * @see #RADIO_BUTTON
             */
            // @ts-ignore
            readonly PUSH_BUTTON: javax.accessibility.AccessibleRole
            /**
             * A specialized push button that can be checked or unchecked, but
             * does not provide a separate indicator for the current state.
             * @see #PUSH_BUTTON
             * @see #CHECK_BOX
             * @see #RADIO_BUTTON
             */
            // @ts-ignore
            readonly TOGGLE_BUTTON: javax.accessibility.AccessibleRole
            /**
             * A choice that can be checked or unchecked and provides a
             * separate indicator for the current state.
             * @see #PUSH_BUTTON
             * @see #TOGGLE_BUTTON
             * @see #RADIO_BUTTON
             */
            // @ts-ignore
            readonly CHECK_BOX: javax.accessibility.AccessibleRole
            /**
             * A specialized check box that will cause other radio buttons in the
             * same group to become unchecked when this one is checked.
             * @see #PUSH_BUTTON
             * @see #TOGGLE_BUTTON
             * @see #CHECK_BOX
             */
            // @ts-ignore
            readonly RADIO_BUTTON: javax.accessibility.AccessibleRole
            /**
             * The header for a row of data.
             */
            // @ts-ignore
            readonly ROW_HEADER: javax.accessibility.AccessibleRole
            /**
             * An object that allows a user to incrementally view a large amount
             * of information.  Its children can include scroll bars and a viewport.
             * @see #SCROLL_BAR
             * @see #VIEWPORT
             */
            // @ts-ignore
            readonly SCROLL_PANE: javax.accessibility.AccessibleRole
            /**
             * An object usually used to allow a user to incrementally view a
             * large amount of data.  Usually used only by a scroll pane.
             * @see #SCROLL_PANE
             */
            // @ts-ignore
            readonly SCROLL_BAR: javax.accessibility.AccessibleRole
            /**
             * An object usually used in a scroll pane.  It represents the portion
             * of the entire data that the user can see.  As the user manipulates
             * the scroll bars, the contents of the viewport can change.
             * @see #SCROLL_PANE
             */
            // @ts-ignore
            readonly VIEWPORT: javax.accessibility.AccessibleRole
            /**
             * An object that allows the user to select from a bounded range.  For
             * example, a slider might be used to select a number between 0 and 100.
             */
            // @ts-ignore
            readonly SLIDER: javax.accessibility.AccessibleRole
            /**
             * A specialized panel that presents two other panels at the same time.
             * Between the two panels is a divider the user can manipulate to make
             * one panel larger and the other panel smaller.
             */
            // @ts-ignore
            readonly SPLIT_PANE: javax.accessibility.AccessibleRole
            /**
             * An object used to present information in terms of rows and columns.
             * An example might include a spreadsheet application.
             */
            // @ts-ignore
            readonly TABLE: javax.accessibility.AccessibleRole
            /**
             * An object that presents text to the user.  The text is usually
             * editable by the user as opposed to a label.
             * @see #LABEL
             */
            // @ts-ignore
            readonly TEXT: javax.accessibility.AccessibleRole
            /**
             * An object used to present hierarchical information to the user.
             * The individual nodes in the tree can be collapsed and expanded
             * to provide selective disclosure of the tree's contents.
             */
            // @ts-ignore
            readonly TREE: javax.accessibility.AccessibleRole
            /**
             * A bar or palette usually composed of push buttons or toggle buttons.
             * It is often used to provide the most frequently used functions for an
             * application.
             */
            // @ts-ignore
            readonly TOOL_BAR: javax.accessibility.AccessibleRole
            /**
             * An object that provides information about another object.  The
             * accessibleDescription property of the tool tip is often displayed
             * to the user in a small "help bubble" when the user causes the
             * mouse to hover over the object associated with the tool tip.
             */
            // @ts-ignore
            readonly TOOL_TIP: javax.accessibility.AccessibleRole
            /**
             * An AWT component, but nothing else is known about it.
             * @see #SWING_COMPONENT
             * @see #UNKNOWN
             */
            // @ts-ignore
            readonly AWT_COMPONENT: javax.accessibility.AccessibleRole
            /**
             * A Swing component, but nothing else is known about it.
             * @see #AWT_COMPONENT
             * @see #UNKNOWN
             */
            // @ts-ignore
            readonly SWING_COMPONENT: javax.accessibility.AccessibleRole
            /**
             * The object contains some Accessible information, but its role is
             * not known.
             * @see #AWT_COMPONENT
             * @see #SWING_COMPONENT
             */
            // @ts-ignore
            readonly UNKNOWN: javax.accessibility.AccessibleRole
            /**
             * A STATUS_BAR is an simple component that can contain
             * multiple labels of status information to the user.
             */
            // @ts-ignore
            readonly STATUS_BAR: javax.accessibility.AccessibleRole
            /**
             * A DATE_EDITOR is a component that allows users to edit
             * java.util.Date and java.util.Time objects
             */
            // @ts-ignore
            readonly DATE_EDITOR: javax.accessibility.AccessibleRole
            /**
             * A SPIN_BOX is a simple spinner component and its main use
             * is for simple numbers.
             */
            // @ts-ignore
            readonly SPIN_BOX: javax.accessibility.AccessibleRole
            /**
             * A FONT_CHOOSER is a component that lets the user pick various
             * attributes for fonts.
             */
            // @ts-ignore
            readonly FONT_CHOOSER: javax.accessibility.AccessibleRole
            /**
             * A GROUP_BOX is a simple container that contains a border
             * around it and contains components inside it.
             */
            // @ts-ignore
            readonly GROUP_BOX: javax.accessibility.AccessibleRole
            /**
             * A text header
             * @since 1.5
             */
            // @ts-ignore
            readonly HEADER: javax.accessibility.AccessibleRole
            /**
             * A text footer
             * @since 1.5
             */
            // @ts-ignore
            readonly FOOTER: javax.accessibility.AccessibleRole
            /**
             * A text paragraph
             * @since 1.5
             */
            // @ts-ignore
            readonly PARAGRAPH: javax.accessibility.AccessibleRole
            /**
             * A ruler is an object used to measure distance
             * @since 1.5
             */
            // @ts-ignore
            readonly RULER: javax.accessibility.AccessibleRole
            /**
             * A role indicating the object acts as a formula for
             * calculating a value.  An example is a formula in
             * a spreadsheet cell.
             * @since 1.5
             */
            // @ts-ignore
            readonly EDITBAR: javax.accessibility.AccessibleRole
            /**
             * A role indicating the object monitors the progress
             * of some operation.
             * @since 1.5
             */
            // @ts-ignore
            readonly PROGRESS_MONITOR: javax.accessibility.AccessibleRole
        }
    }
}
