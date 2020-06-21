declare namespace java {
    namespace applet {
        /**
         * This interface corresponds to an applet's environment: the
         * document containing the applet and the other applets in the same
         * document.
         * <p>
         * The methods in this interface can be used by an applet to obtain
         * information about its environment.
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        interface AppletContext {
            /**
             * Creates an audio clip.
             * @param url   an absolute URL giving the location of the audio clip.
             * @return the audio clip at the specified URL.
             */
            // @ts-ignore
            getAudioClip(url: java.net.URL): java.applet.AudioClip
            /**
             * Returns an <code>Image</code> object that can then be painted on
             * the screen. The <code>url</code> argument that is
             * passed as an argument must specify an absolute URL.
             * <p>
             * This method always returns immediately, whether or not the image
             * exists. When the applet attempts to draw the image on the screen,
             * the data will be loaded. The graphics primitives that draw the
             * image will incrementally paint on the screen.
             * @param url   an absolute URL giving the location of the image.
             * @return the image at the specified URL.
             * @see java.awt.Image
             */
            // @ts-ignore
            getImage(url: java.net.URL): java.awt.Image
            /**
             * Finds and returns the applet in the document represented by this
             * applet context with the given name. The name can be set in the
             * HTML tag by setting the <code>name</code> attribute.
             * @param name   an applet name.
             * @return the applet with the given name, or <code>null</code> if
             *           not found.
             */
            // @ts-ignore
            getApplet(name: java.lang.String | string): java.applet.Applet
            /**
             * Finds all the applets in the document represented by this applet
             * context.
             * @return an enumeration of all applets in the document represented by
             *           this applet context.
             */
            // @ts-ignore
            getApplets(): java.util.Enumeration<java.applet.Applet>
            /**
             * Requests that the browser or applet viewer show the Web page
             * indicated by the <code>url</code> argument. The browser or
             * applet viewer determines which window or frame to display the
             * Web page. This method may be ignored by applet contexts that
             * are not browsers.
             * @param url   an absolute URL giving the location of the document.
             */
            // @ts-ignore
            showDocument(url: java.net.URL): void
            /**
             * Requests that the browser or applet viewer show the Web page
             * indicated by the <code>url</code> argument. The
             * <code>target</code> argument indicates in which HTML frame the
             * document is to be displayed.
             * The target argument is interpreted as follows:
             * <center><table border="3" summary="Target arguments and their descriptions">
             * <tr><th>Target Argument</th><th>Description</th></tr>
             * <tr><td><code>"_self"</code>  <td>Show in the window and frame that
             * contain the applet.</tr>
             * <tr><td><code>"_parent"</code><td>Show in the applet's parent frame. If
             * the applet's frame has no parent frame,
             * acts the same as "_self".</tr>
             * <tr><td><code>"_top"</code>   <td>Show in the top-level frame of the applet's
             * window. If the applet's frame is the
             * top-level frame, acts the same as "_self".</tr>
             * <tr><td><code>"_blank"</code> <td>Show in a new, unnamed
             * top-level window.</tr>
             * <tr><td><i>name</i><td>Show in the frame or window named <i>name</i>. If
             * a target named <i>name</i> does not already exist, a
             * new top-level window with the specified name is created,
             * and the document is shown there.</tr>
             * </table> </center>
             * <p>
             * An applet viewer or browser is free to ignore <code>showDocument</code>.
             * @param url   an absolute URL giving the location of the document.
             * @param target   a <code>String</code> indicating where to display
             *                    the page.
             */
            // @ts-ignore
            showDocument(url: java.net.URL, target: java.lang.String | string): void
            /**
             * Requests that the argument string be displayed in the
             * "status window". Many browsers and applet viewers
             * provide such a window, where the application can inform users of
             * its current state.
             * @param status   a string to display in the status window.
             */
            // @ts-ignore
            showStatus(status: java.lang.String | string): void
            /**
             * Associates the specified stream with the specified key in this
             * applet context. If the applet context previously contained a mapping
             * for this key, the old value is replaced.
             * <p>
             * For security reasons, mapping of streams and keys exists for each
             * codebase. In other words, applet from one codebase cannot access
             * the streams created by an applet from a different codebase
             * <p>
             * @param key key with which the specified value is to be associated.
             * @param stream stream to be associated with the specified key. If this
             *                parameter is <code>null</code>, the specified key is removed
             *                in this applet context.
             * @throws IOException if the stream size exceeds a certain
             *          size limit. Size limit is decided by the implementor of this
             *          interface.
             * @since 1.4
             */
            // @ts-ignore
            setStream(key: java.lang.String | string, stream: java.io.InputStream): void
            /**
             * Returns the stream to which specified key is associated within this
             * applet context. Returns <tt>null</tt> if the applet context contains
             * no stream for this key.
             * <p>
             * For security reasons, mapping of streams and keys exists for each
             * codebase. In other words, applet from one codebase cannot access
             * the streams created by an applet from a different codebase
             * <p>
             * @return the stream to which this applet context maps the key
             * @param key key whose associated stream is to be returned.
             * @since 1.4
             */
            // @ts-ignore
            getStream(key: java.lang.String | string): java.io.InputStream
            /**
             * Finds all the keys of the streams in this applet context.
             * <p>
             * For security reasons, mapping of streams and keys exists for each
             * codebase. In other words, applet from one codebase cannot access
             * the streams created by an applet from a different codebase
             * <p>
             * @return an Iterator of all the names of the streams in this applet
             *           context.
             * @since 1.4
             */
            // @ts-ignore
            getStreamKeys(): java.util.Iterator<java.lang.String | string>
        }
    }
}
