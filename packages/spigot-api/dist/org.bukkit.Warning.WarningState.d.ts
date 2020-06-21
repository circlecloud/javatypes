declare namespace org {
    namespace bukkit {
        namespace Warning {
            /**
             * This represents the states that server verbose for warnings may be.
             */
            // @ts-ignore
            class WarningState extends java.lang.Enum<org.bukkit.Warning.WarningState> {
                /**
                 * Indicates all warnings should be printed for deprecated items.
                 */
                // @ts-ignore
                readonly ON: org.bukkit.Warning.WarningState
                /**
                 * Indicates no warnings should be printed for deprecated items.
                 */
                // @ts-ignore
                readonly OFF: org.bukkit.Warning.WarningState
                /**
                 * Indicates each warning would default to the configured {@link
                 * Warning} annotation, or always if annotation not found.
                 */
                // @ts-ignore
                readonly DEFAULT: org.bukkit.Warning.WarningState
                // @ts-ignore
                values(): org.bukkit.Warning.WarningState[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.Warning.WarningState
                /**
                 * This method checks the provided warning should be printed for this
                 * state
                 * @param warning The warning annotation added to a deprecated item
                 * @return <ul>
                 *      <li>ON is always True
                 *      <li>OFF is always false
                 *      <li>DEFAULT is false if and only if annotation is not null and
                 *      specifies false for {#link Warning#value()}, true otherwise.
                 *      </ul>
                 */
                // @ts-ignore
                printFor(warning: org.bukkit.Warning): boolean
                /**
                 * This method returns the corresponding warning state for the given
                 * string value.
                 * @param value The string value to check
                 * @return {#link #DEFAULT} if not found, or the respective
                 *      WarningState
                 */
                // @ts-ignore
                value(value: java.lang.String | string): org.bukkit.Warning.WarningState
            }
        }
    }
}
