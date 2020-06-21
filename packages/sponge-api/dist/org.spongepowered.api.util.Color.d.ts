declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                class Color extends java.lang.Object implements org.spongepowered.api.data.DataSerializable {
                    // @ts-ignore
                    public static readonly BLACK: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly GRAY: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly WHITE: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly BLUE: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly GREEN: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly LIME: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly RED: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly YELLOW: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly MAGENTA: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly PURPLE: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly DARK_CYAN: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly DARK_GREEN: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly DARK_MAGENTA: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly CYAN: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly NAVY: org.spongepowered.api.util.Color
                    // @ts-ignore
                    public static readonly PINK: org.spongepowered.api.util.Color
                    /**
                     * Gets a new {@link Color} based on the hexadecimal value
                     * for a combined {@code red}, {@code green}, and {@code blue}
                     * color. Note that colors do not utilize an alpha modifier
                     * @param hex The hexadecimal value of the color
                     * @return The color object
                     */
                    // @ts-ignore
                    public static ofRgb(hex: number /*int*/): org.spongepowered.api.util.Color
                    /**
                     * Gets a new {@link Color} based on the hexadecimal value
                     * for a combined {@code red}, {@code green}, and {@code blue}
                     * color. Note that colors do not utilize an alpha modifier
                     * @param red The red value
                     * @param green The green value
                     * @param blue The blue value
                     * @return The color object
                     */
                    // @ts-ignore
                    public static ofRgb(red: number /*int*/, green: number /*int*/, blue: number /*int*/): org.spongepowered.api.util.Color
                    /**
                     * Converts the provided {@link java.awt.Color} object into a valid
                     * {@link Color} object to be used throughout the API.
                     * @param color The java color object
                     * @return The converted color object
                     */
                    // @ts-ignore
                    public static of(color: java.awt.Color): org.spongepowered.api.util.Color
                    /**
                     * Converts the provided {@link Vector3i} into a {@link Color} object.
                     * @param vector3i The vector of three integers representing color
                     * @return The color object
                     */
                    // @ts-ignore
                    public static of(vector3i: Vector3i): org.spongepowered.api.util.Color
                    /**
                     * converts the provided {@link Vector3f} into a {@link Color} object.
                     * @param vector3f The vector of three floats representing color
                     * @return The color object
                     */
                    // @ts-ignore
                    public static of(vector3f: Vector3f): org.spongepowered.api.util.Color
                    /**
                     * converts the provided {@link Vector3d} into a {@link Color} object.
                     * @param vector3d The vector of three doubles representing color
                     * @return The color object
                     */
                    // @ts-ignore
                    public static of(vector3d: Vector3d): org.spongepowered.api.util.Color
                    /**
                     * Creates a new {@link Color} combining the provided {@link DyeColor}
                     * objects. Since {@link DyeColor}s can be converted into {@link Color}
                     * objects themselves, their summation and average is taken into effect
                     * to properly mix the colors together.
                     * @param colors The colors to mix
                     * @return The final output mixed color
                     */
                    // @ts-ignore
                    public static mixDyeColors(...colors: org.spongepowered.api.data.type.DyeColor[]): org.spongepowered.api.util.Color
                    /**
                     * Creates a new {@link Color} combining the provided {@link Color}
                     * objects, their summation and average is taken into effect
                     * to properly mix the colors together.
                     * @param colors The colors to mix
                     * @return The final output mixed color
                     */
                    // @ts-ignore
                    public static mixColors(...colors: org.spongepowered.api.util.Color[]): org.spongepowered.api.util.Color
                    /**
                     * Gets the {@code red} value of this {@link Color}.
                     * @return The red value
                     */
                    // @ts-ignore
                    public getRed(): number /*int*/
                    /**
                     * Creates a new {@link Color} by using the provided
                     * {@code red} color, while retaining the current {@link #getGreen()}
                     * and {@link #getBlue()} values.
                     * @param red The red value to use
                     * @return The new color object
                     */
                    // @ts-ignore
                    public withRed(red: number /*int*/): org.spongepowered.api.util.Color
                    /**
                     * Gets the {@code red} value of this {@link Color}.
                     * @return The red value
                     */
                    // @ts-ignore
                    public getGreen(): number /*int*/
                    /**
                     * Creates a new {@link Color} by using the provided
                     * {@code green} color, while retaining the current {@link #getRed()}
                     * and {@link #getBlue()} values.
                     * @param green The green value to use
                     * @return The new color object
                     */
                    // @ts-ignore
                    public withGreen(green: number /*int*/): org.spongepowered.api.util.Color
                    /**
                     * Gets the current {@code blue} value of this {@link Color}.
                     * @return The blue value
                     */
                    // @ts-ignore
                    public getBlue(): number /*int*/
                    /**
                     * Creates a new {@link Color} by using the provided
                     * {@code blue} color, while retaining the current {@link #getGreen()}
                     * and {@link #getRed()} ()} values.
                     * @param blue The blue value to use
                     * @return The new color object
                     */
                    // @ts-ignore
                    public withBlue(blue: number /*int*/): org.spongepowered.api.util.Color
                    /**
                     * Converts this {@link Color} into a {@link java.awt.Color} object for use
                     * in other APIs.
                     * @return The java awt color object
                     */
                    // @ts-ignore
                    public asJavaColor(): java.awt.Color
                    /**
                     * Gets the {@code red green blue} representation of this color in
                     * a "hexadecimal" format.
                     * @return The current color value in a hexadecimal format
                     */
                    // @ts-ignore
                    public getRgb(): number /*int*/
                    /**
                     * Creates a new color with the provided {@code Colors}.
                     * @param colors The provided colors to mix
                     * @return The new color
                     */
                    // @ts-ignore
                    public mixWithColors(...colors: org.spongepowered.api.util.Color[]): org.spongepowered.api.util.Color
                    /**
                     * Similar to {@link #mixWithColors(Color...)}, mixes the
                     * provided {@link DyeColor}s with this {@link Color}.
                     * @param dyeColors The dye colors to mix
                     * @return The new color
                     */
                    // @ts-ignore
                    public mixWithDyes(...dyeColors: org.spongepowered.api.data.type.DyeColor[]): org.spongepowered.api.util.Color
                    // @ts-ignore
                    public getContentVersion(): number /*int*/
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
