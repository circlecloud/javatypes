declare namespace java {
    namespace awt {
        namespace color {
            /**
             * The ICC_ProfileRGB class is a subclass of the ICC_Profile class
             * that represents profiles which meet the following criteria:
             * <ul>
             * <li>The profile's color space type is RGB.</li>
             * <li>The profile includes the <code>redColorantTag</code>,
             * <code>greenColorantTag</code>, <code>blueColorantTag</code>,
             * <code>redTRCTag</code>, <code>greenTRCTag</code>,
             * <code>blueTRCTag</code>, and <code>mediaWhitePointTag</code> tags.</li>
             * </ul>
             * The <code>ICC_Profile</code> <code>getInstance</code> method will
             * return an <code>ICC_ProfileRGB</code> object when these conditions are met.
             * Three-component, matrix-based input profiles and RGB display profiles are
             * examples of this type of profile.
             * <p>
             * This profile class provides color transform matrices and lookup tables
             * that Java or native methods can use directly to
             * optimize color conversion in some cases.
             * <p>
             * To transform from a device profile color space to the CIEXYZ Profile
             * Connection Space, each device color component is first linearized by
             * a lookup through the corresponding tone reproduction curve (TRC).
             * The resulting linear RGB components are converted to the CIEXYZ PCS
             * using a a 3x3 matrix constructed from the RGB colorants.
             * <pre>
             * &nbsp;               linearR = redTRC[deviceR]
             * &nbsp;               linearG = greenTRC[deviceG]
             * &nbsp;               linearB = blueTRC[deviceB]
             * &nbsp; _      _       _                                             _   _         _
             * &nbsp;[  PCSX  ]     [  redColorantX  greenColorantX  blueColorantX  ] [  linearR  ]
             * &nbsp;[        ]     [                                               ] [           ]
             * &nbsp;[  PCSY  ]  =  [  redColorantY  greenColorantY  blueColorantY  ] [  linearG  ]
             * &nbsp;[        ]     [                                               ] [           ]
             * &nbsp;[_ PCSZ _]     [_ redColorantZ  greenColorantZ  blueColorantZ _] [_ linearB _]
             * </pre>
             * The inverse transform is performed by converting PCS XYZ components to linear
             * RGB components through the inverse of the above 3x3 matrix, and then converting
             * linear RGB to device RGB through inverses of the TRCs.
             */
            // @ts-ignore
            class ICC_ProfileRGB extends java.awt.color.ICC_Profile {
                /**
                 * Used to get a gamma value or TRC for the red component.
                 */
                // @ts-ignore
                public static readonly REDCOMPONENT: number /*int*/
                /**
                 * Used to get a gamma value or TRC for the green component.
                 */
                // @ts-ignore
                public static readonly GREENCOMPONENT: number /*int*/
                /**
                 * Used to get a gamma value or TRC for the blue component.
                 */
                // @ts-ignore
                public static readonly BLUECOMPONENT: number /*int*/
                /**
                 * Returns an array that contains the components of the profile's
                 * <CODE>mediaWhitePointTag</CODE>.
                 * @return A 3-element <CODE>float</CODE> array containing the x, y,
                 *  and z components of the profile's <CODE>mediaWhitePointTag</CODE>.
                 */
                // @ts-ignore
                public getMediaWhitePoint(): number /*float*/[]
                /**
                 * Returns a 3x3 <CODE>float</CODE> matrix constructed from the
                 * X, Y, and Z components of the profile's <CODE>redColorantTag</CODE>,
                 * <CODE>greenColorantTag</CODE>, and <CODE>blueColorantTag</CODE>.
                 * <p>
                 * This matrix can be used for color transforms in the forward
                 * direction of the profile--from the profile color space
                 * to the CIEXYZ PCS.
                 * @return A 3x3 <CODE>float</CODE> array that contains the x, y, and z
                 *  components of the profile's <CODE>redColorantTag</CODE>,
                 *  <CODE>greenColorantTag</CODE>, and <CODE>blueColorantTag</CODE>.
                 */
                // @ts-ignore
                public getMatrix(): number /*float*/[][]
                /**
                 * Returns a gamma value representing the tone reproduction curve
                 * (TRC) for a particular component.  The component parameter
                 * must be one of REDCOMPONENT, GREENCOMPONENT, or BLUECOMPONENT.
                 * <p>
                 * If the profile
                 * represents the TRC for the corresponding component
                 * as a table rather than a single gamma value, an
                 * exception is thrown.  In this case the actual table
                 * can be obtained through the {@link #getTRC(int)} method.
                 * When using a gamma value,
                 * the linear component (R, G, or B) is computed as follows:
                 * <pre>
                 * &nbsp;                                         gamma
                 * &nbsp;        linearComponent = deviceComponent
                 * </pre>
                 * @param component The <CODE>ICC_ProfileRGB</CODE> constant that
                 *  represents the component whose TRC you want to retrieve
                 * @return the gamma value as a float.
                 * @exception ProfileDataException if the profile does not specify
                 *             the corresponding TRC as a single gamma value.
                 */
                // @ts-ignore
                public getGamma(component: number /*int*/): number /*float*/
                /**
                 * Returns the TRC for a particular component as an array.
                 * Component must be <code>REDCOMPONENT</code>,
                 * <code>GREENCOMPONENT</code>, or <code>BLUECOMPONENT</code>.
                 * Otherwise the returned array
                 * represents a lookup table where the input component value
                 * is conceptually in the range [0.0, 1.0].  Value 0.0 maps
                 * to array index 0 and value 1.0 maps to array index length-1.
                 * Interpolation might be used to generate output values for
                 * input values that do not map exactly to an index in the
                 * array.  Output values also map linearly to the range [0.0, 1.0].
                 * Value 0.0 is represented by an array value of 0x0000 and
                 * value 1.0 by 0xFFFF.  In other words, the values are really unsigned
                 * <code>short</code> values even though they are returned in a
                 * <code>short</code> array.
                 * If the profile has specified the corresponding TRC
                 * as linear (gamma = 1.0) or as a simple gamma value, this method
                 * throws an exception.  In this case, the {@link #getGamma(int)}
                 * method should be used to get the gamma value.
                 * @param component The <CODE>ICC_ProfileRGB</CODE> constant that
                 *  represents the component whose TRC you want to retrieve:
                 *  <CODE>REDCOMPONENT</CODE>, <CODE>GREENCOMPONENT</CODE>, or
                 *  <CODE>BLUECOMPONENT</CODE>.
                 * @return a short array representing the TRC.
                 * @exception ProfileDataException if the profile does not specify
                 *             the corresponding TRC as a table.
                 */
                // @ts-ignore
                public getTRC(component: number /*int*/): number /*short*/[]
            }
        }
    }
}
