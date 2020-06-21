declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * This class provides methods to dynamically create and access arrays.
             * @author OTI
             * @version initial
             */
            // @ts-ignore
            class Array extends java.lang.Object {
                /**
                 * Return the element of the array at the specified index.
                 * This reproduces the effect of <code>array[index]</code>
                 * If the array component is a base type, the result is
                 * automatically wrapped.
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element, possibly wrapped
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static get(array: java.lang.Object | any, index: number /*int*/): any
                /**
                 * Return the element of the array at the specified index,
                 * converted to a boolean if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getBoolean(array: java.lang.Object | any, index: number /*int*/): boolean
                /**
                 * Return the element of the array at the specified index,
                 * converted to a byte if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getByte(array: java.lang.Object | any, index: number /*int*/): number /*byte*/
                /**
                 * Return the element of the array at the specified index,
                 * converted to a char if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getChar(array: java.lang.Object | any, index: number /*int*/): string
                /**
                 * Return the element of the array at the specified index,
                 * converted to a double if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getDouble(array: java.lang.Object | any, index: number /*int*/): number /*double*/
                /**
                 * Return the element of the array at the specified index,
                 * converted to a float if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getFloat(array: java.lang.Object | any, index: number /*int*/): number /*float*/
                /**
                 * Return the element of the array at the specified index,
                 * converted to an int if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getInt(array: java.lang.Object | any, index: number /*int*/): number /*int*/
                /**
                 * Return the length of the array.
                 * This reproduces the effect of <code>array.length</code>
                 * @param array	the array
                 * @return the length
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array
                 */
                // @ts-ignore
                public static getLength(array: java.lang.Object | any): number /*int*/
                /**
                 * Return the element of the array at the specified index,
                 * converted to a long if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getLong(array: java.lang.Object | any, index: number /*int*/): number /*long*/
                /**
                 * Return the element of the array at the specified index,
                 * converted to a short if possible.
                 * This reproduces the effect of <code>array[index]</code>
                 * @param array	the array
                 * @param index	the index
                 * @return the requested element
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the element cannot be converted to the requested type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static getShort(array: java.lang.Object | any, index: number /*int*/): number /*short*/
                /**
                 * Return a new multidimensional array of the specified component type and dimensions.
                 * This reproduces the effect of <code>new componentType[d0][d1]...[dn]</code>
                 * for a dimensions array of { d0, d1, ... , dn }
                 * @param componentType	the component type of the new array
                 * @param dimensions		the dimensions of the new array
                 * @return the new array
                 * @exception java.lang.NullPointerException
                 * 					if the component type is null
                 * @exception java.lang.NegativeArraySizeException
                 * 					if any of the dimensions are negative
                 * @exception java.lang.IllegalArgumentException
                 * 					if componentType is Void.TYPE, or if the array of dimensions is of size zero, or exceeds the limit of
                 * 					the number of dimension for an array (currently 255)
                 */
                // @ts-ignore
                public static newInstance(componentType: java.lang.Class<any>, ...dimensions: number /*int*/[]): any
                /**
                 * Return a new array of the specified component type and length.
                 * This reproduces the effect of <code>new componentType[size]</code>
                 * @param componentType	the component type of the new array
                 * @param size			the length of the new array
                 * @return the new array
                 * @exception java.lang.NullPointerException
                 * 					if the component type is null
                 * @exception java.lang.NegativeArraySizeException
                 * 					if the size if negative
                 * @exception java.lang.IllegalArgumentException
                 * 					if componentType is Void.TYPE, or the array dimension exceeds the limit of
                 * 					the number of dimension for an array (currently 255)
                 */
                // @ts-ignore
                public static newInstance(componentType: java.lang.Class<any>, size: number /*int*/): any
                /**
                 * Set the element of the array at the specified index to the value.
                 * This reproduces the effect of <code>array[index] = value</code>
                 * If the array component is a base type, the value is automatically
                 * unwrapped
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static set(array: java.lang.Object | any, index: number /*int*/, value: java.lang.Object | any): void
                /**
                 * Set the element of the array at the specified index to the boolean
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setBoolean(array: java.lang.Object | any, index: number /*int*/, value: boolean): void
                /**
                 * Set the element of the array at the specified index to the byte
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setByte(array: java.lang.Object | any, index: number /*int*/, value: number /*byte*/): void
                /**
                 * Set the element of the array at the specified index to the char
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setChar(array: java.lang.Object | any, index: number /*int*/, value: string): void
                /**
                 * Set the element of the array at the specified index to the double
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setDouble(array: java.lang.Object | any, index: number /*int*/, value: number /*double*/): void
                /**
                 * Set the element of the array at the specified index to the float
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setFloat(array: java.lang.Object | any, index: number /*int*/, value: number /*float*/): void
                /**
                 * Set the element of the array at the specified index to the int
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setInt(array: java.lang.Object | any, index: number /*int*/, value: number /*int*/): void
                /**
                 * Set the element of the array at the specified index to the long
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setLong(array: java.lang.Object | any, index: number /*int*/, value: number /*long*/): void
                /**
                 * Set the element of the array at the specified index to the short
                 * value. This reproduces the effect of <code>array[index] = value</code>
                 * @param array	the array
                 * @param index	the index
                 * @param value	the new value
                 * @exception java.lang.NullPointerException
                 * 					if the array is null
                 * @exception java.lang.IllegalArgumentException
                 * 					if the array is not an array or the value cannot be converted to the array type by a widening conversion
                 * @exception java.lang.ArrayIndexOutOfBoundsException
                 * 					if the index is out of bounds -- negative or greater than or equal to the array length
                 */
                // @ts-ignore
                public static setShort(array: java.lang.Object | any, index: number /*int*/, value: number /*short*/): void
            }
        }
    }
}
