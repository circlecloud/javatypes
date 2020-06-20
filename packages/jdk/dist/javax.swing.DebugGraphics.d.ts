declare namespace javax {
    namespace swing {
        /**
         * Graphics subclass supporting graphics debugging. Overrides most methods
         * from Graphics.  DebugGraphics objects are rarely created by hand.  They
         * are most frequently created automatically when a JComponent's
         * debugGraphicsOptions are changed using the setDebugGraphicsOptions()
         * method.
         * <p>
         * NOTE: You must turn off double buffering to use DebugGraphics:
         * RepaintManager repaintManager = RepaintManager.currentManager(component);
         * repaintManager.setDoubleBufferingEnabled(false);
         * @see JComponent#setDebugGraphicsOptions
         * @see RepaintManager#currentManager
         * @see RepaintManager#setDoubleBufferingEnabled
         * @author Dave Karlton
         */
        // @ts-ignore
        class DebugGraphics extends java.awt.Graphics {
            /**
             * Constructs a new debug graphics context that supports slowed
             * down drawing.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a debug graphics context from an existing graphics
             * context that slows down drawing for the specified component.
             * @param graphics  the Graphics context to slow down
             * @param component the JComponent to draw slowly
             */
            // @ts-ignore
            constructor(graphics: java.awt.Graphics, component: javax.swing.JComponent)
            /**
             * Constructs a debug graphics context from an existing graphics
             * context that supports slowed down drawing.
             * @param graphics  the Graphics context to slow down
             */
            // @ts-ignore
            constructor(graphics: java.awt.Graphics)
            /**
             * Log graphics operations.
             */
            // @ts-ignore
            readonly LOG_OPTION: number /*int*/
            /**
             * Flash graphics operations.
             */
            // @ts-ignore
            readonly FLASH_OPTION: number /*int*/
            /**
             * Show buffered operations in a separate <code>Frame</code>.
             */
            // @ts-ignore
            readonly BUFFERED_OPTION: number /*int*/
            /**
             * Don't debug graphics operations.
             */
            // @ts-ignore
            readonly NONE_OPTION: number /*int*/
            /**
             * Overrides <code>Graphics.create</code> to return a DebugGraphics object.
             */
            // @ts-ignore
            create(): java.awt.Graphics
            /**
             * Overrides <code>Graphics.create</code> to return a DebugGraphics object.
             */
            // @ts-ignore
            create(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): java.awt.Graphics
            /**
             * Sets the Color used to flash drawing operations.
             */
            // @ts-ignore
            setFlashColor(flashColor: java.awt.Color): void
            /**
             * Returns the Color used to flash drawing operations.
             * @see #setFlashColor
             */
            // @ts-ignore
            flashColor(): java.awt.Color
            /**
             * Sets the time delay of drawing operation flashing.
             */
            // @ts-ignore
            setFlashTime(flashTime: number /*int*/): void
            /**
             * Returns the time delay of drawing operation flashing.
             * @see #setFlashTime
             */
            // @ts-ignore
            flashTime(): int
            /**
             * Sets the number of times that drawing operations will flash.
             */
            // @ts-ignore
            setFlashCount(flashCount: number /*int*/): void
            /**
             * Returns the number of times that drawing operations will flash.
             * @see #setFlashCount
             */
            // @ts-ignore
            flashCount(): int
            /**
             * Sets the stream to which the DebugGraphics logs drawing operations.
             */
            // @ts-ignore
            setLogStream(stream: java.io.PrintStream): void
            /**
             * Returns the stream to which the DebugGraphics logs drawing operations.
             * @see #setLogStream
             */
            // @ts-ignore
            logStream(): java.io.PrintStream
            /**
             * Sets the Font used for text drawing operations.
             */
            // @ts-ignore
            setFont(aFont: java.awt.Font): void
            /**
             * Returns the Font used for text drawing operations.
             * @see #setFont
             */
            // @ts-ignore
            getFont(): java.awt.Font
            /**
             * Sets the color to be used for drawing and filling lines and shapes.
             */
            // @ts-ignore
            setColor(aColor: java.awt.Color): void
            /**
             * Returns the Color used for text drawing operations.
             * @see #setColor
             */
            // @ts-ignore
            getColor(): java.awt.Color
            /**
             * Overrides <code>Graphics.getFontMetrics</code>.
             */
            // @ts-ignore
            getFontMetrics(): java.awt.FontMetrics
            /**
             * Overrides <code>Graphics.getFontMetrics</code>.
             */
            // @ts-ignore
            getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
            /**
             * Overrides <code>Graphics.translate</code>.
             */
            // @ts-ignore
            translate(x: number /*int*/, y: number /*int*/): void
            /**
             * Overrides <code>Graphics.setPaintMode</code>.
             */
            // @ts-ignore
            setPaintMode(): void
            /**
             * Overrides <code>Graphics.setXORMode</code>.
             */
            // @ts-ignore
            setXORMode(aColor: java.awt.Color): void
            /**
             * Overrides <code>Graphics.getClipBounds</code>.
             */
            // @ts-ignore
            getClipBounds(): java.awt.Rectangle
            /**
             * Overrides <code>Graphics.clipRect</code>.
             */
            // @ts-ignore
            clipRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.setClip</code>.
             */
            // @ts-ignore
            setClip(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.getClip</code>.
             */
            // @ts-ignore
            getClip(): java.awt.Shape
            /**
             * Overrides <code>Graphics.setClip</code>.
             */
            // @ts-ignore
            setClip(clip: java.awt.Shape): void
            /**
             * Overrides <code>Graphics.drawRect</code>.
             */
            // @ts-ignore
            drawRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.fillRect</code>.
             */
            // @ts-ignore
            fillRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.clearRect</code>.
             */
            // @ts-ignore
            clearRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawRoundRect</code>.
             */
            // @ts-ignore
            drawRoundRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, arcWidth: number /*int*/, arcHeight: number /*int*/): void
            /**
             * Overrides <code>Graphics.fillRoundRect</code>.
             */
            // @ts-ignore
            fillRoundRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, arcWidth: number /*int*/, arcHeight: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawLine</code>.
             */
            // @ts-ignore
            drawLine(x1: number /*int*/, y1: number /*int*/, x2: number /*int*/, y2: number /*int*/): void
            /**
             * Overrides <code>Graphics.draw3DRect</code>.
             */
            // @ts-ignore
            draw3DRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, raised: boolean): void
            /**
             * Overrides <code>Graphics.fill3DRect</code>.
             */
            // @ts-ignore
            fill3DRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, raised: boolean): void
            /**
             * Overrides <code>Graphics.drawOval</code>.
             */
            // @ts-ignore
            drawOval(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.fillOval</code>.
             */
            // @ts-ignore
            fillOval(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawArc</code>.
             */
            // @ts-ignore
            drawArc(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, startAngle: number /*int*/, arcAngle: number /*int*/): void
            /**
             * Overrides <code>Graphics.fillArc</code>.
             */
            // @ts-ignore
            fillArc(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, startAngle: number /*int*/, arcAngle: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawPolyline</code>.
             */
            // @ts-ignore
            drawPolyline(xPoints: number /*int*/[], yPoints: number /*int*/[], nPoints: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawPolygon</code>.
             */
            // @ts-ignore
            drawPolygon(xPoints: number /*int*/[], yPoints: number /*int*/[], nPoints: number /*int*/): void
            /**
             * Overrides <code>Graphics.fillPolygon</code>.
             */
            // @ts-ignore
            fillPolygon(xPoints: number /*int*/[], yPoints: number /*int*/[], nPoints: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawString</code>.
             */
            // @ts-ignore
            drawString(aString: string, x: number /*int*/, y: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawString</code>.
             */
            // @ts-ignore
            drawString(iterator: java.text.AttributedCharacterIterator, x: number /*int*/, y: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawBytes</code>.
             */
            // @ts-ignore
            drawBytes(data: number /*byte*/[], offset: number /*int*/, length: number /*int*/, x: number /*int*/, y: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawChars</code>.
             */
            // @ts-ignore
            drawChars(data: string[], offset: number /*int*/, length: number /*int*/, x: number /*int*/, y: number /*int*/): void
            /**
             * Overrides <code>Graphics.drawImage</code>.
             */
            // @ts-ignore
            drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Overrides <code>Graphics.drawImage</code>.
             */
            // @ts-ignore
            drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Overrides <code>Graphics.drawImage</code>.
             */
            // @ts-ignore
            drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean
            /**
             * Overrides <code>Graphics.drawImage</code>.
             */
            // @ts-ignore
            drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean
            /**
             * Overrides <code>Graphics.drawImage</code>.
             */
            // @ts-ignore
            drawImage(img: java.awt.Image, dx1: number /*int*/, dy1: number /*int*/, dx2: number /*int*/, dy2: number /*int*/, sx1: number /*int*/, sy1: number /*int*/, sx2: number /*int*/, sy2: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Overrides <code>Graphics.drawImage</code>.
             */
            // @ts-ignore
            drawImage(img: java.awt.Image, dx1: number /*int*/, dy1: number /*int*/, dx2: number /*int*/, dy2: number /*int*/, sx1: number /*int*/, sy1: number /*int*/, sx2: number /*int*/, sy2: number /*int*/, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean
            /**
             * Overrides <code>Graphics.copyArea</code>.
             */
            // @ts-ignore
            copyArea(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, destX: number /*int*/, destY: number /*int*/): void
            /**
             * Overrides <code>Graphics.dispose</code>.
             */
            // @ts-ignore
            dispose(): void
            /**
             * Returns the drawingBuffer value.
             * @return true if this object is drawing from a Buffer
             */
            // @ts-ignore
            isDrawingBuffer(): boolean
            /**
             * Enables/disables diagnostic information about every graphics
             * operation. The value of <b>options</b> indicates how this information
             * should be displayed. LOG_OPTION causes a text message to be printed.
             * FLASH_OPTION causes the drawing to flash several times. BUFFERED_OPTION
             * creates a new Frame that shows each operation on an
             * offscreen buffer. The value of <b>options</b> is bitwise OR'd into
             * the current value. To disable debugging use NONE_OPTION.
             */
            // @ts-ignore
            setDebugOptions(options: number /*int*/): void
            /**
             * Returns the current debugging options for this DebugGraphics.
             * @see #setDebugOptions
             */
            // @ts-ignore
            getDebugOptions(): int
        }
    }
}
