declare namespace java {
    namespace awt {
        /**
         * The <code>Color</code> class is used to encapsulate colors in the default
         * sRGB color space or colors in arbitrary color spaces identified by a
         * {@link ColorSpace}.  Every color has an implicit alpha value of 1.0 or
         * an explicit one provided in the constructor.  The alpha value
         * defines the transparency of a color and can be represented by
         * a float value in the range 0.0&nbsp;-&nbsp;1.0 or 0&nbsp;-&nbsp;255.
         * An alpha value of 1.0 or 255 means that the color is completely
         * opaque and an alpha value of 0 or 0.0 means that the color is
         * completely transparent.
         * When constructing a <code>Color</code> with an explicit alpha or
         * getting the color/alpha components of a <code>Color</code>, the color
         * components are never premultiplied by the alpha component.
         * <p>
         * The default color space for the Java 2D(tm) API is sRGB, a proposed
         * standard RGB color space.  For further information on sRGB,
         * see <A href="http://www.w3.org/pub/WWW/Graphics/Color/sRGB.html">
         * http://www.w3.org/pub/WWW/Graphics/Color/sRGB.html
         * </A>.
         * <p>
         * @version 10 Feb 1997
         * @author Sami Shaio
         * @author Arthur van Hoff
         * @see ColorSpace
         * @see AlphaComposite
         */
        // @ts-ignore
        class Color extends java.lang.Object implements java.awt.Paint, java.io.Serializable {
            /**
             * Creates an opaque sRGB color with the specified red, green,
             * and blue values in the range (0 - 255).
             * The actual color used in rendering depends
             * on finding the best match given the color space
             * available for a given output device.
             * Alpha is defaulted to 255.
             * @throws IllegalArgumentException if <code>r</code>, <code>g</code>
             *         or <code>b</code> are outside of the range
             *         0 to 255, inclusive
             * @param r the red component
             * @param g the green component
             * @param b the blue component
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @see #getRGB
             */
            // @ts-ignore
            constructor(r: number /*int*/, g: number /*int*/, b: number /*int*/)
            /**
             * Creates an sRGB color with the specified red, green, blue, and alpha
             * values in the range (0 - 255).
             * @throws IllegalArgumentException if <code>r</code>, <code>g</code>,
             *         <code>b</code> or <code>a</code> are outside of the range
             *         0 to 255, inclusive
             * @param r the red component
             * @param g the green component
             * @param b the blue component
             * @param a the alpha component
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @see #getAlpha
             * @see #getRGB
             */
            // @ts-ignore
            constructor(r: number /*int*/, g: number /*int*/, b: number /*int*/, a: number /*int*/)
            /**
             * Creates an opaque sRGB color with the specified combined RGB value
             * consisting of the red component in bits 16-23, the green component
             * in bits 8-15, and the blue component in bits 0-7.  The actual color
             * used in rendering depends on finding the best match given the
             * color space available for a particular output device.  Alpha is
             * defaulted to 255.
             * @param rgb the combined RGB components
             * @see java.awt.image.ColorModel#getRGBdefault
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @see #getRGB
             */
            // @ts-ignore
            constructor(rgb: number /*int*/)
            /**
             * Creates an sRGB color with the specified combined RGBA value consisting
             * of the alpha component in bits 24-31, the red component in bits 16-23,
             * the green component in bits 8-15, and the blue component in bits 0-7.
             * If the <code>hasalpha</code> argument is <code>false</code>, alpha
             * is defaulted to 255.
             * @param rgba the combined RGBA components
             * @param hasalpha <code>true</code> if the alpha bits are valid;
             *         <code>false</code> otherwise
             * @see java.awt.image.ColorModel#getRGBdefault
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @see #getAlpha
             * @see #getRGB
             */
            // @ts-ignore
            constructor(rgba: number /*int*/, hasalpha: boolean)
            /**
             * Creates an opaque sRGB color with the specified red, green, and blue
             * values in the range (0.0 - 1.0).  Alpha is defaulted to 1.0.  The
             * actual color used in rendering depends on finding the best
             * match given the color space available for a particular output
             * device.
             * @throws IllegalArgumentException if <code>r</code>, <code>g</code>
             *         or <code>b</code> are outside of the range
             *         0.0 to 1.0, inclusive
             * @param r the red component
             * @param g the green component
             * @param b the blue component
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @see #getRGB
             */
            // @ts-ignore
            constructor(r: number /*float*/, g: number /*float*/, b: number /*float*/)
            /**
             * Creates an sRGB color with the specified red, green, blue, and
             * alpha values in the range (0.0 - 1.0).  The actual color
             * used in rendering depends on finding the best match given the
             * color space available for a particular output device.
             * @throws IllegalArgumentException if <code>r</code>, <code>g</code>
             *         <code>b</code> or <code>a</code> are outside of the range
             *         0.0 to 1.0, inclusive
             * @param r the red component
             * @param g the green component
             * @param b the blue component
             * @param a the alpha component
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @see #getAlpha
             * @see #getRGB
             */
            // @ts-ignore
            constructor(r: number /*float*/, g: number /*float*/, b: number /*float*/, a: number /*float*/)
            /**
             * Creates a color in the specified <code>ColorSpace</code>
             * with the color components specified in the <code>float</code>
             * array and the specified alpha.  The number of components is
             * determined by the type of the <code>ColorSpace</code>.  For
             * example, RGB requires 3 components, but CMYK requires 4
             * components.
             * @param cspace the <code>ColorSpace</code> to be used to
             *                   interpret the components
             * @param components an arbitrary number of color components
             *                       that is compatible with the <code>ColorSpace</code>
             * @param alpha alpha value
             * @throws IllegalArgumentException if any of the values in the
             *          <code>components</code> array or <code>alpha</code> is
             *          outside of the range 0.0 to 1.0
             * @see #getComponents
             * @see #getColorComponents
             */
            // @ts-ignore
            constructor(cspace: java.awt.color.ColorSpace, components: number /*float*/[], alpha: number /*float*/)
            /**
             * The color white.  In the default sRGB space.
             */
            // @ts-ignore
            readonly white: java.awt.Color
            /**
             * The color white.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly WHITE: java.awt.Color
            /**
             * The color light gray.  In the default sRGB space.
             */
            // @ts-ignore
            readonly lightGray: java.awt.Color
            /**
             * The color light gray.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly LIGHT_GRAY: java.awt.Color
            /**
             * The color gray.  In the default sRGB space.
             */
            // @ts-ignore
            readonly gray: java.awt.Color
            /**
             * The color gray.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly GRAY: java.awt.Color
            /**
             * The color dark gray.  In the default sRGB space.
             */
            // @ts-ignore
            readonly darkGray: java.awt.Color
            /**
             * The color dark gray.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly DARK_GRAY: java.awt.Color
            /**
             * The color black.  In the default sRGB space.
             */
            // @ts-ignore
            readonly black: java.awt.Color
            /**
             * The color black.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly BLACK: java.awt.Color
            /**
             * The color red.  In the default sRGB space.
             */
            // @ts-ignore
            readonly red: java.awt.Color
            /**
             * The color red.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly RED: java.awt.Color
            /**
             * The color pink.  In the default sRGB space.
             */
            // @ts-ignore
            readonly pink: java.awt.Color
            /**
             * The color pink.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly PINK: java.awt.Color
            /**
             * The color orange.  In the default sRGB space.
             */
            // @ts-ignore
            readonly orange: java.awt.Color
            /**
             * The color orange.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly ORANGE: java.awt.Color
            /**
             * The color yellow.  In the default sRGB space.
             */
            // @ts-ignore
            readonly yellow: java.awt.Color
            /**
             * The color yellow.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly YELLOW: java.awt.Color
            /**
             * The color green.  In the default sRGB space.
             */
            // @ts-ignore
            readonly green: java.awt.Color
            /**
             * The color green.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly GREEN: java.awt.Color
            /**
             * The color magenta.  In the default sRGB space.
             */
            // @ts-ignore
            readonly magenta: java.awt.Color
            /**
             * The color magenta.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly MAGENTA: java.awt.Color
            /**
             * The color cyan.  In the default sRGB space.
             */
            // @ts-ignore
            readonly cyan: java.awt.Color
            /**
             * The color cyan.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly CYAN: java.awt.Color
            /**
             * The color blue.  In the default sRGB space.
             */
            // @ts-ignore
            readonly blue: java.awt.Color
            /**
             * The color blue.  In the default sRGB space.
             * @since 1.4
             */
            // @ts-ignore
            readonly BLUE: java.awt.Color
            /**
             * Returns the red component in the range 0-255 in the default sRGB
             * space.
             * @return the red component.
             * @see #getRGB
             */
            // @ts-ignore
            getRed(): int
            /**
             * Returns the green component in the range 0-255 in the default sRGB
             * space.
             * @return the green component.
             * @see #getRGB
             */
            // @ts-ignore
            getGreen(): int
            /**
             * Returns the blue component in the range 0-255 in the default sRGB
             * space.
             * @return the blue component.
             * @see #getRGB
             */
            // @ts-ignore
            getBlue(): int
            /**
             * Returns the alpha component in the range 0-255.
             * @return the alpha component.
             * @see #getRGB
             */
            // @ts-ignore
            getAlpha(): int
            /**
             * Returns the RGB value representing the color in the default sRGB
             * {@link ColorModel}.
             * (Bits 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are
             * blue).
             * @return the RGB value of the color in the default sRGB
             *          <code>ColorModel</code>.
             * @see java.awt.image.ColorModel#getRGBdefault
             * @see #getRed
             * @see #getGreen
             * @see #getBlue
             * @since JDK1.0
             */
            // @ts-ignore
            getRGB(): int
            /**
             * Creates a new <code>Color</code> that is a brighter version of this
             * <code>Color</code>.
             * <p>
             * This method applies an arbitrary scale factor to each of the three RGB
             * components of this <code>Color</code> to create a brighter version
             * of this <code>Color</code>.
             * The {@code alpha} value is preserved.
             * Although <code>brighter</code> and
             * <code>darker</code> are inverse operations, the results of a
             * series of invocations of these two methods might be inconsistent
             * because of rounding errors.
             * @return a new <code>Color</code> object that is
             *                  a brighter version of this <code>Color</code>
             *                  with the same {#code alpha} value.
             * @see java.awt.Color#darker
             * @since JDK1.0
             */
            // @ts-ignore
            brighter(): java.awt.Color
            /**
             * Creates a new <code>Color</code> that is a darker version of this
             * <code>Color</code>.
             * <p>
             * This method applies an arbitrary scale factor to each of the three RGB
             * components of this <code>Color</code> to create a darker version of
             * this <code>Color</code>.
             * The {@code alpha} value is preserved.
             * Although <code>brighter</code> and
             * <code>darker</code> are inverse operations, the results of a series
             * of invocations of these two methods might be inconsistent because
             * of rounding errors.
             * @return a new <code>Color</code> object that is
             *                     a darker version of this <code>Color</code>
             *                     with the same {#code alpha} value.
             * @see java.awt.Color#brighter
             * @since JDK1.0
             */
            // @ts-ignore
            darker(): java.awt.Color
            /**
             * Computes the hash code for this <code>Color</code>.
             * @return a hash code value for this object.
             * @since JDK1.0
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Determines whether another object is equal to this
             * <code>Color</code>.
             * <p>
             * The result is <code>true</code> if and only if the argument is not
             * <code>null</code> and is a <code>Color</code> object that has the same
             * red, green, blue, and alpha values as this object.
             * @param obj   the object to test for equality with this
             *                           <code>Color</code>
             * @return <code>true</code> if the objects are the same;
             *                              <code>false</code> otherwise.
             * @since JDK1.0
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns a string representation of this <code>Color</code>. This
             * method is intended to be used only for debugging purposes.  The
             * content and format of the returned string might vary between
             * implementations. The returned string might be empty but cannot
             * be <code>null</code>.
             * @return a string representation of this <code>Color</code>.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Converts a <code>String</code> to an integer and returns the
             * specified opaque <code>Color</code>. This method handles string
             * formats that are used to represent octal and hexadecimal numbers.
             * @param nm a <code>String</code> that represents
             *                             an opaque color as a 24-bit integer
             * @return the new <code>Color</code> object.
             * @see java.lang.Integer#decode
             * @exception NumberFormatException  if the specified string cannot
             *                       be interpreted as a decimal,
             *                       octal, or hexadecimal integer.
             * @since JDK1.1
             */
            // @ts-ignore
            decode(nm: string): java.awt.Color
            /**
             * Finds a color in the system properties.
             * <p>
             * The argument is treated as the name of a system property to
             * be obtained. The string value of this property is then interpreted
             * as an integer which is then converted to a <code>Color</code>
             * object.
             * <p>
             * If the specified property is not found or could not be parsed as
             * an integer then <code>null</code> is returned.
             * @param nm the name of the color property
             * @return the <code>Color</code> converted from the system
             *           property.
             * @see java.lang.System#getProperty(java.lang.String)
             * @see java.lang.Integer#getInteger(java.lang.String)
             * @see java.awt.Color#Color(int)
             * @since JDK1.0
             */
            // @ts-ignore
            getColor(nm: string): java.awt.Color
            /**
             * Finds a color in the system properties.
             * <p>
             * The first argument is treated as the name of a system property to
             * be obtained. The string value of this property is then interpreted
             * as an integer which is then converted to a <code>Color</code>
             * object.
             * <p>
             * If the specified property is not found or cannot be parsed as
             * an integer then the <code>Color</code> specified by the second
             * argument is returned instead.
             * @param nm the name of the color property
             * @param v    the default <code>Color</code>
             * @return the <code>Color</code> converted from the system
             *           property, or the specified <code>Color</code>.
             * @see java.lang.System#getProperty(java.lang.String)
             * @see java.lang.Integer#getInteger(java.lang.String)
             * @see java.awt.Color#Color(int)
             * @since JDK1.0
             */
            // @ts-ignore
            getColor(nm: string, v: java.awt.Color): java.awt.Color
            /**
             * Finds a color in the system properties.
             * <p>
             * The first argument is treated as the name of a system property to
             * be obtained. The string value of this property is then interpreted
             * as an integer which is then converted to a <code>Color</code>
             * object.
             * <p>
             * If the specified property is not found or could not be parsed as
             * an integer then the integer value <code>v</code> is used instead,
             * and is converted to a <code>Color</code> object.
             * @param nm  the name of the color property
             * @param v   the default color value, as an integer
             * @return the <code>Color</code> converted from the system
             *           property or the <code>Color</code> converted from
             *           the specified integer.
             * @see java.lang.System#getProperty(java.lang.String)
             * @see java.lang.Integer#getInteger(java.lang.String)
             * @see java.awt.Color#Color(int)
             * @since JDK1.0
             */
            // @ts-ignore
            getColor(nm: string, v: number /*int*/): java.awt.Color
            /**
             * Converts the components of a color, as specified by the HSB
             * model, to an equivalent set of values for the default RGB model.
             * <p>
             * The <code>saturation</code> and <code>brightness</code> components
             * should be floating-point values between zero and one
             * (numbers in the range 0.0-1.0).  The <code>hue</code> component
             * can be any floating-point number.  The floor of this number is
             * subtracted from it to create a fraction between 0 and 1.  This
             * fractional number is then multiplied by 360 to produce the hue
             * angle in the HSB color model.
             * <p>
             * The integer that is returned by <code>HSBtoRGB</code> encodes the
             * value of a color in bits 0-23 of an integer value that is the same
             * format used by the method {@link #getRGB() getRGB}.
             * This integer can be supplied as an argument to the
             * <code>Color</code> constructor that takes a single integer argument.
             * @param hue   the hue component of the color
             * @param saturation   the saturation of the color
             * @param brightness   the brightness of the color
             * @return the RGB value of the color with the indicated hue,
             *                             saturation, and brightness.
             * @see java.awt.Color#getRGB()
             * @see java.awt.Color#Color(int)
             * @see java.awt.image.ColorModel#getRGBdefault()
             * @since JDK1.0
             */
            // @ts-ignore
            HSBtoRGB(hue: number /*float*/, saturation: number /*float*/, brightness: number /*float*/): int
            /**
             * Converts the components of a color, as specified by the default RGB
             * model, to an equivalent set of values for hue, saturation, and
             * brightness that are the three components of the HSB model.
             * <p>
             * If the <code>hsbvals</code> argument is <code>null</code>, then a
             * new array is allocated to return the result. Otherwise, the method
             * returns the array <code>hsbvals</code>, with the values put into
             * that array.
             * @param r   the red component of the color
             * @param g   the green component of the color
             * @param b   the blue component of the color
             * @param hsbvals  the array used to return the
             *                      three HSB values, or <code>null</code>
             * @return an array of three elements containing the hue, saturation,
             *                      and brightness (in that order), of the color with
             *                      the indicated red, green, and blue components.
             * @see java.awt.Color#getRGB()
             * @see java.awt.Color#Color(int)
             * @see java.awt.image.ColorModel#getRGBdefault()
             * @since JDK1.0
             */
            // @ts-ignore
            RGBtoHSB(r: number /*int*/, g: number /*int*/, b: number /*int*/, hsbvals: number /*float*/[]): float[]
            /**
             * Creates a <code>Color</code> object based on the specified values
             * for the HSB color model.
             * <p>
             * The <code>s</code> and <code>b</code> components should be
             * floating-point values between zero and one
             * (numbers in the range 0.0-1.0).  The <code>h</code> component
             * can be any floating-point number.  The floor of this number is
             * subtracted from it to create a fraction between 0 and 1.  This
             * fractional number is then multiplied by 360 to produce the hue
             * angle in the HSB color model.
             * @param h   the hue component
             * @param s   the saturation of the color
             * @param b   the brightness of the color
             * @return a <code>Color</code> object with the specified hue,
             *                                  saturation, and brightness.
             * @since JDK1.0
             */
            // @ts-ignore
            getHSBColor(h: number /*float*/, s: number /*float*/, b: number /*float*/): java.awt.Color
            /**
             * Returns a <code>float</code> array containing the color and alpha
             * components of the <code>Color</code>, as represented in the default
             * sRGB color space.
             * If <code>compArray</code> is <code>null</code>, an array of length
             * 4 is created for the return value.  Otherwise,
             * <code>compArray</code> must have length 4 or greater,
             * and it is filled in with the components and returned.
             * @param compArray an array that this method fills with
             *                   color and alpha components and returns
             * @return the RGBA components in a <code>float</code> array.
             */
            // @ts-ignore
            getRGBComponents(compArray: number /*float*/[]): float[]
            /**
             * Returns a <code>float</code> array containing only the color
             * components of the <code>Color</code>, in the default sRGB color
             * space.  If <code>compArray</code> is <code>null</code>, an array of
             * length 3 is created for the return value.  Otherwise,
             * <code>compArray</code> must have length 3 or greater, and it is
             * filled in with the components and returned.
             * @param compArray an array that this method fills with color
             *           components and returns
             * @return the RGB components in a <code>float</code> array.
             */
            // @ts-ignore
            getRGBColorComponents(compArray: number /*float*/[]): float[]
            /**
             * Returns a <code>float</code> array containing the color and alpha
             * components of the <code>Color</code>, in the
             * <code>ColorSpace</code> of the <code>Color</code>.
             * If <code>compArray</code> is <code>null</code>, an array with
             * length equal to the number of components in the associated
             * <code>ColorSpace</code> plus one is created for
             * the return value.  Otherwise, <code>compArray</code> must have at
             * least this length and it is filled in with the components and
             * returned.
             * @param compArray an array that this method fills with the color and
             *           alpha components of this <code>Color</code> in its
             *           <code>ColorSpace</code> and returns
             * @return the color and alpha components in a <code>float</code>
             *           array.
             */
            // @ts-ignore
            getComponents(compArray: number /*float*/[]): float[]
            /**
             * Returns a <code>float</code> array containing only the color
             * components of the <code>Color</code>, in the
             * <code>ColorSpace</code> of the <code>Color</code>.
             * If <code>compArray</code> is <code>null</code>, an array with
             * length equal to the number of components in the associated
             * <code>ColorSpace</code> is created for
             * the return value.  Otherwise, <code>compArray</code> must have at
             * least this length and it is filled in with the components and
             * returned.
             * @param compArray an array that this method fills with the color
             *           components of this <code>Color</code> in its
             *           <code>ColorSpace</code> and returns
             * @return the color components in a <code>float</code> array.
             */
            // @ts-ignore
            getColorComponents(compArray: number /*float*/[]): float[]
            /**
             * Returns a <code>float</code> array containing the color and alpha
             * components of the <code>Color</code>, in the
             * <code>ColorSpace</code> specified by the <code>cspace</code>
             * parameter.  If <code>compArray</code> is <code>null</code>, an
             * array with length equal to the number of components in
             * <code>cspace</code> plus one is created for the return value.
             * Otherwise, <code>compArray</code> must have at least this
             * length, and it is filled in with the components and returned.
             * @param cspace a specified <code>ColorSpace</code>
             * @param compArray an array that this method fills with the
             *           color and alpha components of this <code>Color</code> in
             *           the specified <code>ColorSpace</code> and returns
             * @return the color and alpha components in a <code>float</code>
             *           array.
             */
            // @ts-ignore
            getComponents(cspace: java.awt.color.ColorSpace, compArray: number /*float*/[]): float[]
            /**
             * Returns a <code>float</code> array containing only the color
             * components of the <code>Color</code> in the
             * <code>ColorSpace</code> specified by the <code>cspace</code>
             * parameter. If <code>compArray</code> is <code>null</code>, an array
             * with length equal to the number of components in
             * <code>cspace</code> is created for the return value.  Otherwise,
             * <code>compArray</code> must have at least this length, and it is
             * filled in with the components and returned.
             * @param cspace a specified <code>ColorSpace</code>
             * @param compArray an array that this method fills with the color
             *           components of this <code>Color</code> in the specified
             *           <code>ColorSpace</code>
             * @return the color components in a <code>float</code> array.
             */
            // @ts-ignore
            getColorComponents(cspace: java.awt.color.ColorSpace, compArray: number /*float*/[]): float[]
            /**
             * Returns the <code>ColorSpace</code> of this <code>Color</code>.
             * @return this <code>Color</code> object's <code>ColorSpace</code>.
             */
            // @ts-ignore
            getColorSpace(): java.awt.color.ColorSpace
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a solid color field pattern.
             * See the {@link Paint#createContext specification} of the
             * method in the {@link Paint} interface for information
             * on null parameter handling.
             * @param cm the preferred {#link ColorModel} which represents the most convenient
             *            format for the caller to receive the pixel data, or {@code null}
             *            if there is no preference.
             * @param r the device space bounding box
             *                      of the graphics primitive being rendered.
             * @param r2d the user space bounding box
             *                    of the graphics primitive being rendered.
             * @param xform the {#link AffineTransform} from user
             *               space into device space.
             * @param hints the set of hints that the context object can use to
             *               choose between rendering alternatives.
             * @return the {#code PaintContext} for
             *          generating color patterns.
             * @see Paint
             * @see PaintContext
             * @see ColorModel
             * @see Rectangle
             * @see Rectangle2D
             * @see AffineTransform
             * @see RenderingHints
             */
            // @ts-ignore
            createContext(cm: java.awt.image.ColorModel, r: java.awt.Rectangle, r2d: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext
            /**
             * Returns the transparency mode for this <code>Color</code>.  This is
             * required to implement the <code>Paint</code> interface.
             * @return this <code>Color</code> object's transparency mode.
             * @see Paint
             * @see Transparency
             * @see #createContext
             */
            // @ts-ignore
            getTransparency(): int
        }
    }
}
