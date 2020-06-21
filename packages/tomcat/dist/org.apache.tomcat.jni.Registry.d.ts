declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Windows Registry support
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Registry extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly HKEY_CLASSES_ROOT: number /*int*/
                    // @ts-ignore
                    public static readonly HKEY_CURRENT_CONFIG: number /*int*/
                    // @ts-ignore
                    public static readonly HKEY_CURRENT_USER: number /*int*/
                    // @ts-ignore
                    public static readonly HKEY_LOCAL_MACHINE: number /*int*/
                    // @ts-ignore
                    public static readonly HKEY_USERS: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_ALL_ACCESS: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_CREATE_LINK: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_CREATE_SUB_KEY: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_ENUMERATE_SUB_KEYS: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_EXECUTE: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_NOTIFY: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_QUERY_VALUE: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_READ: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_SET_VALUE: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_WOW64_64KEY: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_WOW64_32KEY: number /*int*/
                    // @ts-ignore
                    public static readonly KEY_WRITE: number /*int*/
                    // @ts-ignore
                    public static readonly REG_BINARY: number /*int*/
                    // @ts-ignore
                    public static readonly REG_DWORD: number /*int*/
                    // @ts-ignore
                    public static readonly REG_EXPAND_SZ: number /*int*/
                    // @ts-ignore
                    public static readonly REG_MULTI_SZ: number /*int*/
                    // @ts-ignore
                    public static readonly REG_QWORD: number /*int*/
                    // @ts-ignore
                    public static readonly REG_SZ: number /*int*/
                    /**
                     * Create or open a Registry Key.
                     * @param name Registry Subkey to open
                     * @param root Root key, one of HKEY_*
                     * @param sam Access mask that specifies the access rights for the key.
                     * @param pool Pool used for native memory allocation
                     * @return Opened Registry key
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static create(root: number /*int*/, name: java.lang.String | string, sam: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Opens the specified Registry Key.
                     * @param name Registry Subkey to open
                     * @param root Root key, one of HKEY_*
                     * @param sam Access mask that specifies the access rights for the key.
                     * @param pool Pool used for native memory allocation
                     * @return Opened Registry key
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static open(root: number /*int*/, name: java.lang.String | string, sam: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Close the specified Registry key.
                     * @param key The Registry key descriptor to close.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static close(key: number /*long*/): number /*int*/
                    /**
                     * Get the Registry key type.
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Value type or negative error value
                     */
                    // @ts-ignore
                    public static getType(key: number /*long*/, name: java.lang.String | string): number /*int*/
                    /**
                     * Get the Registry value for REG_DWORD
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Registry key value
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static getValueI(key: number /*long*/, name: java.lang.String | string): number /*int*/
                    /**
                     * Get the Registry value for REG_QWORD or REG_DWORD
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Registry key value
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static getValueJ(key: number /*long*/, name: java.lang.String | string): number /*long*/
                    /**
                     * Get the Registry key length.
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Value size or negative error value
                     */
                    // @ts-ignore
                    public static getSize(key: number /*long*/, name: java.lang.String | string): number /*int*/
                    /**
                     * Get the Registry value for REG_SZ or REG_EXPAND_SZ
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Registry key value
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static getValueS(key: number /*long*/, name: java.lang.String | string): string
                    /**
                     * Get the Registry value for REG_MULTI_SZ
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Registry key value
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static getValueA(key: number /*long*/, name: java.lang.String | string): string[]
                    /**
                     * Get the Registry value for REG_BINARY
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to query
                     * @return Registry key value
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static getValueB(key: number /*long*/, name: java.lang.String | string): number /*byte*/[]
                    /**
                     * Set the Registry value for REG_DWORD
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to set
                     * @param val The the value to set
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static setValueI(key: number /*long*/, name: java.lang.String | string, val: number /*int*/): number /*int*/
                    /**
                     * Set the Registry value for REG_QWORD
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to set
                     * @param val The the value to set
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static setValueJ(key: number /*long*/, name: java.lang.String | string, val: number /*long*/): number /*int*/
                    /**
                     * Set the Registry value for REG_SZ
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to set
                     * @param val The the value to set
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static setValueS(key: number /*long*/, name: java.lang.String | string, val: java.lang.String | string): number /*int*/
                    /**
                     * Set the Registry value for REG_EXPAND_SZ
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to set
                     * @param val The the value to set
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static setValueE(key: number /*long*/, name: java.lang.String | string, val: java.lang.String | string): number /*int*/
                    /**
                     * Set the Registry value for REG_MULTI_SZ
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to set
                     * @param val The the value to set
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static setValueA(key: number /*long*/, name: java.lang.String | string, val: java.lang.String[] | string[]): number /*int*/
                    /**
                     * Set the Registry value for REG_BINARY
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to set
                     * @param val The the value to set
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static setValueB(key: number /*long*/, name: java.lang.String | string, val: number /*byte*/[]): number /*int*/
                    /**
                     * Enumerate the Registry subkeys
                     * @param key The Registry key descriptor to use.
                     * @return Array of all subkey names
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static enumKeys(key: number /*long*/): string[]
                    /**
                     * Enumerate the Registry values
                     * @param key The Registry key descriptor to use.
                     * @return Array of all value names
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static enumValues(key: number /*long*/): string[]
                    /**
                     * Delete the Registry value
                     * @param key The Registry key descriptor to use.
                     * @param name The name of the value to delete
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static deleteValue(key: number /*long*/, name: java.lang.String | string): number /*int*/
                    /**
                     * Delete the Registry subkey
                     * @param root Root key, one of HKEY_*
                     * @param name Subkey to delete
                     * @param onlyIfEmpty If true will not delete a key if
                     *                     it contains any subkeys or values
                     * @return If the function succeeds, the return value is 0
                     */
                    // @ts-ignore
                    public static deleteKey(root: number /*int*/, name: java.lang.String | string, onlyIfEmpty: boolean): number /*int*/
                }
            }
        }
    }
}
