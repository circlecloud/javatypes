declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * RobotPeer defines an interface whereby toolkits support automated testing
             * by allowing native input events to be generated from Java code.
             * This interface should not be directly imported by code outside the
             * java.awt.* hierarchy; it is not to be considered public and is subject
             * to change.
             * @author Robi Khan
             */
            // @ts-ignore
            interface RobotPeer {
                /**
                 * Moves the mouse pointer to the specified screen location.
                 * @param x the X location on screen
                 * @param y the Y location on screen
                 * @see Robot#mouseMove(int, int)
                 */
                // @ts-ignore
                mouseMove(x: number /*int*/, y: number /*int*/): void
                /**
                 * Simulates a mouse press with the specified button(s).
                 * @param buttons the button mask
                 * @see Robot#mousePress(int)
                 */
                // @ts-ignore
                mousePress(buttons: number /*int*/): void
                /**
                 * Simulates a mouse release with the specified button(s).
                 * @param buttons the button mask
                 * @see Robot#mouseRelease(int)
                 */
                // @ts-ignore
                mouseRelease(buttons: number /*int*/): void
                /**
                 * Simulates mouse wheel action.
                 * @param wheelAmt number of notches to move the mouse wheel
                 * @see Robot#mouseWheel(int)
                 */
                // @ts-ignore
                mouseWheel(wheelAmt: number /*int*/): void
                /**
                 * Simulates a key press of the specified key.
                 * @param keycode the key code to press
                 * @see Robot#keyPress(int)
                 */
                // @ts-ignore
                keyPress(keycode: number /*int*/): void
                /**
                 * Simulates a key release of the specified key.
                 * @param keycode the key code to release
                 * @see Robot#keyRelease(int)
                 */
                // @ts-ignore
                keyRelease(keycode: number /*int*/): void
                /**
                 * Gets the RGB value of the specified pixel on screen.
                 * @param x the X screen coordinate
                 * @param y the Y screen coordinate
                 * @return the RGB value of the specified pixel on screen
                 * @see Robot#getPixelColor(int, int)
                 */
                // @ts-ignore
                getRGBPixel(x: number /*int*/, y: number /*int*/): int
                /**
                 * Gets the RGB values of the specified screen area as an array.
                 * @param bounds the screen area to capture the RGB values from
                 * @return the RGB values of the specified screen area
                 * @see Robot#createScreenCapture(Rectangle)
                 */
                // @ts-ignore
                getRGBPixels(bounds: java.awt.Rectangle): int[]
                /**
                 * Disposes the robot peer when it is not needed anymore.
                 */
                // @ts-ignore
                dispose(): void
            }
        }
    }
}
