declare namespace cn {
    namespace nukkit {
        namespace api {
            namespace API {
                /**
                 * Enum constant for API usage. Indicates when to use this API element.
                 * @see #DEPRECATED
                 * @see #INCUBATING
                 * @see #BLEEDING
                 * @see #EXPERIMENTAL
                 * @see #MAINTAINED
                 * @see #STABLE
                 */
                // @ts-ignore
                class Usage extends java.lang.Enum<cn.nukkit.api.API.Usage> {
                    /**
                     * Should no longer be used, might disappear in the next minor release.
                     */
                    // @ts-ignore
                    readonly DEPRECATED: cn.nukkit.api.API.Usage
                    /**
                     * Intended for features in drafts. Should only be used for tests.
                     * <p>Might contains notable new features, but will be moved to a new package before remarking to {@link #BLEEDING}.
                     * Could be unsafe, might be removed without prior notice. Warnings will be send if used.
                     */
                    // @ts-ignore
                    readonly INCUBATING: cn.nukkit.api.API.Usage
                    /**
                     * Intended for features in early development. Should only be used for tests.
                     * <p>Might be unwrapped, unsafe or have unchecked parameters.
                     * Further contribution was demanded to enhance, strengthen or simplify before remarking to {@link #EXPERIMENTAL}.
                     * Might be removed or modified without prior notice.
                     */
                    // @ts-ignore
                    readonly BLEEDING: cn.nukkit.api.API.Usage
                    /**
                     * Intended for new, experimental features where we are looking for feedback.
                     * At least stable for development.
                     * <p>Use with caution, might be remarked to {@link #MAINTAINED} or {@link #STABLE} in the future,
                     * but also might be removed without prior notice.
                     */
                    // @ts-ignore
                    readonly EXPERIMENTAL: cn.nukkit.api.API.Usage
                    /**
                     * Intended for features that was tested, documented and at least stable for production use.
                     * <p>These features will not be modified in a backwards-incompatible way for at least next minor release
                     * of the current major version. Will be remarked to {@link #DEPRECATED} first if scheduled for removal.
                     */
                    // @ts-ignore
                    readonly MAINTAINED: cn.nukkit.api.API.Usage
                    /**
                     * Intended for features that was tested, documented and is preferred in production use.
                     * <p>Will not be changed in a backwards-incompatible way in the current version.
                     */
                    // @ts-ignore
                    readonly STABLE: cn.nukkit.api.API.Usage
                    // @ts-ignore
                    values(): cn.nukkit.api.API.Usage[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): cn.nukkit.api.API.Usage
                }
            }
        }
    }
}
