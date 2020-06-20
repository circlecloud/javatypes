declare namespace java {
    namespace awt {
        /**
         * A class to encapsulate symbolic colors representing the color of
         * native GUI objects on a system.  For systems which support the dynamic
         * update of the system colors (when the user changes the colors)
         * the actual RGB values of these symbolic colors will also change
         * dynamically.  In order to compare the "current" RGB value of a
         * <code>SystemColor</code> object with a non-symbolic Color object,
         * <code>getRGB</code> should be used rather than <code>equals</code>.
         * <p>
         * Note that the way in which these system colors are applied to GUI objects
         * may vary slightly from platform to platform since GUI objects may be
         * rendered differently on each platform.
         * <p>
         * System color values may also be available through the <code>getDesktopProperty</code>
         * method on <code>java.awt.Toolkit</code>.
         * @see Toolkit#getDesktopProperty
         * @author Carl Quinn
         * @author Amy Fowler
         */
        // @ts-ignore
        class SystemColor extends java.awt.Color implements java.io.Serializable {
            /**
             * The array index for the
             * {@link #desktop} system color.
             * @see SystemColor#desktop
             */
            // @ts-ignore
            readonly DESKTOP: number /*int*/
            /**
             * The array index for the
             * {@link #activeCaption} system color.
             * @see SystemColor#activeCaption
             */
            // @ts-ignore
            readonly ACTIVE_CAPTION: number /*int*/
            /**
             * The array index for the
             * {@link #activeCaptionText} system color.
             * @see SystemColor#activeCaptionText
             */
            // @ts-ignore
            readonly ACTIVE_CAPTION_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #activeCaptionBorder} system color.
             * @see SystemColor#activeCaptionBorder
             */
            // @ts-ignore
            readonly ACTIVE_CAPTION_BORDER: number /*int*/
            /**
             * The array index for the
             * {@link #inactiveCaption} system color.
             * @see SystemColor#inactiveCaption
             */
            // @ts-ignore
            readonly INACTIVE_CAPTION: number /*int*/
            /**
             * The array index for the
             * {@link #inactiveCaptionText} system color.
             * @see SystemColor#inactiveCaptionText
             */
            // @ts-ignore
            readonly INACTIVE_CAPTION_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #inactiveCaptionBorder} system color.
             * @see SystemColor#inactiveCaptionBorder
             */
            // @ts-ignore
            readonly INACTIVE_CAPTION_BORDER: number /*int*/
            /**
             * The array index for the
             * {@link #window} system color.
             * @see SystemColor#window
             */
            // @ts-ignore
            readonly WINDOW: number /*int*/
            /**
             * The array index for the
             * {@link #windowBorder} system color.
             * @see SystemColor#windowBorder
             */
            // @ts-ignore
            readonly WINDOW_BORDER: number /*int*/
            /**
             * The array index for the
             * {@link #windowText} system color.
             * @see SystemColor#windowText
             */
            // @ts-ignore
            readonly WINDOW_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #menu} system color.
             * @see SystemColor#menu
             */
            // @ts-ignore
            readonly MENU: number /*int*/
            /**
             * The array index for the
             * {@link #menuText} system color.
             * @see SystemColor#menuText
             */
            // @ts-ignore
            readonly MENU_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #text} system color.
             * @see SystemColor#text
             */
            // @ts-ignore
            readonly TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #textText} system color.
             * @see SystemColor#textText
             */
            // @ts-ignore
            readonly TEXT_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #textHighlight} system color.
             * @see SystemColor#textHighlight
             */
            // @ts-ignore
            readonly TEXT_HIGHLIGHT: number /*int*/
            /**
             * The array index for the
             * {@link #textHighlightText} system color.
             * @see SystemColor#textHighlightText
             */
            // @ts-ignore
            readonly TEXT_HIGHLIGHT_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #textInactiveText} system color.
             * @see SystemColor#textInactiveText
             */
            // @ts-ignore
            readonly TEXT_INACTIVE_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #control} system color.
             * @see SystemColor#control
             */
            // @ts-ignore
            readonly CONTROL: number /*int*/
            /**
             * The array index for the
             * {@link #controlText} system color.
             * @see SystemColor#controlText
             */
            // @ts-ignore
            readonly CONTROL_TEXT: number /*int*/
            /**
             * The array index for the
             * {@link #controlHighlight} system color.
             * @see SystemColor#controlHighlight
             */
            // @ts-ignore
            readonly CONTROL_HIGHLIGHT: number /*int*/
            /**
             * The array index for the
             * {@link #controlLtHighlight} system color.
             * @see SystemColor#controlLtHighlight
             */
            // @ts-ignore
            readonly CONTROL_LT_HIGHLIGHT: number /*int*/
            /**
             * The array index for the
             * {@link #controlShadow} system color.
             * @see SystemColor#controlShadow
             */
            // @ts-ignore
            readonly CONTROL_SHADOW: number /*int*/
            /**
             * The array index for the
             * {@link #controlDkShadow} system color.
             * @see SystemColor#controlDkShadow
             */
            // @ts-ignore
            readonly CONTROL_DK_SHADOW: number /*int*/
            /**
             * The array index for the
             * {@link #scrollbar} system color.
             * @see SystemColor#scrollbar
             */
            // @ts-ignore
            readonly SCROLLBAR: number /*int*/
            /**
             * The array index for the
             * {@link #info} system color.
             * @see SystemColor#info
             */
            // @ts-ignore
            readonly INFO: number /*int*/
            /**
             * The array index for the
             * {@link #infoText} system color.
             * @see SystemColor#infoText
             */
            // @ts-ignore
            readonly INFO_TEXT: number /*int*/
            /**
             * The number of system colors in the array.
             */
            // @ts-ignore
            readonly NUM_COLORS: number /*int*/
            /**
             * The color rendered for the background of the desktop.
             */
            // @ts-ignore
            readonly desktop: java.awt.SystemColor
            /**
             * The color rendered for the window-title background of the currently active window.
             */
            // @ts-ignore
            readonly activeCaption: java.awt.SystemColor
            /**
             * The color rendered for the window-title text of the currently active window.
             */
            // @ts-ignore
            readonly activeCaptionText: java.awt.SystemColor
            /**
             * The color rendered for the border around the currently active window.
             */
            // @ts-ignore
            readonly activeCaptionBorder: java.awt.SystemColor
            /**
             * The color rendered for the window-title background of inactive windows.
             */
            // @ts-ignore
            readonly inactiveCaption: java.awt.SystemColor
            /**
             * The color rendered for the window-title text of inactive windows.
             */
            // @ts-ignore
            readonly inactiveCaptionText: java.awt.SystemColor
            /**
             * The color rendered for the border around inactive windows.
             */
            // @ts-ignore
            readonly inactiveCaptionBorder: java.awt.SystemColor
            /**
             * The color rendered for the background of interior regions inside windows.
             */
            // @ts-ignore
            readonly window: java.awt.SystemColor
            /**
             * The color rendered for the border around interior regions inside windows.
             */
            // @ts-ignore
            readonly windowBorder: java.awt.SystemColor
            /**
             * The color rendered for text of interior regions inside windows.
             */
            // @ts-ignore
            readonly windowText: java.awt.SystemColor
            /**
             * The color rendered for the background of menus.
             */
            // @ts-ignore
            readonly menu: java.awt.SystemColor
            /**
             * The color rendered for the text of menus.
             */
            // @ts-ignore
            readonly menuText: java.awt.SystemColor
            /**
             * The color rendered for the background of text control objects, such as
             * textfields and comboboxes.
             */
            // @ts-ignore
            readonly text: java.awt.SystemColor
            /**
             * The color rendered for the text of text control objects, such as textfields
             * and comboboxes.
             */
            // @ts-ignore
            readonly textText: java.awt.SystemColor
            /**
             * The color rendered for the background of selected items, such as in menus,
             * comboboxes, and text.
             */
            // @ts-ignore
            readonly textHighlight: java.awt.SystemColor
            /**
             * The color rendered for the text of selected items, such as in menus, comboboxes,
             * and text.
             */
            // @ts-ignore
            readonly textHighlightText: java.awt.SystemColor
            /**
             * The color rendered for the text of inactive items, such as in menus.
             */
            // @ts-ignore
            readonly textInactiveText: java.awt.SystemColor
            /**
             * The color rendered for the background of control panels and control objects,
             * such as pushbuttons.
             */
            // @ts-ignore
            readonly control: java.awt.SystemColor
            /**
             * The color rendered for the text of control panels and control objects,
             * such as pushbuttons.
             */
            // @ts-ignore
            readonly controlText: java.awt.SystemColor
            /**
             * The color rendered for light areas of 3D control objects, such as pushbuttons.
             * This color is typically derived from the <code>control</code> background color
             * to provide a 3D effect.
             */
            // @ts-ignore
            readonly controlHighlight: java.awt.SystemColor
            /**
             * The color rendered for highlight areas of 3D control objects, such as pushbuttons.
             * This color is typically derived from the <code>control</code> background color
             * to provide a 3D effect.
             */
            // @ts-ignore
            readonly controlLtHighlight: java.awt.SystemColor
            /**
             * The color rendered for shadow areas of 3D control objects, such as pushbuttons.
             * This color is typically derived from the <code>control</code> background color
             * to provide a 3D effect.
             */
            // @ts-ignore
            readonly controlShadow: java.awt.SystemColor
            /**
             * The color rendered for dark shadow areas on 3D control objects, such as pushbuttons.
             * This color is typically derived from the <code>control</code> background color
             * to provide a 3D effect.
             */
            // @ts-ignore
            readonly controlDkShadow: java.awt.SystemColor
            /**
             * The color rendered for the background of scrollbars.
             */
            // @ts-ignore
            readonly scrollbar: java.awt.SystemColor
            /**
             * The color rendered for the background of tooltips or spot help.
             */
            // @ts-ignore
            readonly info: java.awt.SystemColor
            /**
             * The color rendered for the text of tooltips or spot help.
             */
            // @ts-ignore
            readonly infoText: java.awt.SystemColor
            /**
             * Returns a string representation of this <code>Color</code>'s values.
             * This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary between
             * implementations.
             * The returned string may be empty but may not be <code>null</code>.
             * @return a string representation of this <code>Color</code>
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
