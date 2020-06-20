declare namespace java {
    namespace awt {
        /**
         * This class is used to generate native system input events
         * for the purposes of test automation, self-running demos, and
         * other applications where control of the mouse and keyboard
         * is needed. The primary purpose of Robot is to facilitate
         * automated testing of Java platform implementations.
         * <p>
         * Using the class to generate input events differs from posting
         * events to the AWT event queue or AWT components in that the
         * events are generated in the platform's native input
         * queue. For example, <code>Robot.mouseMove</code> will actually move
         * the mouse cursor instead of just generating mouse move events.
         * <p>
         * Note that some platforms require special privileges or extensions
         * to access low-level input control. If the current platform configuration
         * does not allow input control, an <code>AWTException</code> will be thrown
         * when trying to construct Robot objects. For example, X-Window systems
         * will throw the exception if the XTEST 2.2 standard extension is not supported
         * (or not enabled) by the X server.
         * <p>
         * Applications that use Robot for purposes other than self-testing should
         * handle these error conditions gracefully.
         * @author Robi Khan
         * @since 1.3
         */
        // @ts-ignore
        class Robot extends java.lang.Object {
            /**
             * Constructs a Robot object in the coordinate system of the primary screen.
             * <p>
             * @throws AWTException if the platform configuration does not allow
             *  low-level input control.  This exception is always thrown when
             *  GraphicsEnvironment.isHeadless() returns true
             * @throws SecurityException if <code>createRobot</code> permission is not granted
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see SecurityManager#checkPermission
             * @see AWTPermission
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a Robot for the given screen device. Coordinates passed
             * to Robot method calls like mouseMove and createScreenCapture will
             * be interpreted as being in the same coordinate system as the
             * specified screen. Note that depending on the platform configuration,
             * multiple screens may either:
             * <ul>
             * <li>share the same coordinate system to form a combined virtual screen</li>
             * <li>use different coordinate systems to act as independent screens</li>
             * </ul>
             * This constructor is meant for the latter case.
             * <p>
             * If screen devices are reconfigured such that the coordinate system is
             * affected, the behavior of existing Robot objects is undefined.
             * @param screen    A screen GraphicsDevice indicating the coordinate
             *                   system the Robot will operate in.
             * @throws AWTException if the platform configuration does not allow
             *  low-level input control.  This exception is always thrown when
             *  GraphicsEnvironment.isHeadless() returns true.
             * @throws IllegalArgumentException if <code>screen</code> is not a screen
             *           GraphicsDevice.
             * @throws SecurityException if <code>createRobot</code> permission is not granted
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see GraphicsDevice
             * @see SecurityManager#checkPermission
             * @see AWTPermission
             */
            // @ts-ignore
            constructor(screen: java.awt.GraphicsDevice)
            /**
             * Moves mouse pointer to given screen coordinates.
             * @param x         X position
             * @param y         Y position
             */
            // @ts-ignore
            mouseMove(x: number /*int*/, y: number /*int*/): void
            /**
             * Presses one or more mouse buttons.  The mouse buttons should
             * be released using the {@link #mouseRelease(int)} method.
             * @param buttons the Button mask; a combination of one or more
             *  mouse button masks.
             *  <p>
             *  It is allowed to use only a combination of valid values as a {#code buttons} parameter.
             *  A valid combination consists of {@code InputEvent.BUTTON1_DOWN_MASK},
             *  {@code InputEvent.BUTTON2_DOWN_MASK}, {@code InputEvent.BUTTON3_DOWN_MASK}
             *  and values returned by the
             *  {@link InputEvent#getMaskForButton(int) InputEvent.getMaskForButton(button)} method.
             * 
             *  The valid combination also depends on a
             *  {@link Toolkit#areExtraMouseButtonsEnabled() Toolkit.areExtraMouseButtonsEnabled()} value as follows:
             *  <ul>
             *  <li> If support for extended mouse buttons is
             *  {@link Toolkit#areExtraMouseButtonsEnabled() disabled} by Java
             *  then it is allowed to use only the following standard button masks:
             *  {@code InputEvent.BUTTON1_DOWN_MASK}, {@code InputEvent.BUTTON2_DOWN_MASK},
             *  {@code InputEvent.BUTTON3_DOWN_MASK}.
             *  <li> If support for extended mouse buttons is
             *  {@link Toolkit#areExtraMouseButtonsEnabled() enabled} by Java
             *  then it is allowed to use the standard button masks
             *  and masks for existing extended mouse buttons, if the mouse has more then three buttons.
             *  In that way, it is allowed to use the button masks corresponding to the buttons
             *  in the range from 1 to {@link java.awt.MouseInfo#getNumberOfButtons() MouseInfo.getNumberOfButtons()}.
             *  <br>
             *  It is recommended to use the {@link InputEvent#getMaskForButton(int) InputEvent.getMaskForButton(button)}
             *  method to obtain the mask for any mouse button by its number.
             *  </ul>
             *  <p>
             *  The following standard button masks are also accepted:
             *  <ul>
             *  <li>{@code InputEvent.BUTTON1_MASK}
             *  <li>{@code InputEvent.BUTTON2_MASK}
             *  <li>{@code InputEvent.BUTTON3_MASK}
             *  </ul>
             *  However, it is recommended to use {@code InputEvent.BUTTON1_DOWN_MASK},
             *  {@code InputEvent.BUTTON2_DOWN_MASK},  {@code InputEvent.BUTTON3_DOWN_MASK} instead.
             *  Either extended {@code _DOWN_MASK} or old {@code _MASK} values
             *  should be used, but both those models should not be mixed.
             * @throws IllegalArgumentException if the {#code buttons} mask contains the mask for extra mouse button
             *          and support for extended mouse buttons is {@link Toolkit#areExtraMouseButtonsEnabled() disabled} by Java
             * @throws IllegalArgumentException if the {#code buttons} mask contains the mask for extra mouse button
             *          that does not exist on the mouse and support for extended mouse buttons is {@link Toolkit#areExtraMouseButtonsEnabled() enabled} by Java
             * @see #mouseRelease(int)
             * @see InputEvent#getMaskForButton(int)
             * @see Toolkit#areExtraMouseButtonsEnabled()
             * @see java.awt.MouseInfo#getNumberOfButtons()
             * @see java.awt.event.MouseEvent
             */
            // @ts-ignore
            mousePress(buttons: number /*int*/): void
            /**
             * Releases one or more mouse buttons.
             * @param buttons the Button mask; a combination of one or more
             *  mouse button masks.
             *  <p>
             *  It is allowed to use only a combination of valid values as a {#code buttons} parameter.
             *  A valid combination consists of {@code InputEvent.BUTTON1_DOWN_MASK},
             *  {@code InputEvent.BUTTON2_DOWN_MASK}, {@code InputEvent.BUTTON3_DOWN_MASK}
             *  and values returned by the
             *  {@link InputEvent#getMaskForButton(int) InputEvent.getMaskForButton(button)} method.
             * 
             *  The valid combination also depends on a
             *  {@link Toolkit#areExtraMouseButtonsEnabled() Toolkit.areExtraMouseButtonsEnabled()} value as follows:
             *  <ul>
             *  <li> If the support for extended mouse buttons is
             *  {@link Toolkit#areExtraMouseButtonsEnabled() disabled} by Java
             *  then it is allowed to use only the following standard button masks:
             *  {@code InputEvent.BUTTON1_DOWN_MASK}, {@code InputEvent.BUTTON2_DOWN_MASK},
             *  {@code InputEvent.BUTTON3_DOWN_MASK}.
             *  <li> If the support for extended mouse buttons is
             *  {@link Toolkit#areExtraMouseButtonsEnabled() enabled} by Java
             *  then it is allowed to use the standard button masks
             *  and masks for existing extended mouse buttons, if the mouse has more then three buttons.
             *  In that way, it is allowed to use the button masks corresponding to the buttons
             *  in the range from 1 to {@link java.awt.MouseInfo#getNumberOfButtons() MouseInfo.getNumberOfButtons()}.
             *  <br>
             *  It is recommended to use the {@link InputEvent#getMaskForButton(int) InputEvent.getMaskForButton(button)}
             *  method to obtain the mask for any mouse button by its number.
             *  </ul>
             *  <p>
             *  The following standard button masks are also accepted:
             *  <ul>
             *  <li>{@code InputEvent.BUTTON1_MASK}
             *  <li>{@code InputEvent.BUTTON2_MASK}
             *  <li>{@code InputEvent.BUTTON3_MASK}
             *  </ul>
             *  However, it is recommended to use {@code InputEvent.BUTTON1_DOWN_MASK},
             *  {@code InputEvent.BUTTON2_DOWN_MASK},  {@code InputEvent.BUTTON3_DOWN_MASK} instead.
             *  Either extended {@code _DOWN_MASK} or old {@code _MASK} values
             *  should be used, but both those models should not be mixed.
             * @throws IllegalArgumentException if the {#code buttons} mask contains the mask for extra mouse button
             *          and support for extended mouse buttons is {@link Toolkit#areExtraMouseButtonsEnabled() disabled} by Java
             * @throws IllegalArgumentException if the {#code buttons} mask contains the mask for extra mouse button
             *          that does not exist on the mouse and support for extended mouse buttons is {@link Toolkit#areExtraMouseButtonsEnabled() enabled} by Java
             * @see #mousePress(int)
             * @see InputEvent#getMaskForButton(int)
             * @see Toolkit#areExtraMouseButtonsEnabled()
             * @see java.awt.MouseInfo#getNumberOfButtons()
             * @see java.awt.event.MouseEvent
             */
            // @ts-ignore
            mouseRelease(buttons: number /*int*/): void
            /**
             * Rotates the scroll wheel on wheel-equipped mice.
             * @param wheelAmt  number of "notches" to move the mouse wheel
             *                   Negative values indicate movement up/away from the user,
             *                   positive values indicate movement down/towards the user.
             * @since 1.4
             */
            // @ts-ignore
            mouseWheel(wheelAmt: number /*int*/): void
            /**
             * Presses a given key.  The key should be released using the
             * <code>keyRelease</code> method.
             * <p>
             * Key codes that have more than one physical key associated with them
             * (e.g. <code>KeyEvent.VK_SHIFT</code> could mean either the
             * left or right shift key) will map to the left key.
             * @param keycode Key to press (e.g. <code>KeyEvent.VK_A</code>)
             * @throws IllegalArgumentException if <code>keycode</code> is not
             *           a valid key
             * @see #keyRelease(int)
             * @see java.awt.event.KeyEvent
             */
            // @ts-ignore
            keyPress(keycode: number /*int*/): void
            /**
             * Releases a given key.
             * <p>
             * Key codes that have more than one physical key associated with them
             * (e.g. <code>KeyEvent.VK_SHIFT</code> could mean either the
             * left or right shift key) will map to the left key.
             * @param keycode Key to release (e.g. <code>KeyEvent.VK_A</code>)
             * @throws IllegalArgumentException if <code>keycode</code> is not a
             *           valid key
             * @see #keyPress(int)
             * @see java.awt.event.KeyEvent
             */
            // @ts-ignore
            keyRelease(keycode: number /*int*/): void
            /**
             * Returns the color of a pixel at the given screen coordinates.
             * @param x       X position of pixel
             * @param y       Y position of pixel
             * @return Color of the pixel
             */
            // @ts-ignore
            getPixelColor(x: number /*int*/, y: number /*int*/): java.awt.Color
            /**
             * Creates an image containing pixels read from the screen.  This image does
             * not include the mouse cursor.
             * @param screenRect      Rect to capture in screen coordinates
             * @return The captured image
             * @throws IllegalArgumentException if <code>screenRect</code> width and height are not greater than zero
             * @throws SecurityException if <code>readDisplayPixels</code> permission is not granted
             * @see SecurityManager#checkPermission
             * @see AWTPermission
             */
            // @ts-ignore
            createScreenCapture(screenRect: java.awt.Rectangle): java.awt.image.BufferedImage
            /**
             * Returns whether this Robot automatically invokes <code>waitForIdle</code>
             * after generating an event.
             * @return Whether <code>waitForIdle</code> is automatically called
             */
            // @ts-ignore
            isAutoWaitForIdle(): boolean
            /**
             * Sets whether this Robot automatically invokes <code>waitForIdle</code>
             * after generating an event.
             * @param isOn    Whether <code>waitForIdle</code> is automatically invoked
             */
            // @ts-ignore
            setAutoWaitForIdle(isOn: boolean): void
            /**
             * Returns the number of milliseconds this Robot sleeps after generating an event.
             */
            // @ts-ignore
            getAutoDelay(): int
            /**
             * Sets the number of milliseconds this Robot sleeps after generating an event.
             * @throws IllegalArgumentException If <code>ms</code> is not between 0 and 60,000 milliseconds inclusive
             */
            // @ts-ignore
            setAutoDelay(ms: number /*int*/): void
            /**
             * Sleeps for the specified time.
             * To catch any <code>InterruptedException</code>s that occur,
             * <code>Thread.sleep()</code> may be used instead.
             * @param ms      time to sleep in milliseconds
             * @throws IllegalArgumentException if <code>ms</code> is not between 0 and 60,000 milliseconds inclusive
             * @see java.lang.Thread#sleep
             */
            // @ts-ignore
            delay(ms: number /*int*/): void
            /**
             * Waits until all events currently on the event queue have been processed.
             * @throws IllegalThreadStateException if called on the AWT event dispatching thread
             */
            // @ts-ignore
            waitForIdle(): void
            /**
             * Returns a string representation of this Robot.
             * @return the string representation.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
